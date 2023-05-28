import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
const blog = () => {
  return (
    <div className='blog section-padding' id='blog'>
      <div className='blog-heading'>
        <h1 className='gradient-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime?
        </h1>
      </div>

      <div className='blog-con'>
        <div className='blog-left'>
        <Article imgUrl={blog01} date="Sep 26, 2023" title="lorem" content="Some text more an dmore for youd,dedkl"/>
        </div>
        <div className='blog-right'>
          <Article imgUrl={blog02} date="Sep 26, 2023" title="lorem" content="Some text more an dmore for youd,dedkl"/>
          <Article imgUrl={blog03} date="Sep 26, 2023" title="lorem" content="Some text more an dmore for youd,dedkl"/>
          <Article imgUrl={blog04} date="Sep 26, 2023" title="lorem" content="Some text more an dmore for youd,dedkl"/>
          <Article imgUrl={blog05} date="Sep 26, 2023" title="lorem" content="Some text more an dmore for youd,dedkl"/>
        </div>
      </div>
    </div>
  )
}

export default blog