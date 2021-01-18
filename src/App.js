import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import OnlineAdmission from './components/pages/OnlineAdmission';
import OnlineApplication from './components/pages/OnlineApplication';
import SeatDistribution from './components/pages/SeatDistribution';
import InstituteAdmission from './components/pages/InstituteAdmission';
import Allotment from './components/pages/Allotment';
import OnlineRecruitment from './components/pages/OnlineRecruitment';
import Application from './components/pages/Application';
import Confirmation from './components/pages/Confirmation';
import HallTicket from './components/pages/HallTicket';
import SkillTest from './components/pages/SkillTest';
import WebDesign from './components/pages/WebDesign';
import DisasterRecovery from './components/pages/DisasterRecovery';
import IsoCert from './components/pages/IsoCert';
import PaymentGateway from './components/pages/PaymentGateway';
import Clientele from './components/pages/Clientele';
import Workwithclient from './components/pages/Workwithclient';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import OurNetwork from './components/pages/OurNetwork';
import Gallery from './components/pages/Gallery';
import Career from './components/pages/Career';
// import DBSolution from './components/pages/DBSolution';
// import WebAndGraphicsDesign from './components/pages/WebAndGraphicsDesign';
// import WebApplication from './components/pages/WebApplication'; 
// import SEO from './components/pages/SEO';
// import CRM from './components/pages/CRM';
// import ContentWriting from './components/pages/ContentWriting';
// import ReactAndNode from './components/pages/ReactAndNode';
// import ApplicationTesting from './components/pages/ApplicationTesting';
// import ECommerce from './components/pages/ECommerce';
// import OpenStack from './components/pages/OpenStack';
// import DBServices from './components/pages/DBServices';
// import OTP from './components/pages/OTP';
// import PrivacyPolicy from './components/pages/PrivacyPolicy';
// import TandC from './components/pages/TandC';
// import CoreTeam from './components/pages/CoreTeam';
// import WhatWeStand from './components/pages/WhatWeStand';
import Visionandmission from './components/pages/Visionandmission';
import OurTeam from './components/pages/OurTeam';
import OrganizationChart from './components/pages/OrganizationChart';
import Login from './components/pages/Login';
import Termsandconditions from './components/pages/Termsandconditions';
import Privacy_policy from './components/pages/Privacy_policy';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/OnlineAdmission' component={OnlineAdmission} />
          <Route path='/OnlineApplication' component={OnlineApplication} />
          <Route path='/SeatDistribution' component={SeatDistribution} />
          <Route path='/InstituteAdmission' component={InstituteAdmission} />
          <Route path='/Allotment' component={Allotment} />
          <Route path='/OnlineRecruitment' component={OnlineRecruitment} />
          <Route path='/Application' component={Application} />
          <Route path='/Confirmation' component={Confirmation} />
          <Route path='/HallTicket' component={HallTicket} />
          <Route path='/SkillTest' component={SkillTest} />
          <Route path='/WebDesign' component={WebDesign} />
          <Route path='/DisasterRecovery' component={DisasterRecovery} />
          <Route path='/IsoCert' component={IsoCert} />
          <Route path='/PaymentGateway' component={PaymentGateway} />
          <Route path='/clientele' component={Clientele} />
          <Route path='/Workwithclient' component={Workwithclient} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/OurNetwork' component={OurNetwork} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Blog' component={Blog} />
          <Route path='/Career' component={Career} />
          {/* <Route path='/DBSolution' component={DBSolution} />
          <Route path='/WebAndGraphicsDesign' component={WebAndGraphicsDesign} />
          <Route path='/WebApplication' component={WebApplication} />
          <Route path='/SEO' component={SEO} />
          <Route path='/CRM' component={CRM} />
          <Route path='/ContentWriting' component={ContentWriting} />
          <Route path='/ReactAndNode' component={ReactAndNode} />
          <Route path='/ApplicationTesting' component={ApplicationTesting} />
          <Route path='/ECommerce' component={ECommerce} />
          <Route path='/OpenStack' component={OpenStack} />
          <Route path='/DBServices' component={DBServices} />
          <Route path='/OTP' component={OTP} />
          <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
          <Route path='/TandC' component={TandC} />
          <Route path='/CoreTeam' component={CoreTeam} />
          <Route path='/WhatWeStand' component={WhatWeStand} /> */}
          <Route path='/Visionandmission' component={Visionandmission} />
          <Route path='/OurTeam' component={OurTeam} />
          <Route path='/OrganizationChart' component={OrganizationChart} />
          <Route path='/Login' component={Login} />
          <Route path='/Termsandconditions' component={Termsandconditions} />
          <Route path='/Privacy_policy' component={Privacy_policy} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
