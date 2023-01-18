import { useState } from 'react';

const useMenu = () => {
  const [active, setActive] = useState('inicio');

  const toggleActive = (item: string) => {
    setActive(item);
  };

  return {
    active,
    toggleActive,
  };
};

export default useMenu;
