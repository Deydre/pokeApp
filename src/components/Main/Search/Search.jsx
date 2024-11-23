import React from "react";
import { useContext, useState, useEffect } from "react";
import { pokeContext } from "../../../context/pokeContext";
import axios from "axios";

const Search = () => {
  const { updatePokemons } = useContext(pokeContext); // Consume el Context

  const [pokemonSearch, setPokemonSearch] = useState([]); // id o nombre
  const [values, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonSearch(values);
    updatePokemons(values);
    setValue("");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={values} onChange={handleChange} />
      <button type="submit">🔍</button>
    </form>
  </div>;
};

export default Search;
