import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' >
      <video src='/videos/eduvid.mp4' autoPlay loop muted style={{width:'100%',height:'auto'}}/>
      <h1 >ADMISSION ERP </h1>
      <p  style={{width:'70%'}}><i>
      This innovative Integrated E-admission ERP Solution for Universities, Institues and Students is best and unique online knowledge management of students and institues for UG and PG courses.  
      </i>
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          READ MORE
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          VIEW OUR SERVICES 
          
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
