import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import styles from '../styles/style';

const navLinks = [
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

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='navbar flex w-full items-center justify-between py-6 '>
      <Link href={`#inicio`}>
        <Image
          src={logo}
          alt='yefweb logo'
          className='h-[32px] w-[full]'
          width={100}
          height={32}
        />
      </Link>

      <ul className='hidden flex-1 list-none items-center justify-end sm:flex '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.path + index}
            className={`mr-10 cursor-pointer font-poppins text-[16px] font-normal text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.path}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex flex-1 items-center justify-end  sm:hidden'>
        <Image
          src={toggle ? close : menu}
          alt='icons menu'
          className='h-[28px] w-[28px] object-contain'
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } bg-black-gradient  sidebar absolute top-20 right-0 z-40 mx-4 my-2 min-w-[140px] rounded-lg p-6`}
        >
          <ul className='flex flex-1 list-none flex-col  justify-end '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.path + index}
                className={`mr-10 cursor-pointer font-poppins text-[16px] font-normal text-white ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.path}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
