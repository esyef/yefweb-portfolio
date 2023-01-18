import Link from 'next/link';
import { ReactNode } from 'react';

type button = 'primary' | 'secondary';

type props = {
  children: ReactNode;
  href: string;
  type: button;
};

const Button = ({ children, href, type }: props, { ...otherProps }) => {
  return (
    <Link {...otherProps} href={href}>
      {children}
    </Link>
  );
};

export default Button;
