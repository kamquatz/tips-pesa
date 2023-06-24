import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () =>{
  return (
    <header className='w-full z-10 fixed'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-blue-500'>
            <Link href='/' className='flex justify-center items-center'>
                <Image 
                src='/tipspesa.png' 
                alt='TipsPesa Logo'
                width={32}
                height={32}
                className='object-contain'
                />
            </Link>

            <b className='flex justify-center items-center text-white'>
                TIPS PESA
            </b>
        </nav>        
    </header>
  )
}

export default Navbar