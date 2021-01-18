import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function InstituteAdmission() {
  return (
    <div className='insAdmin-container' >
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Institute Admission</h2>

      <h1>Institute Level Admissions:</h1>  
      <p>Institute Level admissions are done by the institute after the CAP rounds.
Minority institutes can fill their Institute quota admissions in this round in “Minority Admission”.
Seats remaining after the CAP rounds can be filled by institutes in Against CAP rounds as per guidelines by The Directorate of Technical Education(DTE).</p>
      <br/>

      
      <p>All the Institutes must update the information required to calculate the number of seats available for admission to direct Second year (refer Rule No. 3.0) through the institute code, assigned to the institute, and password. The Online system shall validate the information and generate online report having time stamp of last update of the information and time stamp of report generated. The Institute has to submit the duly signed the authenticated report to the concerned regional office of DTE as per schedule. The regional office of DTE shall verify the information and confirm through Regional office code and password. The system shall generate the Receipt-cum-Acknowledgement of the vacancy information. Once the information is accepted through online system, the institute shall not be able to modify it.</p><br/>
      
      <h1>A) Guidelines for the Admission Process to be carried out by Govt., Govt. Aided, Govt. Aided University Managed Institutes and University Departments:</h1>  
      <p>The seats remaining vacant after the CAP Rounds will be filled by the Principal /Director of the Respective Institutes at the Institute level. This round will be conducted by counseling for the Candidates in following order/ preference.</p><br/>

      <p>i. All the candiates appeared in Final Merit List of Diploma Candidates ( priority to subgroup, then to main group and then to any diploma)</p>
    <p>ii. All the Diploma Candidates from Maharashtra</p>
    
    <br/>
      <h1>B) Admission to Minority Seats</h1>
      <p>Eligible Candidates: The Minority Candidates Eligible as per rule no. 2.0</p><br/>
      <p>Seats Available:- Minority Seats as per the confirmation of the Competent Authority, it will be filled by the Principal /Director of the Respective Institutes at the Institute level. These seats will be filled by conducting multiple counseling rounds for the Candidates similar to the rules of CAP rounds. Online Uploading of the candidates admitted against Minority Seats: The institute should upload the candidates admitted against Minority Seats the moment the student is being admitted in the institute. The cancellation of admission should also be reported immediately through the online system. The Minorities Development Department, Government of Maharashtra shall permit the minority institutes to admit Non Minority Candidates against vacancies in Minority Seats, if any, based on the information uploaded on the DTE website</p>
      <br/>

      <p>There are two options given :</p><br/>
      <h1>A)CAP Candidate in Final Merit List:</h1>
      <p>if the candidate has already filled the basic information i.e. if the candidate is from Merit list & seeking admission in the against CAP quota or Minority quota.</p>
      <br/>

      <h1>B)Candidate not in Final Merit List:</h1>
      <p>Candidate not from final merit list & has not applied to admission through CAP Process.</p>
      <p>After admitting the candidate the institute will issue a receipt-cum-acknowledgement to candidate of admission confirmation.</p>
      <p>Hence the candidate information will be confirmed & will be reflected accordingly in the system.</p>

      
    </div>
  );
}

export default InstituteAdmission;
