import React from 'react';
import { Link } from 'react-router-dom';

function WebCardItem(props) {
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
          <i style={{fontSize:'42px',color:'#c31432'}} className={props.icon}></i><br/><br/>
          <h2 style={{color:'#c31432'}}>{props.label}</h2><br/>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default WebCardItem;
