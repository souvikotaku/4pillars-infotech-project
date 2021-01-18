import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item' >
        <Link className='cards__item__link' to={props.path}
          // style={{boxShadow: '0 6px 20px rgba(56, 125, 255, 0.17)'
          //   }}
        >
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
        </Link>
      </li>
    </>
  );
}

export default CardItem;
