import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='feature'>
    
    <div className='feature-title'>
      <h1>{title}</h1>
      <div className='feature-text'>{text}</div>
    </div>

    

    </div>
  )
}

export default Feature