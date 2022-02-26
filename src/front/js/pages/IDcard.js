//This is the ID card

//Card should have a picture

//Card should have a name displayed 

//card should have access level displayed


//QR code should be dynamic with 2 endpoints: 1. endpoint coordinator page
//                                            2. endpoint members page


//When a different member scans MY QR code, I should receive a notification 
//asking if i will like to share my contact information



import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/IDcard.css";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa"

export const IDcard = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">

            <div className="card">
                <img src="https://www.pinclipart.com/picdir/middle/411-4115229_profile-account-contact-avatar-portrait-man-users-comments.png" alt="John" style={{ width: "100 % " }} />
                <h1>John Doe</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaFacebookF /></a>
                <p><button>Contact</button></p>
            </div>
        </div>
    );
};
