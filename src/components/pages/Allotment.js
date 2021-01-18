import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Allotment() {
  return (
    <div className='services-container' style={{height:'80vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Allotment</h2>

      <h1>What is allotment?</h1>  
      <p>Allotment is one of the modules in the administration framework where candidates are allotted institutes according to the merit list numbers from various merit lists and the avaibility of seats in the institutions using an algorithm. The final allotted seats are available for each institution and is also available to the public for display.</p>
      <br/>

      
      {/* <p>The image below shows a sample of the allotment process which is available for display.</p> */}
      
      <h1>What is the process of allotment?</h1>  
      <p>Allottment takes places in each stage of the administration process - CAP Round I, CAP Round II and Final Round of Allottment. The seats that are not not filled after CAP Round I are available for CAP Round II. The vacant seats are allotted again during CAP Round II. Candidates also have the option of cancellation of seats after which the seats are available in the final round of counselling. In the final round of counselling, there is another round of seat allottment in which the remaining seats are filled.</p><br/>

      <h1>For More Information & Developement Please Contact Us.</h1>
      
    </div>
  );
}

export default Allotment;
