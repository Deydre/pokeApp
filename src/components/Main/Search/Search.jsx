import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

  const [pokemonList, setPokemonList] = useState([]); //
  const [pokemonSearch, setPokemonSearch] = useState(""); // id o nombre
  const [values, setValue] = useState("");

  // const renderPokemons = () => {
  //   return items.map((item, i) => <Item data={item} key={uuidv4()} remove={() => removeItem(i)} edit={() => editItem(i)} />)
  // }

  useEffect(() => {
    // La primera vez que se hace la llamada a la API y lo pinta
    const getPokemons = async () => {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        console.log(resp.data.results)
        setPokemonList(resp.data.results)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemons();
  }, []);

  useEffect(() => {
    // La primera vez que se hace la llamada a la API y lo pinta
    const getPokemons = async () => {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`);
        console.log(resp.data)
        setPokemonList(resp.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemons();
  }, [pokemonSearch]);


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
      <input type="text" name="title" value={values} onChange={handleChange}/>
      <button type="submit">🔍</button>
    </form>
  </div>;
};

export default Search;
