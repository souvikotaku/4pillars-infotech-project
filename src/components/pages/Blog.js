import React from 'react';
import './Blog.css';
import BlogItem from './BlogItem';

function Blog() {
  return (
    <div className='cards' class="blogBody" >
      <h1 style={{color:'white',fontSize:'60px'}}>Blogs</h1>
      {/* <p style={{color:'white',fontSize:'60px'}} style={{fontSize:'20px'}}>FPII provides high quality solutions based on custom necessity of the client.</p> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <BlogItem
              src='images/blog1.jpg'
              text='Step 1 — Moving the MySQL Data Directory To prepare for moving MySQL’s data directory, let’s verify the current location...'   
              label='How to Change a MySQL Data Directory to a New Location on CentOS 7'
              path='/services'
            />
            
            <BlogItem
              src='images/blog2.jpg'
              text='Step 1:-    create new user in /home (With Strong Password) create public_html folder set 755 permission from new user...'
              label='Change Document Root to /home'
              path='/services'
            />
            <BlogItem
              src='images/blog3.jpg'
              text='run through root login Check your status by running: getsebool httpd_can_network_connect If you get: httpd_can_network_connect --> off This may be your...'
              label='IF FTP Dosnt Work through PHP SCRIPT but Does Work through command line THEN follow the steps'
              path='/services'
            />
            
          </ul>

          
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper card-deck'>
          <ul className='cards__items'>

            <BlogItem
              src='images/blog4.jpg'
              text='On Server Login as root mount /dev/sdb1 /msbt_bkup_usb/ Before Command Run NAME...'
              label='Mount External Hard Drive in linux '
              path='/services'
            />
            <BlogItem
              src='images/blog5.jpg'
              text='To Start mysql from one server to another ON 172.16.0.240 SERVER ... Application (Give Same IP in BLOG) SET ENFORCE [root@msbtedevweb22 ~]# setenforce 0 [root@msbtedevweb22...'
              label='IF Sever Doesnt Shutdown Properly'
              path='/services'
            />
            <BlogItem
              src='images/blog6.png'
              text='FPII Provides ISO Certification for companies for conducting training for improving various types of management systems'
              label='How to install PHP 7.X in to CentOS 7.X'
              path='/services'
            />
            
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Blog;
