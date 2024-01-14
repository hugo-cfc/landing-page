'use client';

import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu, X } from 'lucide-react';

import Item from './Components/Item';

import SenaiLogo from '@/../../public/senaiLogo.svg';

import links from '../../links';

import useMenuDropdown from './useMenuDropdown';

const MenuDropdown = () => {
  const { isOpen, onOpenChange } = useMenuDropdown();

  return (
    <DropdownMenu.Root onOpenChange={(e) => onOpenChange(e)}>
      <DropdownMenu.DropdownMenuTrigger asChild className='z-50'>
        <button className='z-20 w-5 tablet:hidden'>
          {isOpen ? (
            <X className='text-white animate-leftToRight' />
          ) : (
            <Menu className='text-white animate-rightToLeft' />
          )}
        </button>
      </DropdownMenu.DropdownMenuTrigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='bg-white z-50 absolute top-[16px] right-[-22px] w-screen h-[calc(100vh-56px)] px-8 flex flex-col justify-evenly items-center animate-topToBottom'>
          <div className='w-full h-full flex flex-col justify-evenly items-center'>
            <Image
              className='w-24'
              src={SenaiLogo}
              alt='Senai Logo'
              quality={100}
              priority
            />

            <div className='flex flex-col w-full'>
              {links.map((link) => (
                <Item key={link.route} route={link.route}>
                  {link.name}
                </Item>
              ))}
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MenuDropdown;
