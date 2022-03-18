import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/eventdetails.css";

export const Eventdetails = () => {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/registration"),
    [history]
  );
  return (
    <div className="main-event-container">
      {/* <img id="imagen" src={dark} alt=""></img> */}
      <div id="header">Upcoming Events...</div>
      <div className="" id="bigbox">
        <div onClick={handleOnClick} className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">03/25/2022</span>
            <h2>NFTs Party</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>

          <div className="card-stats">
            <div className="stat">
              <div className="value">
                <sup>Click for</sup>
              </div>
              <div className="type">Register</div>
            </div>
            <div className="stat border">
              <div className="value">5123</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">32</div>
              <div className="type">comments</div>
            </div>
          </div>
        </div>
        <div onClick={handleOnClick} className="card">
          <div className="card-image card2"></div>
          <div className="card-text card2">
            <span className="date">04/10/2022</span>
            <h2>Cryptocurrency Event</h2>
            <p>
              Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus
              omnis provident illum maxime quod. Lorem ipsum dolor
            </p>
          </div>
          <div className="card-stats card2">
            <div className="stat">
              <div className="value">
                <sup>Click to</sup>
              </div>
              <div className="type">Register</div>
            </div>
            <div className="stat border">
              <div className="value">7152</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">21</div>
              <div className="type">comments</div>
            </div>
          </div>
        </div>
        <div onClick={handleOnClick} className="card">
          <div className="card-image card3"></div>
          <div className="card-text card3">
            <span className="date">04/21/2022</span>
            <h2>4geeks Event</h2>
            <p>
              Repudiandae corrupti amet temporibus omnis provident illum maxime.
              Ducimus, lorem ipsum dolor adipisicing elit
            </p>
          </div>
          <div className="card-stats card3">
            <div className="stat">
              <div className="value">
                <sup>Click for</sup>
              </div>
              <div className="type">Register</div>
            </div>
            <div className="stat border">
              <div className="value">3021</div>
              <div className="type">views</div>
            </div>
            <div className="stat">
              <div className="value">15</div>
              <div className="type">comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
