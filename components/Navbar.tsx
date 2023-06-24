import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () =>{
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 fixed'>
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
            title='TIPS PESA'
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
             /> */}

        </nav>        
    </header>
  )
}

export default Navbar