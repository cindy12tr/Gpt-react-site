import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer section-padding'>
    <div className='footer-heading'>
    <h1 className='gradient-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
    </div>
    
    <div className='footer-btn btn'>
      <p>İletişime Geç</p>
    </div>

    <div className='footer-content'>
      <div className='footer-logo'>
        Logo
        <p>Lorem ipsum dolor sit,a sequi porro asperiores.</p>
      </div>

      <div className='footer-links'>
        <h4>Linkler</h4>
        <p>Hakkımızda</p>
        <p>Servisler</p>
        <p>İletişim</p>
      </div>

      <div className='footer-links'>
        <h4>Şirket</h4>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        
      </div>

      <div className='footer-links'>
        <h4>İletişim</h4>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        
      </div>


    </div>

    <div className='footer-copyright'>
      <p>&copy; handecedim </p>
    </div>
    </div>

  )
}

export default footer