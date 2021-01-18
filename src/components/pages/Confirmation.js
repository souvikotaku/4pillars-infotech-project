import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div className='services-container' style={{height:'80vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Confirmation</h2>

      <h1>What is the process of confirmation?</h1>  
      <p>An applicant will no longer be able to edit the information uploaded in the online application form after successful confirmation.</p>
      <br/>
      <p>The main objective of confirmation module is to check eligibility of the candidate for applying post.</p><br/>
      <p>After the Application, Candidate needs to go to an ITI Center with the printed application form for “Application Confirmation”. The candidate will receive an SMS and e-Mail regarding the same that the application process has been confirmed. Based on the number of posts applied to, he/she would be required to pay the appropriate fee via the available payment options.</p>

      <br/>
      <p>Candidate needs to take a copy of all required document for confirmation of his applying post.</p>
      
      <br/>
      <h1>For More Information & Developement Please Contact Us.</h1>
      
    </div>
  );
}

export default Confirmation;
