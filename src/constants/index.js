import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  // Note: Python and C++ icons not available in assets, can be added later
];

const experiences = [
  // Agrega tus experiencias aquí
  // Ejemplo:
  // {
  //   title: 'Tu puesto',
  //   company_name: 'Nombre de la empresa',
  //   icon: coverhunt, // Usa un icono de la carpeta company o agrega el tuyo
  //   iconBg: '#333333',
  //   date: 'Fecha inicio - Fecha fin',
  // },
];

const projects = [
  // Agrega tus proyectos aquí
  // Ejemplo:
  // {
  //   id: 'project-1',
  //   name: 'Nombre del proyecto',
  //   description: 'Descripción de tu proyecto',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //   ],
  //   image: komikult, // Usa una imagen de la carpeta projects o agrega la tuya
  //   repo: 'https://github.com/tu-usuario/tu-repo', // URL de tu repositorio
  //   demo: 'https://tu-demo.com', // URL de tu demo en vivo
  // },
];

export { services, technologies, experiences, projects };
