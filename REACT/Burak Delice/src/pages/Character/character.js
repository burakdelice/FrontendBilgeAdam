import React, { useState, useEffect } from "react";
import { getCharacters } from "../../service/service";
import Card from "../../components/Card/Card";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <div className="characters">
      {characters.map((c) => (
        <Card key={c.id} {...c} />
      ))}
    </div>
  );
};
export default Character;
