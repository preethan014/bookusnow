import React from 'react'
import { MdLocationPin } from "react-icons/md";
const SingleShow = () => {
  return (
    <div className='singleshow-outer' style={{  
        backgroundImage: "url(" + "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoBfyM2ZX0gjV3-6AmeHuQv1fgmNkf3XhjFEvBCdIWBoUoXjim" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='singleshow-left'>
        <text className='single-show-name'>Make Agree</text>
        <span className='single-show-location'><MdLocationPin/> West Douglas</span>
        </div>
        <div className='singleshow-right'>
        <text className='single-show-date'>March 23, 2024</text>
        <text className='single-show-weather'>Snowy,26 C | 42 km</text>
        </div>
        

      
    </div>
  )
}

export default SingleShow
