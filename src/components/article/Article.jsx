import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title, content}) => {
  return (
    <div className='article'>
      <div className='article-img'>
        <img src={imgUrl} alt="blog" />
      </div>

      <div className='article-content'>
        <div className='article-text'>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <p className='article-read'>Daha Fazla</p>
      </div>
    </div>
  )
}

export default Article