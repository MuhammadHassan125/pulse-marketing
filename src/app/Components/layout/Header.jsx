import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosMail } from "react-icons/io";
import Logo from '../../../../public/pulse logo..svg'

const Header = () => {
  return (
    <>
        <main className='w-full z-20 lg:w-[100%] lg:mx-auto md:px-8 lg:px-4 flex my-4 md:my-0 justify-between h-24 items-center absolute header'>

            {/* logo  */}
            <div className='w-100'>
              <Link href={'/'}>
                <Image
                alt="logo"
                src={Logo} 
                width={150}
                height={150}
                />
              </Link>  
            </div>

            {/* right side mail box  */}
            <div className='bg-[#50A2D4] my-3 md:my-0 text-white hover:transition-all hover:duration-600 hover:ease-in-out hover:bg-white hover:text-[#62c9d6] flex justify-center items-center py-1 px-3 md:px-5 md:py-2 cursor-pointer rounded-3xl'>
                <IoIosMail 
                className='text-xl mr-1'
                />
                <p className='poppins-regular text-[11px] md:text-[15px]'><Link href="mailto:hi@pulsemarketing.io">hi@pulsemarketing.io</Link></p>
            </div>

        </main>
    </>
  )
}

export default Header