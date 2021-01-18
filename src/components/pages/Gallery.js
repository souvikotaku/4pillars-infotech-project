import React from 'react';
import './Gallery.css';
import GalleryItem from './GalleryItem';

function Gallery() {
  return (
    <div className='cards' class="galleryBody" >
      <h1 style={{color:'white',fontSize:'60px'}}>Awards & Achievements</h1>
       <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <GalleryItem
              src='images/award1.png'
              text='Mother Teresa Award'   
              
            />
            
            <GalleryItem
              src='images/award2.png'
              text='Business Awards'
              
            />
            <GalleryItem
              src='images/award3.png'
              text='Business Awards'
              
            />
            
          </ul>

          
        </div>
      </div>

     
    </div>
    
  );
}

export default Gallery;
