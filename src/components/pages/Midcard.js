import React from 'react';
import './Midcard.css';
import Newmidcard from './Newmidcard';

function Midcard() {
  return (
    <div className='cards' class="cardBody3">
      
      <div className='cards__container' >
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
          <Newmidcard
              id='01'
              text1='Seat Distribution'
              text='What is seat distribution? Seat distribution is one of the modules under the administration framework in which one can view the display of seats amongst'
            />
            
            <Newmidcard
              id='02'
              text1='Website Designing And  Development'
              text='Website Designing And Development A Website Designing and Development is the most important part of every Business. FPII offers Customized Website Design and Development Service'
            />

            <Newmidcard
              id='03'
              text1='Institute Admission'
              text=' Institute Level Admissions: Institute Level admissions are done by the institute after the CAP rounds. Minority institutes can fill their Institute quota admissions in this'
            />
            
          </ul>

          
        </div>
      </div>

      
    </div>
    
  );
}

export default Midcard;
