import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Secure_Event from "../../img/Secure_Event.png";
import "../../styles/registration.css";
import dark from "../../img/dark.jpg";

export const Registration = (props) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({});

    return (
        <>
            <img id="imagen" src={dark} alt=""></img>
            <div id="cuerpo">
                <div className="wrapper">
                    <h2>Registration</h2>
                    <form onSubmit={(e) => {
                        actions
                            .addGuest(formData)
                            .then(() => history.push("/guest"));
                        e.preventDefault();
                    }} action="#">
                        <div className="input-box">
                            <input onSubmit={(e) => setFormData({ formData, name: e.target.value })}
                                value={formData.name}
                                type="text" placeholder="Enter your First and Last Name" required />
                        </div>
                        <div className="input-box">
                            <input onSubmit={(e) => setFormData({ formData, email: e.target.value })}
                                value={formData.email} type="text" placeholder="Enter your email" required />
                            {/* </div>
        <div className="input-box">
            <input type="password" placeholder="Create password" required/>
        </div>
        <div className="input-box">
            <input type="password" placeholder="Confirm password" required/> */}
                        </div>
                        <div className="policy">
                            <input type="checkbox" />
                            <h3>VIP</h3>
                            <input type="checkbox" />
                            <h3>Valet</h3>
                            <input type="checkbox" />
                            <h3>Unlimited Drinks</h3>
                            <input type="checkbox" />
                            <h3>Dinner</h3>

                        </div>
                        <div className="input-box button">
                            <input onSubmit={setFormData} type="Submit" value="Register Now" />
                        </div>
                        <div className="text">
                            {/* <h3>Already have an account? <a href="#">Login now</a></h3> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};