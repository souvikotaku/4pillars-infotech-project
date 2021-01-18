import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' class="cardBody" >
      <h1>Services</h1>
      <p style={{fontSize:'20px'}}>FPII provides high quality solutions based on custom necessity of the client.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              icon='fas fa-cloud'
              text='What is the purpose of online admission system? &nbsp; Online Admission System&nbsp;is&nbsp;online.'   
              label='Online Admission'
              path='/OnlineAdmission'
            />
            
            <CardItem
              icon='fas fa-female'
              text='What is Online Recruitment System? Online Recruitment System is the complete process'
              label='Online Recruitment System'
              path='/OnlineRecruitment'
            />
            <CardItem
              icon='fa fa-flag'
              text='DR is a primary solution for increasing database availability and zero data loss requirements'
              label='Disaster Recovery'
              path='/DisasterRecovery'
            />
            
          </ul>

          
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper card-deck'>
          <ul className='cards__items'>

            <CardItem
              icon='fa fa-mobile'
              text='Cc avenue, PayPal, PayU for digital payments for business'
              
              label='Payment Gateway Integration'
              path='/PaymentGateway'
            />
            <CardItem
              icon='fas fa-desktop'
              text='Websites designed and developed with Wordpress Content Management System'
              label='Website Designing And Development'
              path='/WebDesign'
            />
            <CardItem
              icon='fas fa-chart-bar'
              text='FPII Provides ISO Certification for companies for conducting training for improving various types of management systems'
              label='ISO Certification'
              path='/IsoCert'
            />
            
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;
