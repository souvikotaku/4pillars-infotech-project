import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';


function PaymentGateway() {
  return (
    <div className='services-container' style={{height:'190vh'}}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Payment Gateway Integration</h2>
            
      <p>Integration of Payment Gateway is an integral step in most of the commercial websites today. Simple steps such as Registration, membership, product purchase, service renewal can be made possible with the help of integrated payment gateways within a company’s website. The availability of various payment options is another feature of the payment gateway that is desired by all. Some of the most commonly used payment gateways are CCAvenue, PayPal, PayU, etc. The more varied the payment options in a website are, the more convenient is the user’s experience. Though most Websites are equipped with one or more payment gateway options, sometimes integrating the most desired payment gateway can be a hassle.
</p>
<p>FPII provides the convenience of integrating your website with any major payment gateway. Along with integration it also provides invoice generation and maintenance of payment records. Any payment made can be retrieved at a later time. The data can also be integrated and sorted to provide monthly/annual reports as per the requirements.</p><br/>
        
        <h1>PayU Integration Service</h1><br/>
        <p>
        We are payment gateway Reseller for PayU who offer electronic payment services to merchant website through its partnerships with various banks and payment instrument companies.
        </p>

        <p>With us, customers can pay through various options like Credit cards, Debit cards, Net banking, EMI, Cash Cards, Email Invoicing, IVR, Cash on Delivery(COD)</p><br/>

        <h1>PayU Merchant Dashboard- A one stop shop for merchant activities</h1><br/>

        <p>We offer an online interface (known as PayU merchant Dashboard) where the merchant has access to various features like viewing all the transaction details, extracting settlement reports & analytical reports, analyzing success ratio and many more. Through this interface, the merchant can also execute actions like capturing, canceling and refunding the transactions.</p><br/>
<br/>
        <div style={{textAlign:'center',color:'white'}}>
        <h2>PayU Payment process flow</h2><br/>
          <img style={{width:'80%',borderRadius:'20px'}} src='images/payumoney.png' />
        </div>  
    </div>
  );
}

export default PaymentGateway;
