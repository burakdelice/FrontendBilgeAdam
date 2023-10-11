import "./index.scss";
import React, { useEffect, useState } from "react";
import { getCharacters } from "../../service/character";
import Card from "../../components/Card";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => setCharacters(response.data.results));
  }, []);
  return (
    <div className="character">
      {characters.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Character;
