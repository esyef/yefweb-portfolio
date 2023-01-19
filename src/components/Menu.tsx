import Link from 'next/link';
import React from 'react';
import { navLinks } from '../constans';

type PROPS = {
  active: string;
  toggleActive: (item: string) => void;
};

const Menu = ({ active, toggleActive }: PROPS) => {
  return (
    <ul className='hidden  gap-6 md:flex'>
      {navLinks.map((nav, index) => (
        <li
          key={nav.path + index}
          className='flex flex-col items-center font-medium tracking-widest'
        >
          <Link
            href={`#${nav.path}`}
            className={`relative transition-colors duration-150 hover:text-accentText ${
              nav.path === active ? 'menu text-accentText' : 'text-white'
            }`}
            onClick={() => toggleActive(nav.path)}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
