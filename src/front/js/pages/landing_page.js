import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dark from "../../img/dark.jpg";
import "../../styles/landingpage.css";
import { Link } from "react-router-dom";

export const Landing = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <img id="imagen" src={dark} alt=""></img>
      <header id="showcase">
        <h1>Welcome To [NameOftheApp]</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          officiis ipsum officia numquam expedita ullam.
        </p>
        <Link to="/main_event" className="button">
          Read More
        </Link>
      </header>
      <div>
        {/* <section id="section-a">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus
          impedit maxime, quae soluta quis cumque perferendis! Doloribus
          quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium,
          officia, non porro exercitationem incidunt quis dolore? Officia ex
          accusamus expedita optio, voluptatem minus? In maiores omnis aperiam
        
        </p>
      </section> */}
      </div>
    </div>
  );
};
