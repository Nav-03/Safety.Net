//Admin/coordinator log in page

//We can use this page if we will be making the admin login on 
//the main_events.js into a separate page instead of a seperate modal.




import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const AdminLogin = () => {


    return (

        <div className="container-fluid">
            <div className="row main-content bg-success text-center">
                <div className="col-md-4 text-center company__info">
                    <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                    <h4 className="company_title">Your Company Logo</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <div className="row ">
                            <h2>Log In</h2>
                        </div>
                        <div className="row">
                            <form control="" className="form-group">
                                <div className="row">
                                    <input type="text" name="username" id="username" className="form__input" placeholder="Username" />
                                </div>
                                <div className="row">

                                    <input type="password" name="password" id="password" className="form__input" placeholder="Password" />
                                </div>
                                <div className="row">
                                    <input type="checkbox" name="remember_me" id="remember_me" className="" />
                                    <label for="remember_me">Remember Me!</label>
                                </div>
                                <div className="row">
                                    <input type="submit" value="Submit" className="aBtn" />
                                </div>
                            </form>
                        </div>
                        <div className="row ">
                            <p>Don't have an account? <a href="#">Register Here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
