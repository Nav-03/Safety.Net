import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="/sign_up">
      <button className="btn">Sign Up</button>
      {/* <button className="btn d-flex">Login</button> */}
    </Link>
  );
}

export default Button;
