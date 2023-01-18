import Link from 'next/link';
import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { navLinks } from '../constans';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=' relative flex flex-1  items-center justify-end md:hidden'>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <CgClose size='2rem' /> : <CgMenuRight size='2rem' />}
      </button>

      <nav className={`${isOpen ? 'block' : 'hidden'}  `}>
        <ul className='absolute top-12 right-0 flex animate-sidebar  flex-col gap-6 rounded-lg bg-gradient-to-r from-cyan to-primary py-6 px-8 delay-150'>
          {navLinks.map((link) => (
            <Link href={`#${link.path}`} key={link.path} className=' text-xl'>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
