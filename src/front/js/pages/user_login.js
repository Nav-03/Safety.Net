import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Secure_Event from "../../img/Secure_Event.png";
import "../../styles/registration.css";
import dark from "../../img/dark.jpg";

export const Userlogin = () => {
	const { store, actions } = useContext(Context);

	return (
<>
<img id="imagen" src={dark} alt=""></img>
 <div id="cuerpo">
	<div className="wrapper">
        <h2>Login</h2>
        <form action="#">
        <div className="input-box">
            <input type="text" placeholder="Enter your email" required/>
        </div>
        <div className="input-box">
            <input type="password" placeholder="Enter your password" required/>
        </div>
        <div className="policy">
            <input type="checkbox"/>
            <h3>I accept all terms and condition</h3>
        </div>
        <div className="input-box button">
            <input type="Submit" value="Login Now"/>
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