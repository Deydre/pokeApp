import React, { useContext, useState, useEffect } from 'react';
import { pokeContext } from "../../../context/pokeContext";
import Card from './Card';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const ListaPokemon = () => {
  const { pokemons } = useContext(pokeContext); // Consume el Context
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSearched, setPokemonSearched] = useState(null);

  const renderCards = () => {
    return pokemonList.map((pokemon, i) => <Card data={pokemon} key={uuidv4()} />)
  }

  const renderSearchedCard = () => {
    return pokemonSearched ? <Card data={pokemonSearched} key={uuidv4()} /> : "";
  }

  // FETCH INICIAL
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        setPokemonList(resp.data.results)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemons();
  }, []);

  // FETCH DEL SEARCH
  useEffect(() => {
    const getPokemonBySearch = async () => {
      try {
        // Se ejecuta sólo cuando pokemonSearch no está vacío
        if (pokemons.length > 0) {
          const pokemonToSearch = pokemons[pokemons.length - 1];
          const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`);
          setPokemonSearched(resp.data);
        }
      } catch (err) {
        console.log(err)
      }
    }
    getPokemonBySearch();
  }, [pokemons]);


  return <>
    <section className="pokemon-list">
      {pokemonSearched ? renderSearchedCard() : renderCards()}
    </section>

  </>;
};

export default ListaPokemon;
