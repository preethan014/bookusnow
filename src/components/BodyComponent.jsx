import React from 'react'
import Introduction from './Introduction'
import "../styles/bodycomponent.css"
import Shows from './Shows'
import Events from './Events'
const BodyComponent = () => {
  return (
    <div className='bodycomponent-outer'>
      <Introduction/>
      <Shows/>
      <Events/>
    </div>
  )
}

export default BodyComponent
