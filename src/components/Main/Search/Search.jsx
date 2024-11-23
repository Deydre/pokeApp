import React from "react";
import { useContext, useState, useEffect } from "react";
import { pokeContext } from "../../../context/pokeContext";
import axios from "axios";

const Search = () => {
  const { updatePokemon } = useContext(pokeContext); // Consume el Context
  //como city
  const [pokemonSearch, setPokemonSearch] = useState(""); // id o nombre
  const [values, setValue] = useState("");

  // useEffect(() => {
  //   // La primera vez que se hace la llamada a la API y lo pinta
  //   const getPokemons = async () => {
  //     try {
  //       const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`);
  //       console.log(resp.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getPokemons();
  // }, [pokemonSearch]);


  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonSearch(values);
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
