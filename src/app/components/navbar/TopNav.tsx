import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-gradient-to-r from-blue-200 to-blue-700 h-20'
      classNames={{
        item: ['text-xl', 'text-white', 'uppercase', 'data-[active=true]:text-blue-700']
      }}>
      <NavbarBrand
        as={Link}
        href='/'
        className='flex items-center'>
        <div className='relative w-[320px] h-[360px]'>
          {' '}
          {/* Adjust the width and height as needed */}
          <Image
            src='/logo-no-background.svg'
            alt='DatePulse Logo'
            layout='fill'
            objectFit='contain'
            className='object-contain'
          />
        </div>
      </NavbarBrand>

      <NavbarContent justify='center'>
        <NavLink
          href='/members'
          label='Matches'
        />
        <NavLink
          href='/lists'
          label='Lists'
        />
        <NavLink
          href='/messages'
          label='Messages'
        />
      </NavbarContent>

      <NavbarContent justify='end'>
        <Button
          as={Link}
          href='/login'
          variant='bordered'
          className='text-white'>
          Login
        </Button>
        <Button
          as={Link}
          href='/register'
          variant='bordered'
          className='text-white'>
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
