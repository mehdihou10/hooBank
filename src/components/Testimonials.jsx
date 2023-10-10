import React from 'react';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <div className='testimonials pd-top-xxl relative'>

      <div className='absolute w-[40%] h-[60%] right-0 z-[0] rounded-full blue__gradient' />


      <div className="heading flex flex-col sm:flex-row justify-between items-center gap-[30px]">
        <h1 className='text-[48px] font-semibold max-w-[500px]'>What people are saying about us</h1>
        <p className='text-grey leading-[34px] max-w-[470px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="clients-feedback pt-[60px]
       grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">

        {
          feedback.map(card => <FeedbackCard key={card.id} obj={card} />)
        }
      </div>

    </div>
  )
}

export default Testimonials
