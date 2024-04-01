import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import SingleEvent from './SingleEvent';
const Events = () => {
  return (
    <div className='shows-outer'>
        <div className='shows-inner'>
            <div className='shows-heading'>
                <text className='e-h-t-1'>Upcoming Events <FaArrowRightLong /></text>
    <text className='e-h-t-2'>see all</text>
            </div>
            <div className='individual-events-outer'>
              <div className='individual-events-inner'>
              <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
                <SingleEvent/>
              </div>
               

            </div>
        </div>
      
    </div>
  )
}

export default Events
