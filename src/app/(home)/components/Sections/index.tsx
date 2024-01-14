import { HTMLAttributes } from 'react';

import Container from '@/components/Container';

interface SectionsProps extends HTMLAttributes<HTMLDivElement> {}

const Sections = ({ children, className }: SectionsProps) => {
  const finalStyles = `flex flex-col items-center mt-3 ${className}`;

  return (
    <div className={`${finalStyles}`}>
      <Container className='relative'>{children}</Container>
    </div>
  );
};

export default Sections;
