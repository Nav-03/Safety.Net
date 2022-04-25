import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/coordinator_registration.css";
import dark from "../../img/dark.jpg";
import { Form } from "react-bootstrap";

export const coordinatorRegistration = (props) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        setFormData({ ...formData, [name]: target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formData;
        console.log(formData);
        actions.addCoordinator(email, password).then((response) => {
            history.push(`/admin_login`);
        });
    };

    return (
        <div>
            <img id="imagen" src={dark} alt=""></img>
            <div id="cuerpo">
                <div className="wrapper">
                    <h2>Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                onChange={handleChange}
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                onChange={handleChange}
                                name="password"
                                type="text"
                                placeholder="Enter your password"
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
