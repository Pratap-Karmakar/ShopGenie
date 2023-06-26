import React from 'react'
import phone from '../public/assets/images/phone.png'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'
import {GoHome, GoLocation} from 'react-icons/go'

const NavbarBottom = () => {
  return (
    <div className='max-w-container mx-auto py-2 px-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
                <Image src={phone} alt='phone' className='w-6 h-6 bg-white rounded-full'/>
                <p className='text-sm font-semibold'>How do you want your itmes?</p>
                <BsChevronDown className='cursor-pointer'/>
                <span className='w-[1px] h-4 bg-white inline-flex ml-2'></span>
            </div>
            <div className='flex items-center gap-2'>
              <GoLocation/>
              <p className='text-sm text-zinc-100'>Master Colony, Cinema Road</p>
              <GoHome/>
              <p className='text-sm text-zinc-100'>Bankura, 722101</p>
            </div>
        </div>
        <ul className='flex gap-6 text-sm font-semibold'>
          <li className='bottomNavLi'>Grocery & Essentials</li>
          <li className='bottomNavLi'>Home</li>
          <li className='bottomNavLi'>Tech</li>
          <li className='bottomNavLi'>Fashion</li>
          <li className='bottomNavLi'>ShopGenie+</li>          
        </ul>
    </div>
  )
}

export default NavbarBottom