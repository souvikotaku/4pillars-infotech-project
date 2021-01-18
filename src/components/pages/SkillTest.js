import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function SkillTest() {
  return (
    <div className='skilltest-container' >
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Skill Test</h2>

      <h1>What is Skill Test?</h1>  
      <p>Various job postings require the candidate to possess certain skills. Skill Test is the process in the online recruitment framework wherein a candidate's aplicability for a post is tested on the basis of certain examinations.The tests are conducted based on the job postings applied to and may not be applicable for all jobs. Skill Test can be exempted for several candidates on the grounds of merit or class reservation.</p>
      <br/>
      <h1>How is the Skill Test conducted?</h1>
      <p>The Skill Tests are conducted by online examinations and the results are available through specific links. The nature of the tests are basic aptitude, logical reasoning and simple mathematics which tests the minimum qualifications of the candidate.</p><br/>
      
      <h1>What is the process of appearing for an online Skill Test?</h1><br/>
      <ul style={{marginLeft: '4%'}}>
          <li style={{color: 'white'}}>The candidate is required to Log-In to the exam portal using his login credentials</li>
          <li style={{color: 'white'}}>Once logged in the candidate cannot log-out else the exam will be terminated</li>
          <li style={{color: 'white'}}>The tests are usually divided into several sections and each section is timed. On the elapse of time a section automatically ends and the next section begins</li>
          <li style={{color: 'white'}}>The test will automatically end on elapse of the total duration and the candidate will not be able to modify/edit anything after completion of the test</li>
          <li style={{color: 'white'}}>The results of the Skill Test will be available for the recruiters for further process</li>
      </ul>
      
      <br/>
      <h1>For More Information & Developement Please Contact Us.</h1>
      
    </div>
  );
}

export default SkillTest;
