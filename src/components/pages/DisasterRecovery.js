import React from 'react';
import '../../App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function DisasterRecovery() {
  return (
    <div className='disRecovery-container' >
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h2>Disaster Recovery</h2>
      <h1>What is Disaster Recovery (DR)?</h1>
      <p>DR is a primary solution for increasing database availability and zero data loss requirements.DR maintains two copies of a single database 
          that must reside on different server instances of Server Database Engine. Typically, these server instances reside on computers in different 
          locations. One server instance serves the database to clients (the principal server). The other instance acts as a hot or warm standby server 
          (the mirror server), depending on the configuration and state of the mirroring session. FPII has configured and implemented such Disaster 
          Recovery/High availability Solutions both for Microsoft Windows and Linux Platform.</p><br/>

     <h1>What are the steps involved in Disaster Recovery?</h1>
      <p>IT disaster recovery plans provide step-by-step procedures for maintaining the secondary backup of the database and recovering in case of failover
           condition and help them resume normal operations. The goal of these processes is to minimize any negative impacts to organizational operations.
            The disaster recovery process identifies critical IT systems and networks; prioritizes their recovery time objective; and delineates the 
            steps needed to restart, reconfigure, and recover them. We provide DR Recovery both for Microsoft and Linux Environment.</p><br/>

     <h1>Various terminolgies used in Disaster Recovery</h1>
      <p>To effectively administer and manage log shipping, FPII has presented with the basic understanding of a few terminologies and components involved in this solution.</p><br/>

      <h1>Primary Server</h1>
      <p>The primary server contains the source database used in the log shipping configuration.</p><br/>

      <h1>Secondary Server</h1>
      <p>The secondary server contains the replica database. This database is a warm standby copy of the source database on the primary server.</p><br/>

      <h1>Monitor Server</h1>
      <p>This optional server records various details about the log shipping activity between the primary and secondary servers. This information includes backup operations, restore operations, and any alerts that have been generated.</p><br/>

      <h1>Backup Job</h1>
      <p>The backup job resides on the primary server; this job is used to back up the transaction logs and store them in the backup share. The backup share can be a network location, the secondary server or local drive on the primary server.</p><br/>

      <h1>Copy Job</h1>
      <p>The copy job resides on each secondary server; this job is used to copy the transaction log backups from the backup location to the staging area. The staging area is usually a local drive on the secondary server.</p><br/>

      <h1>Restore Job</h1>
      <p>The restore job resides on each secondary server; this job is used to restore the transaction log backups that were copied to the local staging area. DR is a primary solution for increasing database availability and zero data loss requirements. DR maintains two copies of a single database that must reside on different server instances of Server Database Engine.Typically, these server instances reside on computers in different locations. One server instance serves the database to clients (the principal server). The other instance acts as a hot or warm standby server (the mirror server), depending on the configuration and state of the mirroring session.FPII has configured and implemented such Disaster Recovery/High availability Solutions both for Microsoft Windows and Linux Platform.</p><br/>

      <p>For More Information & Developement Please Contact Us.</p>
           
    </div>
  );
}

export default DisasterRecovery;
