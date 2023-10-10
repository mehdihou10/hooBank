import React from 'react'
import Button from './Button';
import {card} from '../assets/index';


const CardDeal = () => {
  return (
    <div className='card-deal pd-top-xxl flex flex-col md:flex-row items-center gap-[50px]'>
      <div className="text">
        <h1 className="text-[48px] font-semibold">
        Find a better card deal in few easy steps.
        </h1>

        <p className='text-grey text-sm max-w-[470px] leading-[24px] my-[30px]'>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button />
      </div>

      <div className="image">
        <img className='max-w-full' src={card} alt="image" />
      </div>
    </div>
  )
}

export default CardDeal
