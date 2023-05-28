import React from 'react'
import Blog from './containers/blog/blog'
import Features from './containers/features/features'
import Footer from './containers/footer/footer'
import Header from './containers/header/header'
import Possibilty from './containers/possibilty/possibilty'
import What from './containers/what/what'

import CTA from './components/cta/CTA'
import Brand from './components/brand/Brand'
import Navbar from './components/navbar/Navbar'

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar />
        <Header />
        </div>
        <Brand />
        <What />
        <Features />
        <Possibilty />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App