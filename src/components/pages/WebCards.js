import React from 'react';
import './WebCards.css';
import WebCardItem from './WebCardItem';

function WebCards() {
  return (
    <div className='cards' class="webcardBody" >
     <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <WebCardItem
              icon='fa fa-mobile'
              text='We create websites which can easily adapt screen resolution of any device, no matter which device you or your customers are using.'   
              label='Responsive, User-friendly Design'
            />
            
            <WebCardItem
              icon='fa fa-desktop'
              text='Generally, web design & development takes months to complete. But, with our solutions, your website will be ready in few days.'
              label='Quick Web Development'
            />
            <WebCardItem
              icon='fa fa-search'
              text='We develop websites that are search engine friendly. We use proper HTML 5 tags so that your website will be optimized for search engine.'
              label='Search Engine Friendly'
            />
            
          </ul>

          
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper card-deck'>
          <ul className='cards__items'>

            <WebCardItem
              icon='fa fa-fighter-jet'
              text='We develop website &amp; web pages that are optimized for the speed. Our websites load faster, run smoother &amp; perform better.'
              
              label='Faster & Lighter Websites'
            />
            <WebCardItem
              icon='fas fa-edit'
              text="With our CMS website solution, you can easily add, update or delete content from your website. You won't need any coding knowledge!"
              label='Editable Content'
            />
            <WebCardItem
              icon='fas fa-download'
              text='We provide all the plugins installed with social media integration helping the website to perform better in search engine.'
              label='Theme & Plugin Installation'
            />
            
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default WebCards;
