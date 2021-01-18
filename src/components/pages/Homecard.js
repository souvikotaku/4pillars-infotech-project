import React from 'react';
import { Link } from 'react-router-dom';

function Homecard(props) {
  return (
    <>
      <li className='cards__item' style={{pointerEvents:'none'}}>
        <Link className='cards__item__link' to={props.path}>
          {/* <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure> */}
          
          <div style={{textAlign:'center'}}>
          <i style={{fontSize:'32px'}} className={props.icon}></i><br/><br/>
          <h2 style={{color:'#666666'}} >{props.text1}</h2><br/>
            <p style={{color:'#666666',padding:'0px 20px'}}> {props.text}</p><br/>
            <p style={{color:'#666666',padding:'0px 20px'}}> {props.text2}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Homecard;
