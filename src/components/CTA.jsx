import React from 'react'
import Button from './Button'

const CTA = () => {
  return (

    <div className="py-[80px]">
        <div className='cta flex flex-col md:flex-row items-center justify-between gap-[30px]
        feature-card-show px-[60px] py-[50px] rounded-[10px]'>
      <div className="text">
        <h1 className='font-semibold mb-[20px] text-[48px]'>Let’s try our service now!</h1>
        <p className='text-[#c1c1c1] max-w-[470px] leading-[34px] ss:text-center ss:mx-auto md:text-left md:mx-0'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <Button />
    </div>
    </div>
  )
}

export default CTA
