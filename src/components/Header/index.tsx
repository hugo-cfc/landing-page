import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
// import Actions from './components/Actions';
import MenuDropdown from './Components/MenuDropdown';

import links from './links';

import SenaiLogo from '@/../../public/senaiLogo.svg';

const Header = () => {
  return (
    <header className='py-4 px-3 flex items-center justify-center bg-primary'>
      <Container className='flex items-center justify-between'>
        <Link className='z-10 cursor-pointer' href='/'>
          <Image
            className='w-16'
            src={SenaiLogo}
            alt='Senai Logo'
            quality={100}
            priority
          />
        </Link>

        <div className='hidden tablet:flex justify-between gap-x-12'>
          {links.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className='text-white transition-all hover:brightness-75 active:brightness-50 text-sm notebook:text-base'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* <Actions /> */}

        <MenuDropdown />
      </Container>
    </header>
  );
};

export default Header;
