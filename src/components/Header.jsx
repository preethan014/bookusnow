import React from 'react'
import { FiMenu } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "../styles/header.css"
import SimpleButton from './SimpleButton';
const Header = () => {
  return (
    <div className='outer-header'>
        <div className='inner-header'>
          <div className='header-logo-outer'>
            <h3>BookUsNow</h3>
          

          </div>
          <div className='header-category-outer'>
          <FiMenu size={17} />
          <span>
            Categories
          </span>

          </div>
          <div className='header-search-outer'>
            <form className='header-form-main'>
              <input type="text" placeholder='Dji Phantom'/>
              <CiSearch size={20} cursor={"pointer"}/>
            </form>
          </div> 
          <div className='header-favorites-outer'>
          <FaHeart color='#B0BABF' size={15} cursor={"pointer"}/>
          <SimpleButton text={"Favorites"} />
          </div>
          <SimpleButton text={"Sign In"}/>
        </div>
      
    </div>
  )
}

export default Header
