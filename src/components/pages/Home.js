import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Newcards from './Newcards';
import Midcard from './Midcard';
import { Button3 } from './Button3';

// import Reviews from '../Reviews';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <div style={{height:'20px',width:'100%',background: '#334d50',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #cbcaa5, #334d50)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #cbcaa5, #334d50)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}></div>

      
      <div class="back1">
      <div class="typewriter" style={{border:'white',background: '#334d50',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #cbcaa5, #334d50)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #cbcaa5, #334d50)'}}>
      <p style={{fontSize:'25px',color:'white'}}>Welcome To Four Pillars InfoTech India Pvt. Ltd.</p>
      </div>
      <div class="about-section">
        <div class="about-content-wrapper container cool1 clearfix">
          {/* <div class="about-features-image pic1"> */}
            
              
              {/* <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.4pillarsinfotechindia.com/wp-content/uploads/2018/06/Aboutus.jpg" alt="About FPII"/> */}
             
              {/* </div> */}
              <div class="about-content" style={{textAlign:'center'}}>
                <div>
                <img class="pic1"src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.4pillarsinfotechindia.com/wp-content/uploads/2018/06/Aboutus.jpg" alt="About FPII"/>
                </div>

                <br/>
                <h2 style={{color:'#c31432'}}>About FPII</h2><br/>
                <p>Four Pillars Infotech India Pvt. Ltd., an IT Software company in Pune, Maharashtra Founded in October 2009 and has operations in other parts of Maharashtra too. FPII provides best-in-class software solutions based on Web Technology. 
                  The services of FPII include Educational ERP Solution, Online Admissions, Online Recruitment System, Mobile Applications, Disaster Recovery , Payment Gateway…</p>
                 
                  {/* <div class="readmore"> 
                  <a href="/AboutUs" style={{color:'#c31432'}}> Read More </a>
                  </div> */}
                  <div className='hero-btns'>
        <Button3
          className='btns'
          buttonStyle='btn3--outline'
          buttonSize='btn3--large'
          style={{
            
          }}
        >
          READ MORE
        </Button3>
       
      </div>
                  </div>
                  </div>
                  </div>
      </div>
      <Midcard/>
      <Cards />
      
      {/* <Reviews/> */}
      {/* <Footer /> */}
      <Newcards/>
     


       </>
  );
}

export default Home;
