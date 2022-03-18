import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dark from "../../img/dark.jpg";
import "../../styles/landingpage.css";



export const Registered = () => {
    const { store, actions } = useContext(Context);
  
    return (
      <div>
        <img id="imagen" src={dark} alt=""></img>
        <header id="showcase">
          <h1 id="titulo">You are done!</h1>
          <p>
           You will receive an email with your ID card shortly...
          </p>
        </header>
        </div>
      
    );
  };