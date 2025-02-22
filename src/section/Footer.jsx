import React from 'react'
import { FaArrowUp, FaCopyright } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Footer = () => {
  return (

    <div>
    <div className='bg-black text-white flex justify-center items-center gap-2 p-5'>
      <FaCopyright className='fill-amber-500 lg:size-5 size-8'/>
      <p className='text-lg text-center'>
        Copyright 2025, PRIME CONSTRUCTION, ALL RIGHTS RESERVED.
      </p>
    </div>

    {/* scroll to the button */}

    <div id='icon-box' className='bg-amber-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}> <FaArrowUp className='size-6'/></Link>
    </div>

    </div>
  )
}

export default Footer
