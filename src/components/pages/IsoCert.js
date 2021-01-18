import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function IsoCert() {
  return (
    <div className='services-container' style={{height:'80vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>ISO Certification</h2>
      <h1>Management System Consultant</h1>
      <p>Four Pillars Infotech India Pvt Ltd also provides ISO certifications to other companies. Companies can contact 99Ideas for conducting training for
           improving various types of management systems such as QMS, EMS, OHSAS, ISMS etc. FPII performance improvement specialists works with clients to 
           implement quality management systems. This helps clients to move beyond certification and to implementation of organization wide quality management systems.</p><br/>

     <h1>With our team of certified auditors and trainers you can avail the benefits of being ISO certified in a wide number of areas:</h1>
      <p>Quality Management System (ISO 9001& with specific reference to ISO / TS 16949)</p>

      <p>Environmental Management System (ISO 14001)</p>

      <p>Information Security Management System ( ISO 27001)</p>

      <p>occupational Health and Safety assessment Series (BS18001)</p>

      
           
    </div>
  );
}

export default IsoCert;
