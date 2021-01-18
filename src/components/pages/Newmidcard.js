import React from 'react';
import { Link } from 'react-router-dom';

function Newmidcard(props) {
  return (
    <>
      <li className='cards__item'>
        
          {/* <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure> */}
          
          <div style={{textAlign:'center'}}>
          <h1 style={{fontSize:'60px', color: 'white'}}>{props.id}</h1><br/>
          <h2 style={{color: 'white'}} >{props.text1}</h2><br/>
            <p style={{color: 'white',padding:'0px 20px',paddingBottom:'15px'}}> {props.text}</p>
          </div>
        
      </li>
    </>
  );
}

export default Newmidcard;
