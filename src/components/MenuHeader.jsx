import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";
import "../styles/menuheader.css"
const MenuHeader = () => {
  return (
    <div className='menuheader-outer'>
      <div className='menuheader-inner'>
        <div className='menuheader-left'>
        <MdLocationPin />
        <span>Mumbai, India</span>
        <LiaGreaterThanSolid size={10}/>
        </div>
        <div className='menuheader-right'>
            <a>Live shows</a>
            <a>Streams</a>
            <a>Movies</a>
            <a>Plays</a>
            <a>Events</a>
            <a>Sports</a>
            <a>Activites</a>
        </div>
      </div>
    </div>
  )
}

export default MenuHeader
