import React from 'react';
import './career.css';
import Careeritem from './Careeritem';

function Career() {
  return (
    <div className='cards' class="careerBody" >
      <h1 style={{color:'white',fontSize:'60px'}}>Career</h1>
      <p style={{fontSize:'20px',color:'white'}}>Current Opening</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <Careeritem
              text='Qualification: BE/MCA'
              text2='Experience 1 to 5 Years'
              Location= 'Mumbai'
              vacancy='Vacancy: 4'   
              label='PHP Developer'
            />
            
            <Careeritem
              text='Qualification: BE/MCA'
              text2='Experience 1 to 3 Years'
              Location= 'Mumbai'
              vacancy='Vacancy: 4'      
              label='Node JS Developer'
            />
           
            
          </ul>

          
        </div>
      </div>

      <h1>Address & Contact No.</h1><br/>
      <p ><h2 style={{color:'white'}}>Four Pillars InfoTech India Pvt. Ltd.</h2></p>
      <p style={{fontSize:'20px'}}>Head Office:</p> <p>Office No. 101, Kumar</p><p> Sahwas, Baner – Pashan Link Road,</p><p> Behind Ojas Society, Pune, Maharashtra –</p><p> 411021, India.</p>
      <br/><p style={{fontSize:'20px'}}>Mumbai Office:</p><p> L&T Seawoods Mall</p><p> ,Tower No.2 E-302, Seawood Railway</p><p> Station , Navi Mmumbai, Maharashtra -</p><p> 400706, India.</p>

    </div>
    
  );
}

export default Career;
