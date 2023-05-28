import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import attlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='brand section-padding'>
    
      <div><img src={google} alt="goggle" /></div>
      <div><img src={slack} alt="goggle" /></div>
      <div><img src={attlassian} alt="goggle" /></div>
      <div><img src={dropbox} alt="goggle" /></div>
      <div><img src={shopify} alt="goggle" /></div>
    

    </div>
  )
}

export default Brand