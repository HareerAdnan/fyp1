import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid6.mp4' autoPlay loop muted />
      <h1>WE POWER YOU TO SUCCEED!</h1>
      <p>
     <div className="App">
      <Typewriter 

      options={{ autoStart: true,
      loop: true,
    }}
  
    onInit={(Typewriter)=> {
  
      Typewriter
       
       .typeString("Start your preparation with Pakistan's most innovative learning platfrom")
       .pauseFor(2000)
       .deleteAll()
       .typeString("Gallery of National and International tests")
       .pauseFor(3000)
       .deleteAll()
       .typeString("ETEA, MDCAT, IELETS, SAT, TOFEL")
       .start();
       }}
       />
    </div>
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