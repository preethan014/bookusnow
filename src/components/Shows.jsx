import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import SingleShow from './SingleShow';
const Shows = () => {
  return (
    <div className='shows-outer'>
        <div className='shows-inner'>
            <div className='shows-heading'>
                <text className='s-h-t-1'>Recommended Shows <FaArrowRightLong /></text>
    <text className='s-h-t-2'>see all</text>
            </div>
            <div className='individual-shows-outer'>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>
                <SingleShow/>


            </div>
        </div>
      
    </div>
  )
}

export default Shows
