import React from 'react'
import "../styles/simplebtn.css"
const SimpleButton = (props) => {
    const {text}=props || "SignIn";
  return (
    <button className='btn-outer'>
        <span>{text}</span>
      
    </button>
  )
}

export default SimpleButton
