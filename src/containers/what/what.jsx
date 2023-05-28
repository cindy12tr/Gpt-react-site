import React from 'react'
import Feature from '../../components/feature/Feature'
import './what.css'

const what = () => {
  return (
    <div className='what section-padding' id='what'>
    <div className='what-feature'>
      <Feature title="GpT nedir?" />
    </div>

    <div className='what-heading'>
      <h1 className='gradient-text'>Lorem ipsum, dolor sit amet consectetur adipisicing</h1>
      
    </div>

    <div className='what-container'>
      <Feature title="Dijital Altyapı" text=" Dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdü" />
      <Feature title="Güvenli Dolaşım" text=" Dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdü" />
      <Feature title="Uygun Fiyatlandırma" text=" Dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdü" />
      <Feature title="Size Özel Koşullar" text=" Dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdü" />
    </div>



    </div>
  )
}

export default what