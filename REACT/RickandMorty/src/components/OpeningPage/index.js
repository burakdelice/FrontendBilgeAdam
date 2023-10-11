import "./index.scss";
import React from "react";

const Opening = () => {
  return (
    <div>
      <header>
        <nav>
          <img
            src="./png-transparent-rick-sanchez-morty-smith-computer-icons-others-head-morty-smith-pickle-rick.png"
            alt="Rick&Morty"
          ></img>
          <ul>
            <li className="nav-li">Docs</li>
            <li className="nav-li">About</li>
          </ul>
        </nav>
        <button className="button">SUPPORT US</button>
      </header>
      <div className="api-heading">
        <h1 className="heading">The Rick and Morty API</h1>
      </div>
    </div>
  );
};
export default Opening;
