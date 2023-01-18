import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { logo } from '../assets';
import { navLinks } from '../constans';
import { useMenu } from '../hooks';
import { Sidebar, Menu } from './';

const Navbar = () => {
  const { active, toggleActive } = useMenu();

  return (
    <nav className='flex items-center justify-between py-6 md:py-12'>
      <Link href='#inicio'>
        <Image src={logo} alt='yefweb logo' width={120} height={120} />
      </Link>

      <Menu active={active} toggleActive={toggleActive} />

      <Sidebar linkItem={active} toggleActive={toggleActive} />
    </nav>
  );
};

export default Navbar;
