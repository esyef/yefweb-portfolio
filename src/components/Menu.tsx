import Link from 'next/link';
import { navLinks } from '../constans';

type PROPS = {
  active: string;
  toggleActive: (item: string) => void;
};

const Menu = ({ active, toggleActive }: PROPS) => {
  return (
    <nav className='hidden gap-6 md:flex '>
      {navLinks.map((nav, index) => (
        <Link
          key={nav.path}
          href={`#${nav.path}`}
          className={`relative z-50 transition-colors duration-150 hover:text-accentText ${
            nav.path === active ? 'menu text-accentText' : 'text-white'
          }`}
          onClick={() => toggleActive(nav.path)}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
