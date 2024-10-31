import React from "react";
import { Link } from "react-router-dom";

const Headers = ({ onScrolltoHome, onScrolltoPlanets }) => {
  return (
    <div
      className="navdiv"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="navbar-background">
        <div className="navbar-content">
          <Link to={"/"}>
            <button className="navbtn" onClick={onScrolltoHome}>
              Home
            </button>
          </Link>

          <Link to={"/"}>
            <button className="navbtn" onClick={onScrolltoPlanets}>
              Planets
            </button>
          </Link>
          <Link to={"/solar-system"}>
            <button className="navbtn">Solar System</button>
          </Link>
          <button className="navbtn">About us</button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
