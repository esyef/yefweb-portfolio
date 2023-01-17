import { ReactNode } from 'react';

type button = 'primary' | 'secondary';

type props = {
  children: ReactNode;
  href: string;
  type: button;
};

const Button = ({ children, href, type }: props) => {
  return (
    <a
      href={href}
      className={` button hover:shadow-xl hover:shadow-dimBlue
       ${
         type === 'primary'
           ? 'button-primary bg-blue-gradient text-primary '
           : 'button-secondary text-gradient'
       }
      `}
    >
      {children}
    </a>
  );
};

export default Button;
