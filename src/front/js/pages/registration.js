import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/registration.css";
import dark from "../../img/dark.jpg";
import { WebcamCapture } from "../component/Webcam.jsx";
import { Form } from "react-bootstrap";

export const Registration = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    setFormData({ ...formData, [name]: target.value });
  };

  const imageCapture = (imageBase) => {
    setFormData({ ...formData, image: imageBase });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, image } = formData;
    console.log(formData);
    actions.addGuest(name, email, image).then((response) => {
      history.push(`/IDcard/${response.id}`);
    });
  };

  return (
    <div>
      <img id="imagen" src={dark} alt=""></img>
      <div id="cuerpo">
        <div className="wrapper">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <WebcamCapture onImageCapture={imageCapture} />
            <div className="input-box">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter your First and Last Name"
                required
              />
            </div>
            <div className="input-box">
              <input
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="text">
              {/* <h3>Already have an account? <a href="#">Login now</a></h3> */}
            </div>
            <div className="input-box">
              <button className="button">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
