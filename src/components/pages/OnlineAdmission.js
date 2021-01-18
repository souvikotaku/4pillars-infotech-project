import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function OnlineAdmission() {
  return (
    <div className='services-container' style={{height:'120vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Online Admission</h2>
      <h1>What is the purpose of online admission system?</h1>
      <p>Online Admission System is online. It’s easy to use. Every year, ‬students in thousands queue up for collecting admission
          /application forms and then again for submitting the admission/application forms ‬This leads to problems in organizing 
          the applications, resulting in annoyed parents and students alike. ‬The admission process is considered crucial for students 
          as they get an opportunity to showcase their presence in the colleges and universities.  Online admission allows institutes 
          to receive applications through the web and candidates need not collect physical forms. It’s It’s been a great success for 
          large educational institutions, government departments,etc.</p>

      <p>Candidates are required to visit the admission website of the institute. ‬All eligibility criteria, ‬no. ‬of seats,  ‬selection 
          criteria etc are mentioned in the website. ‬This is the online systems wherein the students fill the application forms and option 
          forms to take admission to Various Diploma and Degree Courses. ‬System also includes the fast data processing  ‬in seat distribution
           and allotment. ‬This mission-critical system will run in less than ‬2 ‬minutes for multiple instances and conditions with single 
           database transaction for various courses.</p><br/>

    <h1>What is the purpose of online admission system?</h1>
      <p>Online admission is a four-step cyclical process which involves:</p>
      <p>i) Institute reporting</p>
      <p>ii) Online application and verification</p>
      <p>iii) Allocation of seats</p>
      <p>iv) Online allotment</p><br/>

      <h1>What is the purpose of online admission system?</h1><br></br>
      <div>
      <button style={{width:'fit-content',marginRight:'5px',marginLeft:'1.5%'}}className="btn">Payment Gateway</button>
      <button style={{width:'fit-content',marginRight:'5px'}}className="btn">24x7 Support</button>
      <button style={{width:'fit-content',marginRight:'5px'}}className="btn">OTP</button>
      </div>
      
      <p>Four Pillars Infotech India Pvt. Ltd has integrated an online payment gateway which can be used by candidates to make required payments.</p><br/>

      <p>For More Information & Development Please Contact Us.</p>

           
    </div>
  );
}

export default OnlineAdmission;
