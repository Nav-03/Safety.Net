//Admin/coordinator log in page

//We can use this page if we will be making the admin login on 
//the main_events.js into a separate page instead of a seperate modal.




import React, { useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const AdminLogin = () => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/coordinator'), [history]);

    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="container-fluid">
            <div className="row main-content bg-success text-center">
                <div className="col-md-4 text-center company__info">
                    <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                    <h4 className="company_title">Your Company Logo</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <div className="login ">
                            <h2>Log In</h2>
                        </div>
                        <div className="row">
                            <form onSubmit={e => {
                                e.preventDefault();
                                actions
                                    .createNewSession(email, password)
                                    .then((session) => {
                                        history.push("/coordinator");
                                    })
                            }}
                                control="" className="form-group">
                                <div className="row">
                                    <input required value={email} onChange={e => {
                                        setEmail(e.target.value)
                                    }} type="email" name="email" id="email" className="form__input" placeholder="Email" />
                                </div>
                                <div className="row">

                                    <input required value={password} onChange={e => {
                                        setPassword(e.target.value)
                                    }} type="password" name="password" id="password" className="form__input" placeholder="Password" />
                                </div>
                                <div className="d-flex justify-content-around align-items-center">
                                    <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                    <label className="label" for="remember_me">Remember Me!</label>
                                </div>
                                <div className="row">
                                    <input type="submit" value="Submit" className="aBtn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
