import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  isRoundedFull?: boolean;
}

const Card = ({ children, className, isRoundedFull }: CardProps) => {
  const finalStyles = `w-full bg-white rounded-t-2xl px-3 py-5 ${
    isRoundedFull ? 'rounded-b-2xl' : ''
  } ${className}`;

  return <div className={`${finalStyles}`}>{children}</div>;
};

export default Card;
