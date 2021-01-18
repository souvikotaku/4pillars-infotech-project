import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function HallTicket() {
  return (
    <div className='services-container' style={{height:'90vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Hall Ticket</h2>

      <h1>What is Hall Ticket?</h1>  
      <p>Hall ticket is what is needed by a candidate to appear for an examination.Few recruiters require the candidate to take up certain examinations based on the posts applied to.</p>
      <br/>
      <p>A Hall Ticket is issued to all those applicants who have successfully completed the online application process and confirmed the process by the nearest ITI office.</p><br/>
      <p>Hall ticket contains all the information related to the examination that a candidate would be required to appear for. The details include Exam center, Exam timings, important rules and regulations related to the examination, and candidate details such as Name, Enrollment number etc.Hall ticket is also available online for a candidate to download.</p>

      <br/>
      <h1>Hall Ticket</h1>
      
      <br/>
      <p>1. The candidates / institutes can view their hall tickets using this link in exam form.</p><br/>
      <p>2. The institute / candidate has to enter the Enrollment number of candidate to get the hall ticket</p>

      <br/>
      <h1>For More Information & Developement Please Contact Us.</h1>
      
    </div>
  );
}

export default HallTicket;
