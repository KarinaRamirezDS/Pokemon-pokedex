import axios from "axios";
import React, { useState } from "react";

const SearchBox = ({ setType }) => {
  const [id, setId] = useState("");

  const search = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${id}`)
      .then((res) => setType(res.data));
  };

  return (
    <div className="search-box">
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default SearchBox;
