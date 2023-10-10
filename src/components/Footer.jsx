import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks } from '../constants';


const Footer = () => {
  return (
    <footer className={`bg-black pt-[80px] pb-[40px] ${styles.paddingX}`}>
   <div className="grid gap-[50px] sm:grid-cols-3 md:grid-cols-4
   border-b border-[#3F3E45] pb-10">
   <div className="info">
      <img className='w-[180px]' src={logo} alt="logo" />

      <p className='text-grey text-sm mt-[15px] leading-[24px]'>A new way to make the payments easy, reliable and secure.</p>

    </div>

    {
      footerLinks.map((section,index) => (
       <div key={index + 1} className="info">
        <h3 className='mb-[20px]'>{section.title} :</h3>
        <ul>
          {
            section.links.map((linkEl,index) =>(
              <li className={`${index !== section.links.length - 1 ? 'pb-[10px]' : ''}`} key={linkEl.name}><a className='text-sm text-grey' href={linkEl.link} target='__blank'>{linkEl.name}</a></li>
            ))
          }
        </ul>
       </div>
      ))
    }
   </div>

   <p className="text-sm text-center text-grey pt-6">Copyright &copy;  {new Date().getFullYear()} HooBank. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
