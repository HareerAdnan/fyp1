import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid6.mp4' autoPlay loop muted />
      <h1>WE POWER YOU TO SUCCEED!</h1>
      <p>Start your preparation with Pakistan's most innovative learning platfrom!
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Get yourself Register 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection