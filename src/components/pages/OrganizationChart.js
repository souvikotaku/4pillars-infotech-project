import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function OrganizationChart() {
  return (
    <div className='services-container' style={{height:'160vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Organization Chart</h2>

      <p>FPII is fortunate to have a talented team of‭ 30 ‬professionals from the best engineering colleges</p>
      <br/>
      <h1>Qualification And Role Of Employee</h1>
      
      {/* <p>The image below shows a sample of the allotment process which is available for display.</p> */}
      
      <p>ME/M-Tech: 1</p> 
      <p>BE./B-Tech: 27</p> 
      <p>MCA: 2</p> <br/>

      <div>
          <img style={{borderRadius: '20px'}} src='images/flow1.jpg'/>
      </div>
      
      
    </div>
  );
}

export default OrganizationChart;
