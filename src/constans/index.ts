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

export { navLinks, filterItems };
