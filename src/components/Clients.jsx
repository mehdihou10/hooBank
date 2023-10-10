import React from 'react'
import { clients } from '../constants'


const Clients = () => {
  return (
    <div className='clients pd-top-xl flex items-center justify-between gap-[30px] flex-wrap'>
      {
        clients.map(client => <img key={client.id} className='w-[120px] h-[40px]
         sm:w-[150px] sm:h-[50px]
         md:w-[160px] md:h-[55px]
          lg:w-[192px] lg:h-[60px]
          object-contain' id={client.id} src={client.logo} alt='client' />)
      }
    </div>
  )
}

export default Clients
