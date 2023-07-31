'use client'

import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'
import { useState } from 'react';
import { Subscription } from '.';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='w-full z-10 fixed'>
      <nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-blue-500'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/tipspesa.png'
            alt='TipsPesa Logo'
            width={32}
            height={32}
            className='object-contain'
          />
        </Link>

        {/* <CustomButton
          title="Subscribe to Premium"
          containerStyles="bg-yellow-500 text-white rounded-full flex justify-center items-center"
          handleClick={() => setIsOpen(true)}
          rightIcon='/premium-membership.png'
        /> */}

        <Subscription isOpen={isOpen} closeModal={() => setIsOpen(false)} />

      </nav>
    </header>
  )
}

export default Navbar