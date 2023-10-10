import React from 'react'
import {bill,apple,google} from '../assets/index';


const Billing = () => {
  return (
    <div className='billing pd-top-xxl flex items-center flex-col-reverse md:flex-row gap-[50px]'>
    <div className="image basis-[50%] relative z-[5]">
      <img className='max-w-[100%]' src={bill} alt="image" />

      <div className="absolute z-[3] w-[50%] h-[50%] top-0 rounded-full white__gradient -left-1/2" />
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 rounded-full pink__gradient -left-1/2" />

    </div>

    <div className="text basis-[50%]">
      <h1 className='text-[48px] font-semibold'>Easily control your billing & invoicing.</h1>
      <p className='text-sm text-grey my-[30px] max-w-[470px] leading-[24px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className="download-images flex gap-[30px]">
        <a href="#"><img src={apple} alt="image" /></a>
        <a href="#"><img src={google} alt="image" /></a>

      </div>
    </div>
    </div>
  )
}

export default Billing
