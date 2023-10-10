import React from 'react'
import { stats } from '../constants';


const Stats = () => {
  return (
    <div className='stats pd-top flex flex-col sm:flex-row sm:items-center justify-center flex-wrap gap-[30px] sm:gap-[60px]'>
      {
        stats.map((stat)=>(
          <div key={stat.id} className={`state
           flex items-center gap-[10px]`}>
            <span className="font-semibold text-[30px] md:text-[40px]">{stat.value}</span>
            <span className='text-gradient font-semibold text-[20px]'>{stat.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stats
