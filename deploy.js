import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync, rmSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Archivos y carpetas que NO deben copiarse a la raíz
const exclude = ['node_modules', 'src', 'public', '.git', 'dist', 'deploy.js', 'package.json', 'package-lock.json', 'vite.config.js', 'tailwind.config.cjs', 'postcss.config.js', '.gitignore', 'README.md', 'MIT.md'];

// Función para copiar archivos recursivamente
function copyRecursive(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    // Saltar archivos/carpetas excluidos
    if (exclude.includes(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      if (!existsSync(destPath)) {
        mkdirSync(destPath, { recursive: true });
      }
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Limpiar archivos antiguos de la raíz (excepto los excluidos)
console.log('Limpiando archivos antiguos...');
const rootFiles = readdirSync('.');
for (const file of rootFiles) {
  if (!exclude.includes(file) && file !== 'index.html') {
    const filePath = join('.', file);
    try {
      if (statSync(filePath).isDirectory()) {
        rmSync(filePath, { recursive: true, force: true });
      } else {
        rmSync(filePath, { force: true });
      }
    } catch (err) {
      // Ignorar errores si el archivo no existe
    }
  }
}

// Copiar archivos de dist a la raíz
console.log('Copiando archivos de dist a la raíz...');
if (existsSync('dist')) {
  copyRecursive('dist', '.');
  
  // Convertir rutas absolutas a relativas en index.html para que funcione localmente y en GitHub Pages
  console.log('Convirtiendo rutas absolutas a relativas en index.html...');
  const indexPath = join('.', 'index.html');
  if (existsSync(indexPath)) {
    let indexContent = readFileSync(indexPath, 'utf8');
    // Reemplazar rutas absolutas por relativas
    indexContent = indexContent.replace(/href="\//g, 'href="./');
    indexContent = indexContent.replace(/src="\//g, 'src="./');
    writeFileSync(indexPath, indexContent, 'utf8');
  }
  
  console.log('✅ Deploy completado! Los archivos están listos para GitHub Pages.');
  console.log('💡 Ahora puedes hacer commit y push a GitHub.');
  console.log('📝 El index.html funciona tanto localmente como en GitHub Pages.');
} else {
  console.error('❌ Error: La carpeta dist no existe. Ejecuta "npm run build" primero.');
  process.exit(1);
}

