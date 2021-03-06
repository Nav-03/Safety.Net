
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/registration.css";
import dark from "../../img/dark.jpg";
import { Form } from "react-bootstrap";

export const Contactus = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    setFormData({ ...formData, [name]: target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    console.log(formData);
    actions.addGuest(name, email, message).then((response) => {
      history.push(`/registered`);
    });
  };





  return (
    <div>
      <div className="contactUs">
        <div className="overlay">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9">
              <div className="contact-us text-center">
                <h3>Contact Us</h3>
                <p className="mb-5">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-5 text-center px-3">
                      <div className="d-flex flex-row align-items-center">
                        {" "}
                        <span className="icons">
                          <i className="fa fa-map-marker"></i>
                        </span>
                        <div className="address text-left">
                          {" "}
                          <span>Address</span>
                          <p>461, Sugar camp, San jose, California, USA</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mt-3">
                        {" "}
                        <span className="icons">
                          <i className="fa fa-phone"></i>
                        </span>
                        <div className="address text-left">
                          {" "}
                          <span>Phone</span>
                          <p>501 205 2929</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mt-3">
                        {" "}
                        <span className="icons">
                          <i className="fa fa-envelope-o"></i>
                        </span>
                        <div className="address text-left">
                          {" "}
                          <span>Email Address</span>
                          <p>navil.gabriel@gmail.com
                            <br />
                            rafaelovera6@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center px-1">
                      <form onSubmit={handleSubmit} className="forms p-4 py-5 bg-white">
                        <h5>Send Message</h5>
                        <div className="mt-4 inputs">
                          <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                          <input
                            onChange={handleChange}
                            name="email"
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                          <textarea
                            onChange={handleChange}
                            name="message"
                            type="text"
                            className="form-control"
                            placeholder="Type your message"
                            required
                          ></textarea>
                        </div>
                        <div className="button mt-4 text-left">
                          {" "}
                          <button className="btn btn-dark">Send</button>{" "}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
