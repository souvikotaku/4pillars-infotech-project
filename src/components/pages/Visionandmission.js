import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Visionandmission() {
  return (
    <div className='services-container' style={{height:'100vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Vision & Mission</h2>

      <p>Established in October 2009, FPII has continued its journey of being one of the best-in-class software technologies service providers to its continuously expanding client base. Since its inception in 2009, FPII has earned a trusted partnership with its existing clientele. We have ventured into handling way more complex and real-time data. We strive to attain greater excellence through our work and always bring in the latest technologies to handle the massive data we deal with.</p>
      <br/>

      
      {/* <p>The image below shows a sample of the allotment process which is available for display.</p> */}
      
      <h1>Vision</h1> 
      <ul style={{marginLeft:'4%'}}>
        <li style={{color:'white'}}>To be globally recognized as one of the best software solution providers</li>
        <li style={{color:'white'}}>To continuously expand our client base</li>
        <li style={{color:'white'}}>Create ground-breaking, sophisticated, innovative services and products</li>
        <li style={{color:'white'}}>Expand the existing services databases and cater to emerging market need</li>
        <li style={{color:'white'}}>Create innovative products using the latest web technologies</li>
      </ul> 
      <br/>

      <h1>Mission</h1>
      <ul style={{marginLeft:'4%'}}>
        <li style={{color:'white'}}>To achieve excellence in educational services and applications</li>
        <li style={{color:'white'}}>Achieve in-depth knowledge of the different technologies used</li>
        <li style={{color:'white'}}>To practice highest standards of professionalism</li>
        <li style={{color:'white'}}>To nurture a learning environment and encourage new ideas</li>
        <li style={{color:'white'}}>To contribute to the overall development of the society</li>
        <li style={{color:'white'}}>To build complete trust with all the stakeholders, clients and investors affiliated with us</li>
      </ul> 
      
    </div>
  );
}

export default Visionandmission;
