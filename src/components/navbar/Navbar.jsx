import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <div className='navbar'>
    <div className='navbar-menu'>

      <div className='navbar-logo'>
        GPT-3
      </div>

      <div className='navbar-links'>
        <a href="#home">Ana Sayfa</a>
        <a href="#what">Hakkımızda</a>
        <a href="#posibility">Servislerimiz</a>
        <a href="#blog">Blog</a>
        
      </div>

      <div className='navbar-sign'>
        <p>Giriş yap</p>
        <button type='button' className='btn'>Üye Ol</button>
      </div>

      <div className='navbar-toggle'>
    {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
    }
    {toggleMenu && (
      <div className='navbar-toggle-con scale-up-center'>
        <div className='navbar-toggle-links'>
        <a href="#home">Ana Sayfa</a>
        <a href="#what">Hakkımızda</a>
        <a href="#posibility">Servislerimiz</a>
        <a href="#blog">Blog</a>
        <div className='toggle-sign'>
          <p>Üye Ol</p>
          <button type='button' className='btn'>Giriş Yap</button>
        </div>
        </div>
      </div>
    ) }
    </div>

    </div>
    

    </div>
  )
}

export default Navbar