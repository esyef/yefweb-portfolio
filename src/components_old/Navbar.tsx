import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { logo } from '../assets';
import { useMenu } from '../hooks';
import { Sidebar, Menu } from './';

const Navbar = () => {
  const { active, toggleActive } = useMenu();

  return (
    <section className='h-86px] flex items-center justify-between border-b-[1px] border-t-white py-6 backdrop-blur-xl md:py-6'>
      <Link href='#inicio'>
        <Image src={logo} alt='yefweb logo' width={120} height={120} />
      </Link>

      <Menu active={active} toggleActive={toggleActive} />

      <Sidebar linkItem={active} toggleActive={toggleActive} />
    </section>
  );
};

export default Navbar;
