//This is the ID card

//Card should have a picture

//Card should have a name displayed

//card should have access level displayed

//QR code should be dynamic with 2 endpoints: 1. endpoint coordinator page
//                                            2. endpoint members page

//When a different member scans MY QR code, I should receive a notification
//asking if i will like to share my contact information

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/IDcard.css";
import { FaEnvelope } from "react-icons/fa";

export const IDcard = () => {
  const { store, actions } = useContext(Context);
  const [guest, setGuest] = useState("");
  const params = useParams();

  const getUser = () => {
    const guests = store.guest;
    if (!!guests && guests.length > 0) {
      setGuest(guests.find((guest) => guest.id == params.id));
    }
  };

  useEffect(() => {
    actions.getUserFromToken(params.token).then(user => { setGuest(user) })
  }, [])
  if (!guest) return "loading..."
  return (
    <div className="text-center py-5 card-container">
      <div className="card">
        <img
          src="https://www.pinclipart.com/picdir/middle/411-4115229_profile-account-contact-avatar-portrait-man-users-comments.png"
          alt="avatar"
          style={{ width: "100% " }}
        />
        <p className="guest-name">{guest.name}</p>
        <a href={`mailto:${guest.email}`} target="_blank">
          <FaEnvelope></FaEnvelope>
        </a>
      </div>
    </div>
  );
};
