import React, { memo } from 'react'
import './App.css';
import {Button} from './components/Button';
import './HeroSection.css';
const HeroSection = memo(() => {
  return (
    <div className='hero-container'>
        <video src='/videos/moonnight.mp4' autoPlay loop muted />
        <h1> Dream  </h1>
        <p > Find calm through chaos for a mind that never rests</p>
        <div className="hero-btn">
            <Button className='btns' buttonstyle='btn--outline'
            buttonsize='btn--large'> DREAMER </Button>
            <Button className='btns' buttonstyle='btn--primary'
            buttonsize='btn--large'> Get started </Button>

        </div>
        </div>
  )
})

export default HeroSection