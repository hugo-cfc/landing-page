import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = ({ className, children, ...rest }: ContainerProps) => {
  const finalStyle = `w-full tablet:w-[635px] notebook:w-[712px] desktop:w-[1280px] ${className}`;

  return (
    <div className={finalStyle} {...rest}>
      {children}
    </div>
  );
};

export default Container;
