import React from 'react'
import "./Navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div id="navbar" className='w-full py-7 bg-[#ffffffcb] flex justify-center items-center'  >
        <div className='w-[95%] h-full flex justify-between'>
            <div id='logo' >
                <h3 className='text-xl uppercase font-600 text-[#222222d4]' >Projek 1</h3>
            </div>
            <div id='logo' >
                    <Link href="/" className='font-300 text-[#222222d4]' >Sign In</Link>
                    <Link href="/" className='ml-10 font-300 text-[#222222d4]'>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar