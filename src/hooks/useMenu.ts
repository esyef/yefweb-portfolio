import { useEffect, useState } from 'react';
import { navLinks } from '../constans';

const useMenu = () => {
  const [active, setActive] = useState('inicio');

  const toggleActive = (item: string) => {
    setActive(item);
  };

  // change link active when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.reduce((obj, link) => {
        const offset = document.getElementById(link.path)?.offsetTop;
        if (offset !== undefined) {
          obj[link.path] = offset;
        }
        return obj;
      }, {} as { [key: string]: number });

      for (const link of navLinks) {
        if (window.scrollY >= sections[link.path] - 50) {
          setActive(link.path);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    active,
    toggleActive,
  };
};

export default useMenu;
