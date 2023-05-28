import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    
      <div className='header section-padding' id='home'>
        <div className='header-content'>
          <h1 className='gradient-text'>GPT-3 Nedir?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur beatae explicabo tempore ipsam fuga libero magni illo minima, repellendus non!</p>

          <div className='header-content-input'>
            <input type="email" placeholder='E-mail' />
            <button type='button'>Hemen Başla</button>
          </div>

          <div className='header-content-people'>
            <img src={people} alt="people" />
            <p>+1000 people ipsum dolor sit amet.</p>
          </div>

          
        </div>
        <div className='header-img'>
            <img src={ai} alt="ai" />
        </div>
      </div>
    
  )
}

export default Header