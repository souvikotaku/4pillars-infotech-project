import React from 'react';
import './Newcards.css';
import Homecard from './Homecard';

function Newcards() {
  return (
    <div className='cards' class="cardBody2">
      <h1 style={{color:'#c31432'}}>Contact Us</h1>
      <p>For Jobs Related Inquiry , Please visit @ CAREER Page.</p>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
          <Homecard
              icon='fa fa-phone'
              text1='Phone'
              text='+91 7391044497'
            />
            
            <Homecard
              icon='fa fa-map-marker'
              text1='Address'
              text='Four Pillars InfoTech India Pvt. Ltd., Office No. 101, Kumar Sahwas, Baner – Pashan Link Road, Behind Ojas Society, Pune, Maharashtra – 411021, India.'
              text2='Mumbai Office: L and T Seawoods Mall ,Tower No.2 E-302, Seawood Railway Station , Navi Mumbai, Maharashtra - 400706, India.'
            />

            <Homecard
              icon='fa fa-envelope'
              text1='Email'
              text='info@4pillarsinfotechindia.com'
            />
            
          </ul>

          
        </div>
      </div>

      
    </div>
    
  );
}

export default Newcards;
