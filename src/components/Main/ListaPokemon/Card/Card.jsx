import React from "react";

const Card = (pokemon) => {
  const {name, url} = pokemon.data;
  console.log(pokemon)
  // Sacamos el ID de la url que nos viene de la llamada a la API de cada Pokemon
  const pokemonId = url.split("/")[url.split("/").length - 2];
  // Guardamos en una variable la URL para pasársela al src de la img
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return <article className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
  </article>;
};

export default Card;
