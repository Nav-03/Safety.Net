//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css";
import "../styles/coordinator.css";
import "../styles/IDcard.css";
import "../styles/contactus.css";
import "../styles/footer.css";
import "../styles/coordinator_registration.css"

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
