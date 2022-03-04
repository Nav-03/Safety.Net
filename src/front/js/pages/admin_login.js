import React, { useContext, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Secure_Event from "../../img/Secure_Event.png";
import "../../styles/registration.css";
import dark from "../../img/dark.jpg";

export const AdminLogin = () => {
    const { store, actions } = useContext(Context);
    const handleOnClick = useCallback(() => history.push('/coordinator'), [history]);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <img id="imagen" src={dark} alt=""></img>
            <div id="cuerpo">
                <div className="wrapper">
                    <h2>Login</h2>
                    <form onSubmit={e => {
                        e.preventDefault();
                        actions
                            .createNewSession(email, password)
                            .then((session) => {
                                history.push("/coordinator");
                            })
                    }}
                        action="#">
                        <div className="input-box">
                            <input required value={email} onChange={e => {
                                setEmail(e.target.value)
                            }} type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email" />
                        </div>
                        <div className="input-box">
                            <input required value={password} onChange={e => {
                                setPassword(e.target.value)
                            }}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password" />
                        </div>
                        <div className="policy">
                            <input type="checkbox" />
                            <h3>I accept all terms and condition</h3>
                        </div>
                        <div className="input-box button">
                            <input onChange={handleOnClick} type="Submit" value="Login Now" />
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