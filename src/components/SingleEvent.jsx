import React from 'react'
import { MdLocationPin } from "react-icons/md";
const SingleEvent = () => {
  return (
    <div className='single-event-outer'>
        <div className='single-event-upper'>
            <img className="single-event-img" src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=pexels-guillaume-meurice-1591447.jpg&fm=jpg" alt='image tag'/>
        <text className='single-event-date'>March 23, 2024</text>
        </div>
        <h3 className='single-event-name'>After note nearly</h3>
        <text className='single-event-location'><MdLocationPin/> West Douglas</text>
        <text className='single-event-weather'>Snowy,26 C | 42 km</text>
    </div>
  )
}

export default SingleEvent
