//This is the ID card

//Card should have a picture

//Card should have a name displayed 

//card should have access level displayed


//QR code should be dynamic with 2 endpoints: 1. endpoint coordinator page
//                                            2. endpoint members page


//When a different member scans MY QR code, I should receive a notification 
//asking if i will like to share my contact information




import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import dark from "../../img/dark.jpg";
import "../../styles/eventdetails.css";
import event1 from "../../img/event-photo-01.jpg";
import event2 from "../../img/event-photo-02.jpg";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";


export const IDcard = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/registration'), [history]);
  return (
    <>
    <img id="imagen" src={dark} alt=""></img>
    <div id="header">Your Profile</div>
    <div id="bigbox">
      <div  onClick={handleOnClick} className="card">
      
    <div className="card">
        <div className="card-image card2"></div>
        <div className="card-text card2">
          <span className="date">Attending: 04/21/2022</span>
          <h2>First Last</h2>
          <h2>Email</h2>
          <p>QR endpoints</p>
        </div>
        <div className="card-stats card3">
          <div className="stat">
            <div className="value"><sup> <a href="#"><FaTwitter /></a></sup></div>
            <div className="type">Twitter</div>
          </div>
          <div className="stat border">
            <div className="value"><a href="#"><FaLinkedin /></a></div>
            <div className="type">LinkedIN</div>
          </div>
          <div className="stat">
            <div className="value"><a href="#"><FaFacebookF /></a></div>
            <div className="type">Facebook</div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
