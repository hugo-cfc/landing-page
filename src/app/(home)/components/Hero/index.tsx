import Image from 'next/image';
import CodeImg from '@/../../public/code.jpeg';

import './style.css';
import Container from '@/components/Container';

const Hero = () => {
  return (
    <div
      className='w-screen h-[137px] relative flex items-center tablet:h-[317px] desktop:h-[396px]'
      id='img'
    >
      <Container className='mx-auto'>
        <h1 className='relative z-10 text-white text-2xl w-28 font-bold tablet:text-3xl tablet:w-36'>
          Programador Front-End
        </h1>
      </Container>
    </div>
  );
};

export default Hero;
