import Image from 'next/image'
import React from 'react'
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <>
        <main className='w-full px-8 sm:flex my-4 md:my-0 justify-between h-24 items-center absolute'>

            {/* logo  */}
            <div>
                <Image
                src={"/logo.png"}
                width={150}
                height={150}
                />
            </div>

            {/* right side mail box  */}
            <div className='bg-[#50A2D4] my-3 md:my-0 text-white hover:transition-all hover:duration-600 hover:ease-in-out hover:bg-white hover:text-[#62c9d6] flex justify-center items-center px-5 py-2 cursor-pointer rounded-3xl'>
                <IoIosMail 
                className='text-xl mr-1'
                />
                <p className='poppins-regular'>hi@pulsemarketing.io</p>
            </div>

        </main>
    </>
  )
}

export default Header