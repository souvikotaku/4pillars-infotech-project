import React from 'react';
import { Link } from 'react-router-dom';

function Careeritem(props) {
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
          {/* <img  src={props.src}/> */}
          <h2 style={{color:'white'}}>{props.label}</h2><br/>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__item__text'>{props.text2}</h5>
            <h5 className='cards__item__text'>{props.location}</h5>
            <h5 className='cards__item__text'>{props.vacancy}</h5>

            {/* <button className="btn btn-md" style={{backgroundColor:'black', color:'white'}}>Read More</button> */}
          </div>
      </li>
    </>
  );
}

export default Careeritem;
