import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function SeatDistribution() {
  return (
    <div className='services-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Seat Distribution</h2>

      <h1>What is seat distribution?</h1>  
      <p>Seat distribution is one of the modules under the administration framework in which one can view the display of seats amongst various institutions and also the distribution of seats within each category. In the stage of seat distribution candidates can view the seat distribution and according to their merit list, candidates can apply for their choice codes. Basically Seat Distribution shows how many seats are distributed institute wise & how those are distributed internally among the categories for intake.</p>
      <br/>
      <h1>What is the purpose of seat distribution?</h1>
      
      <p>Seat distribution is used later in the allotment process wherein candidates are allotted universities based on the merit list generation and seat distribution. This allotment based on seat distribution and merit list is done on the basis of an algorithm.</p><br/>
      <p>Seat distribution is done before each stage of allotment - CAP Round I, CAP Round II and Final round of counselling. The seats that are not not filled after CAP Round I are available for CAP Round II. Candidates also have the option of cancellation of seats after which the seats are available in the final round of counselling.</p>

    <br/>
      <h1>For More Information & Developement Please Contact Us.</h1>


      {/* <div class='services-links'>
        <div className='services-link-wrapper'>
          <div class='services-link-items'>
            <ul className='services-container-list-items'>
           <li><Link to='/'>Database Solution</Link> </li> 
           <li><Link to='/'>Web & Graphic Design</Link></li>
           <li><Link to='/'>Web Application</Link></li>
           <li><Link to='/'>SEO Solution</Link></li>
           <li> <Link to='/'>Payment Gateway</Link></li>
           <li><Link to='/'>Integration</Link></li>
           <li> <Link to='/'>CRM</Link></li>
           <li> <Link to='/'>React & Node Application</Link></li>
           <li><Link to='/'>Content Writing</Link></li>
           <li><Link to='/'>Application Testing</Link></li>
           <li> <Link to='/'>E-Commerce</Link></li>
           <li> <Link to='/'>Open Stack Services</Link></li>
           <li> <Link to='/'>Database Services</Link></li>
           <li> <Link to='/'>One Time Password</Link></li>

            </ul>
          </div>
        </div>
        </div> */}     
    </div>
  );
}

export default SeatDistribution;
