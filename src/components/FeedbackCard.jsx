import React from 'react'
import {quotes} from '../assets/index';


const FeedbackCard = ({obj}) => {
  return (
    <div className='card relative flex flex-col justify-between feature-card-show px-[30px] py-[40px] rounded-[10px]'>
      <img className='w-[40px]' src={quotes} alt="quotes" />

      <p className='font-normal leading-[25px] my-[30px]'>{obj.content}</p>

      <div className="client flex items-center gap-[15px]">
        <img className='w-[48px] h-[48px]' src={obj.img} alt="profile" />

        <div className="profile-info">
          <h3 className='text-[20px]'>{obj.name}</h3>
          <h4 className='text-grey text-sm'>{obj.title}</h4>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
