import React from 'react'
import {features} from '../constants/index';
import Button from './Button';

const Business = () => {
  return (
    <div className='Business pd-top-xxl flex flex-col md:flex-row items-start gap-[50px]'>

      <div className="text basis-[50%]">
        <h1 className='text-[48px] font-semibold'>
        You do the business, we’ll handle the money.
        </h1>

        <p className='text-grey text-sm leading-[24px] my-[30px] max-w-[470px]'>
        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button />
      </div>

      <div className="features basis-[50%]">
        {
          features.map(feature =>(
            <div key={feature.id} className={`feature feature-card px-3 py-2 rounded-[10px] flex items-center gap-[15px] ${feature.id !== 'feature-3' ? 'mb-6' : ''}`}>
              <div>
              <div className="icon bg-dimBlue w-[40px] h-[40px] rounded-full flex justify-center items-center">
              <img className='w-[20px]' src={feature.icon} alt="icon" />

              </div>
              </div>
              

              <div className="info">
                <h4 className='mb-1'>{feature.title}</h4>
                <p className='text-grey text-sm'>{feature.content}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Business
