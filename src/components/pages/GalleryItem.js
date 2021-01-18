import React from 'react';

function GalleryItem(props) {
  return (
    <>
      <li className='cards__item' >
        
          {/* <figure className='cards__item__pic-wrap'  data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure> */}
          <div style={{textAlign:'center'}} className='cards__item__info'>
          {/* <i style={{fontSize:'42px',color:'#c31432'}} className={props.icon}></i><br/><br/> */}
          <img 
          style={{boxShadow: '0 6px 20px rgba(56, 125, 255, 0.17)',borderRadius:'10px'}}
          src={props.src}/>
          {/* <h2 >{props.label}</h2><br/> */}
            <h5 style={{color:'white'}}className='cards__item__text'>{props.text}</h5>
          </div>
        
      </li>
    </>
  );
}

export default GalleryItem;
