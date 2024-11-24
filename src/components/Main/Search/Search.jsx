import React from "react";
import { useContext, useState, useEffect } from "react";
import { pokeContext } from "../../../context/pokeContext";

const Search = () => {
  const { updatePokemons } = useContext(pokeContext); // Consume el Context

  const [values, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Enviamos la búsqueda al estado "pokemons" del contexto a través de la función del contexto para que se sume a ese array
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
