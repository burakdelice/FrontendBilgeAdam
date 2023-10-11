import React, { useState } from "react";
import { getCharacters } from "../../service/character";
import "./index.scss";

const Search = () => {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleSearch = async () => {
    const results = await getCharacters(query);
    setCharacters(results);
  };

  return (
    <div className="search-div">
      <input
        className="search-bar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
