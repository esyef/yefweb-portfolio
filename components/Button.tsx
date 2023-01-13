import { ReactNode } from 'react';

type props = {
  styles: string;
  children: ReactNode;
  href?: string;
};

const Button = ({ styles, children, href }: props) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-slate-900 outline-none ${styles}  rounded-[10px]`}
    >
      <a href={href}>{children}</a>
    </button>
  );
};

export default Button;
