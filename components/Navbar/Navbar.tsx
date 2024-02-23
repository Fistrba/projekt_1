import React from 'react'
import "./Navbar.css"
import Link from 'next/link'
import { UserButton, auth  } from '@clerk/nextjs'

const Navbar = () => {

    
 const { userId } : { userId: string | null } = auth();

 

  return (
    <div id="navbar" className='w-full py-7 bg-[#ffffffc1] flex justify-center items-center'  >
        <div className='w-[95%] h-full flex justify-between'>
            <div id='logo' >
                <h3 className=' anta-regular text-2xl uppercase font-600 text-[#222222d4]' >Projek 1</h3>
            </div>


            {!userId ? (
                <div id='auth' >
                    <Link href="/sign-in" className='font-300 text-[#222222d4]' >Sign In</Link>
                    <Link href="/sign-up" className='ml-10 font-300 text-[#222222d4]'>Sign Up</Link>
                </div>
            ): (
                <div id='me' >
                    <UserButton afterSignOutUrl='/' />
                </div>
            )}


        </div>
    </div>
  )
}

export default Navbar