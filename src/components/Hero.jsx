import React from 'react'
import {robot,discount,arrowUp} from '../assets/index';


const GetStarted = ({isHidden})=>(
  <button className={`p-[2px] font-semibold ${isHidden ? 'hidden sm:flex' : 'flex sm:hidden'} items-center justify-center
     rounded-full bg-blue-gradient`}>
    <div className='bg-primary w-[120px] h-[120px]
     rounded-full flex justify-center items-center flex-col'>
      <div className="flex">
      <span className='text-gradient'>Get</span>
      <img src={arrowUp} alt="arrow" />
      </div>

      <span className="block text-gradient">Started</span>
    </div>
  </button>
)

const Hero = () => {
  return (
    <div className='hero pd-top flex flex-col md:flex-row items-center gap-[40px]' id='home'>
    <div className="text basis-[55%]">

      <div className="discount mb-3 bg-discount-gradient
       w-fit px-2 py-1 rounded-[10px] flex items-center gap-[10px]">
        <img src={discount} alt="discount" />

        <p className='uppercase text-sm text-grey'><span className='text-white'>20% </span>
         discount for
        <span className='text-white'> 1 month</span> acount
        </p>

      </div>


    <div className="flex items-center">
    <h1 className='font-semibold text-[50px] ss:text-[70px]'>
      The Next 
      <span className='text-gradient'> Generation </span>
      
    </h1>

    <GetStarted isHidden={true} />

    </div>

    <h1 className='font-semibold mb-3 text-[50px] ss:text-[70px]'>Payment Method.</h1>


      

      <p className='text-grey max-w-[480px] text-[15px] leading-[1.6]'>
      Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
      </p>

    </div>

    <div className="image basis-[45%] relative z-[5]">
      <img className='max-w-full' src={robot} alt="image" />

      <div className="absolute w-[100%] h-[40%] pink__gradient top-0 z-[0]" />
      <div className="absolute w-[80%] h-[80%] rounded-full white__gradient bottom-40 z-[0]" />
      <div className="absolute w-[50%] h-[50%] blue__gradient right-20 bottom-20 z-[0]" />


    </div>

    <GetStarted isHidden={false} />

    </div>
  )
}

export default Hero
