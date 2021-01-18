import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Privacy_policy() {
  return (
    <div className='services-container' style={{height:'150vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Privacy Policy</h2>
      <p>The privacy policy describes Four Pillars Infotech India Pvt. Ltd. (FPII’s) policies and procedures regarding the usage of the data collected through the users. We will not share or use your information with anyone except with what is described in this policy. The privacy policy mentioned here does not include information collected through means other than the website, such as offline collection, social media content and e-mail content.</p><br/>
      
      <h1>Information collected</h1><br/>
      <p>1. We, at FPII are committed to respecting any personal information shared within the website and its affiliated services.“Personal Information” refers to any information used to identify an individual. In general you can access FPII website without telling us who you are and what you do. However, if you intend to seek a particular answer or looking for a particular position with FPII, we would require certain information to be able to contact you directly. However, FPII is not involved in making the shared information available to any party or source that is not directly involved with FPII.</p><br/>
      <p>2. Information related to a student is only accessible to the Board of Technical Education. FPII is not involved in distribution or access to a student’s information for any personal or business needs. FPII is also not involved in favoritism of any student using the services of FPII and acts only as a service provider to FPII’s clients.</p>

      <h1>Job Postings</h1><br/>
      <p>1) The job posting requirements are not shared with any third party vendors or websites.</p><br/>
      <p>2) FPII may receive resumes of potential candidates from other sites and in such cases FPII will contact the candidate directly. No disclosure can be made through which information is accessed as we are not involved in any promotional activity for those websites.</p>

    <h1>Your consent</h1><br/>
      <p>By using this website, you consent to the terms of our online privacy policy and to FPII’s processing of personal information for the purposes given above.</p><br/>
      

      <h1>Information security</h1><br/>
      <p>1) We take appropriate security measures to protect the information shared with FPII website against unauthorized access and inappropriate disclosure of data to any third party sources</p><br/>
      <p>2) Contact Information:-</p>
      <p>FPII welcomes your comments regarding the privacy policies mentioned in this website under the appropriate contact tab, where you can contact FPII directly. It will solely be at the discretion of FPII to address the changes.</p>
      

           
    </div>
  );
}

export default Privacy_policy;
