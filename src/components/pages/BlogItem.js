import React from 'react';
import { Link } from 'react-router-dom';

function BlogItem(props) {
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
          <img 
          style={{boxShadow: '0 6px 20px rgba(56, 125, 255, 0.17)',borderRadius:'10px'}}
          src={props.src}/>
          <h2 style={{color:'white'}}>{props.label}</h2><br/>
            <h5 className='cards__item__text'>{props.text}</h5><br/>
            <button className="btn btn-md" style={{backgroundColor:'black', color:'white'}}>Read More</button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default BlogItem;
