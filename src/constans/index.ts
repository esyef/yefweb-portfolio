type LINKS = {
  path: string;
  title: string;
};

const navLinks: LINKS[] = [
  {
    path: 'inicio',
    title: 'Inicio',
  },
  {
    path: 'sobre-mi',
    title: 'Sobre mí',
  },
  {
    path: 'proyectos',
    title: 'Proyectos',
  },
  {
    path: 'contacto',
    title: 'Contacto',
  },
];

const filterItems = ['UI/UX', 'ReactJs', 'All'];

const fullYear = new Date();
const getYear = fullYear.getFullYear();

export { navLinks, filterItems, getYear };
