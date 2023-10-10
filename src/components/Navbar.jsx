import React from 'react'
import {logo,menu,close} from '../assets/index';
import {navLinks} from '../constants/index';
import { useState } from 'react';


const Navbar = () => {

  const [toggle,setToggle] = useState(false);


  return (
    <nav className='flex items-center justify-between py-6 relative'>
      <a href="#" className="logo w-[125px]">
        <img  src={logo} alt="logo" />
      </a>

      <ul className='hidden sm:flex text-sm gap-[60px]'>
        {
          navLinks.map(link => <li key={link.id}><a href={"#" + link.id}>{link.title}</a></li>)
        }

      </ul>

      <img className='sm:hidden cursor-pointer' src={toggle ? close : menu} alt='icon' onClick={()=> setToggle((prev)=> !prev)} />

     {toggle && <div className="list-device bg-black-gradient sidebar absolute top-[100%] right-0 rounded-xl min-w-[200px] text-center py-5">
        <ul>
          {
            navLinks.map((link,index) => <li className={index !== navLinks.length - 1 && 'mb-4'} key={link.id}><a href={"#" + link.id}>{link.title}</a></li>)
          }
        </ul>
      </div>}
    </nav>
  )
}

export default Navbar
