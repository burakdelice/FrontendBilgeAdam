import "./index.scss";
import React, { useEffect, useState } from "react";
import { getEpisodeName } from "../../service/character";

const Card = ({ name, status, species, location, image, episode, url }) => {
  const [episodeName, setEpisodeName] = useState([]);

  useEffect(() => {
    getEpisodeName(episode[0]).then((response) =>
      setEpisodeName(response.data.name)
    );
  }, []);

  const divStyle = { height: "0.5rem", width: "0.5rem", backgroundColor: "" };
  console.log(typeof status);

  if (status === "Dead") {
    divStyle.backgroundColor = "#d63d2e";
  } else if (status === "Alive") {
    divStyle.backgroundColor = "#008000";
  } else {
    divStyle.backgroundColor = "#696e68";
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name}></img>
      </div>
      <div className="card-info">
        <div className="section">
          <a href={url} target="_blank">
            <h2>{name}</h2>
          </a>
          <span className="status">
            <div className="status-icon" style={divStyle}>
              {" "}
            </div>
            {status} - {species}
          </span>
        </div>

        <div className="section">
          <span className="text-gray">Last known location:</span>
          <a href={location.url} target="_blank">
            {location.name}
          </a>
        </div>
        <div className="section">
          <span className="text-gray">First seen in:</span>
          <a href={episode[0]} target="_blank">
            {episodeName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
