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
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link href={`#inicio`}>
        <Image
          src={logo}
          alt='yefweb logo'
          className='w-[full] h-[32px]'
          width={100}
          height={32}
        />
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.path + index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.path}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end  items-center'>
        <Image
          src={toggle ? close : menu}
          alt='icons menu'
          className='w-[28px] h-[28px] object-contain'
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar z-40`}
        >
          <ul className='list-none flex flex-col justify-end  flex-1 '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.path + index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${
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
