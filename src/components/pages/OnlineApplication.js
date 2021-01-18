import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function OnlineApplication() {
  return (
    <div className='services-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Online Application</h2>

      <h1>What is online application?</h1>  
      <p>Online application is the first step in the process of the online admission framework wherein candidates are required to create an online account and fill related information as per the requirements. Filling of the application form by the candidates is the first step.The information provided in the application forms are used further in the process of admission.</p>
      <br/>
      <h1>What is the process of online application?</h1>
      
      <ul style={{marginLeft:'4%'}}>
        <li style={{color:'white'}}>While a candidate applies for CAP Round he has to fill various basic information and provide required documents as mentioned in the application form.</li>
        <li style={{color:'white'}}>After the application process is complete the applicant confirms all provided information
        Upon confirmation, a Login ID is created and a password can be set. Candidates can use this login ID and password all future activities.</li>
        <li style={{color:'white'}}>Candidates also need to select their type based on the various categories provided. These types are used in the process of seat distribution and allottment.</li>
        <li style={{color:'white'}}>At the end of the process, a printable application form is available which can be taken to the nearest ARC center alongwith the required documents.</li>
      </ul>  

    <br/>
      <h1>For More Information & Developement Please Contact Us.</h1>


      {/* <div class='services-links'>
        <div className='services-link-wrapper'>
          <div class='services-link-items'>
            <ul className='services-container-list-items'>
           <li><Link to='/'>Database Solution</Link> </li> 
           <li><Link to='/'>Web & Graphic Design</Link></li>
           <li><Link to='/'>Web Application</Link></li>
           <li><Link to='/'>SEO Solution</Link></li>
           <li> <Link to='/'>Payment Gateway</Link></li>
           <li><Link to='/'>Integration</Link></li>
           <li> <Link to='/'>CRM</Link></li>
           <li> <Link to='/'>React & Node Application</Link></li>
           <li><Link to='/'>Content Writing</Link></li>
           <li><Link to='/'>Application Testing</Link></li>
           <li> <Link to='/'>E-Commerce</Link></li>
           <li> <Link to='/'>Open Stack Services</Link></li>
           <li> <Link to='/'>Database Services</Link></li>
           <li> <Link to='/'>One Time Password</Link></li>

            </ul>
          </div>
        </div>
        </div> */}     
    </div>
  );
}

export default OnlineApplication;
