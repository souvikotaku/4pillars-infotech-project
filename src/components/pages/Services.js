import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='services-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Our Services</h2>
      <p>FPII provides high quality solutions based on custom necessity of the client.‭ ‬We unite technological expertise inventive research technique and new approaches together to recommend the best solutions of the crisis.‭ ‬Our main focus is to provide requirement based solution with added value in shoe string budget under strict time line.‭ ‬FPII make sure that our client realizes great returns on their asset in technology initiative.</p>
      <p>Our technical team consists of PHP,‭ ‬MySQL,‭ ‬Objective C,‭ ‬Drupal engineers,‭ ‬database developers,‭ ‬as well as technology quality analysts.‭ ‬We therefore work with the newest tools and applications to give our clients the optimal,‭ ‬customized and comprehensive open source technology solutions possible.</p>
      <p>We offer a complete range of consulting,‭ ‬design,‭ ‬build,‭ ‬implementation,‭ ‬migration,‭ ‬and support services that can help to promote a successful project and a satisfied client.</p>
      <br/>
      <h1>OUR TECHNOLOGIES:</h1>  
      <div class='services-links'>
        <div className='services-link-wrapper'>
          <div class='services-link-items'>
            <ul className='services-container-list-items'>
           <li>FPII is one stop for online cloud backup and cloud hosting solutions provider.</li>
          <li>Database Management using MySQL. As the volume of data increases over a period of time, the biggest challenge is to manage the explosion of data growth. Thus FPII manages expert data protection, takes care of backup, restore and storage performance optimization.</li>
          <li>Host mission-critical and resource-intensive applications on pre-configured, high-performance dedicated servers to make critical business data and applications available for access within the shortest time possible.</li>
          <li>Scalable, high-performance network architecture with maximum uptime and availability. Load balancing ensure fast connection and fail safe 24x7 access that help you minimize response time while maximizing site availability.</li>
            </ul>
          </div>
        </div>
        </div>

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

export default Services;
