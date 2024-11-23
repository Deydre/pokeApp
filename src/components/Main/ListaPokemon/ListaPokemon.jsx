import React from "react";
import { useState, useEffect } from 'react'
import Card from './Card';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const ListaPokemon = () => {

  const [pokemonList, setPokemonList] = useState([]);

  const renderCards = () => {
    return pokemonList.map((pokemon, i) => <Card data={pokemon} key={uuidv4()} />)
  }

  useEffect(() => {
    // La primera vez que se cargue el componente,se llama a la API
    const getPokemons = async () => {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        setPokemonList(resp.data.results)
        console.log(resp.data.results)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemons();
  }, []);

  

  // Cuando a lista de pokemon se haya cargado, renderizar cards
  // useEffect(() => {
  //   renderCards()
  // }, [pokemonList]);

  return <>
    <p>Lista Pokemon</p>
    <section className="pokemon-list">{renderCards()}</section>
  </>;
};

export default ListaPokemon;
