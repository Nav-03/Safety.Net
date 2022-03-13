import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Secure_Event from "../../img/Secure_Event.png";
import "../../styles/registration.css";
import dark from "../../img/dark.jpg";
import { WebcamCapture } from "../component/Webcam.jsx";

export const Registration = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = formData;
    actions.addGuest(name, email).then(() => history.push("/guest"));
  };

  return (
    <div>
      <img id="imagen" src={dark} alt=""></img>
      <div id="cuerpo">
        <div className="wrapper">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <WebcamCapture />
            <div className="input-box">
              <input
                onChange={handleChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Enter your First and Last Name"
                required
              />
            </div>
            <div className="input-box">
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="text">
              {/* <h3>Already have an account? <a href="#">Login now</a></h3> */}
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><div className="dropdown-item" ><input type="checkbox" />
                  <h3>VIP</h3></div></li>
                <li><div className="dropdown-item" ><input type="checkbox" />
                  <h3>Valet</h3></div></li>
                <li><div className="dropdown-item" ><input type="checkbox" />
                  <h3>Dinner</h3></div></li>
              </ul>

            </div>
            <div className="input-box button">
              <input type="Submit" value="Register Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
