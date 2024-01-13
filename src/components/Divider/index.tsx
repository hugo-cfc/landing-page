import { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

const Divider = ({ children, className }: DividerProps) => {
  const finalStyles = `w-full border border-primary ${className}`;

  return <hr className={`${finalStyles}`}>{children}</hr>;
};

export default Divider;
