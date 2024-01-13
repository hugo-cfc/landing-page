import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import MenuDropdown from './Components/MenuDropdown';

import links from './links';

import SenaiLogo from '@/../../public/senaiLogo.svg';

const Header = () => {
  return (
    <header className='py-4 flex items-center justify-center bg-primary'>
      <Container className='flex items-center justify-between notebook:justify-start notebook:gap-x-4 desktop:gap-x-6'>
        <Link className='z-10 cursor-pointer' href='/'>
          <Image
            className='w-16 notebook:w-20 desktop:w-24'
            src={SenaiLogo}
            alt='Senai Logo'
            quality={100}
            priority
          />
        </Link>

        <div className='hidden tablet:flex justify-between gap-x-12 notebook:gap-x-4 desktop:gap-x-6'>
          {links.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className='text-white transition-all hover:brightness-75 active:brightness-50 text-sm notebook:text-xs'
            >
              {link.name}
            </Link>
          ))}
        </div>

        <MenuDropdown />
      </Container>
    </header>
  );
};

export default Header;
