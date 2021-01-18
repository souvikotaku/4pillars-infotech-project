import React, { useState, useEffect } from 'react';
import { Button2 } from './Button2';
import { Button3 } from './Button3';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            4 Pillars Infotech
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item' class="dropdown">
            <Link to='/AboutUs' class="dropbtn" className='nav-links' onClick={closeMobileMenu}>
                About Us

              </Link>
             
              <div class="dropdown-content">
                 <a href="/OurNetwork" style={{fontSize:'15px',padding:'8px 0px'}}>Our Network</a>
                 
                </div>

              
            </li>
            {/* <li class="sidelink"   >
              <Link
                to='/OurNetwork'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{fontSize:'18px',padding:'2px 0px'}}
              >
                Our Network
              </Link>
              
            </li> */}
           
              
            <li className='nav-item' class="dropdown">
              <Link
                to='/services'
                class="dropbtn"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>

              <div class="dropdown-content">
                 <a style={{fontSize:'15px',padding:'8px 0px'}} class='dropdown2' href="/OnlineAdmission">Online Admission
                 
                 <div class="dropdown-content2">
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/OnlineApplication">Online Application</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/SeatDistribution">Seat Distribution</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/InstituteAdmission">Institute Admission</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/Allotment">Allotment</a>
                 </div>
                 </a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} class='dropdown3' href="/OnlineRecruitment">Online Recruitment System
                 <div class="dropdown-content3">
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/Application">Application</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/Confirmation">Confirmation</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/HallTicket">Hall Ticket</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/SkillTest">Skill Test</a>
                 </div>
                 </a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/WebDesign">Website Designing & Development</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/DisasterRecovery">Disaster Recovery</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/IsoCert">ISO Certification</a>
                 <a style={{fontSize:'15px',padding:'8px 0px'}} href="/PaymentGateway">Payment Gateway Integration</a>
                </div>
              
            </li>
             
          
            <li className='nav-item'class="dropdown">
              <Link
                to='/clientele'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Clientele
              </Link>

              <div class="dropdown-content">
                 <a href="/Workwithclient" style={{fontSize:'15px',padding:'8px 0px'}}>Work With Client</a>
                 
              </div>

            </li>



            <li className='nav-item'>
              <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/Career' className='nav-links' onClick={closeMobileMenu}>
                Career
              </Link>
            </li>

            {/* <li>
              <Link
                to='/ContactUs'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li> */}
          </ul>
          {button && <Button3 buttonStyle='btn--outline' style={{marginRight:'4%'}}>Login</Button3>}
          {button && <Button2 buttonStyle='btn--outline' >Contact Us</Button2>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
