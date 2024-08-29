import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat inventore maiores cupiditate iure, quas ipsa quod sed quisquam ducimus ipsum eaque, veritatis voluptates eveniet. Possimus incidunt in accusantium dignissimos!</p>
      </div>
    </div>
  )
}

export default About
