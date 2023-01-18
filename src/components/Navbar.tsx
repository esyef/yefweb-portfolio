import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constans';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 '>
      <Link href='#inicio'>
        <Image src={logo} alt='yefweb logo' width={120} height={120} />
      </Link>

      <ul className='hidden flex-1 list-none items-center justify-end sm:flex '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.path + index}
            className={`font-poppins mr-10 cursor-pointer text-[1rem] font-normal text-white md:text-[1.125rem] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <Link href={`#${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <Sidebar />
    </nav>
  );
};

export default Navbar;
