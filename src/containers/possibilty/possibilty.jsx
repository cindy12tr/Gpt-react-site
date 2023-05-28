import React from 'react'
import './possibilty.css'
import possibilty from '../../assets/possibility.png'
const Possibilty = () => {
  return (
    <div className='possibilty section-padding' id='posibility'>
    <div className='possibilty-img'>
      <img src={possibilty} alt="" />
    </div>

    <div className='possibilty-content'>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <h1 className='gradient-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quae debitis voluptate aliquam vero nihil.</p>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
    </div>

    </div>
  )
}

export default Possibilty