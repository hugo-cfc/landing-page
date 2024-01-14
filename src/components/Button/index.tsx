import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';
import { allVariants } from './style';

type variants = 'filled';
type spacings = 'sm' | 'base' | 'lg';
type colors = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: variants | undefined;
  color?: colors | undefined;
  spacing?: spacings | undefined;
}

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = 'filled',
      color = 'primary',
      spacing = 'base',
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const finalStyle = `${allVariants['filled']({
      color: color,
      spacing: spacing,
    })} ${className}`;

    return (
      <button className={finalStyle} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
