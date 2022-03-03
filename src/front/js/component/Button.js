import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="/user_login">
      <button className="btn">Login</button>
      {/* <button className="btn d-flex">Login</button> */}
    </Link>
  );
}

export default Button;
