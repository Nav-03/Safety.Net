//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/index.css";
import "../styles/coordinator.css";
import "../styles/IDcard.css";


//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
