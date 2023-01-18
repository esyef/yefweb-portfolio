import Link from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

type button = 'primary' | 'secondary';
type target = HTMLAttributeAnchorTarget;

type props = {
  children: ReactNode;
  href: string;
  type: button;
  target?: target;
};

const Button = ({ children, type, href, target }: props) => {
  return (
    <Link
      href={href}
      className={`${
        type === 'primary' ? 'btn-boder' : ''
      } inline-block rounded-lg py-3 px-4 hover:font-semibold hover:shadow-md hover:shadow-accentText hover:transition-all md:hover:scale-105`}
      target={target}
    >
      {children}
    </Link>
  );
};

export default Button;
