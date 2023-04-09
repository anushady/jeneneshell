import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='logo'>
        <h1>Jen<span>.</span></h1>
      </div>
      <div className='HeroContainer'>
          <div className='herotext'>
            <h1>Explore Our Projects</h1>
            <button className='explore'>EXPLORE</button>
          </div>
      </div>
    </>
  )
}

export default Hero