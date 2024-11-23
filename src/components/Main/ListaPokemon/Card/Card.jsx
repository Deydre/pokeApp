import React from "react";

const Card = (pokemon) => {
  const {name, url} = pokemon.data;
  console.log(pokemon)
  // TRATAMIENTO  DE DATOS ----------------
  // Ponemos el nombre en mayúscula
  let nameUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // Sacamos el ID de la url que nos viene de la llamada a la API de cada Pokemon
  const pokemonId = url.split("/")[url.split("/").length - 2];
  // Guardamos en una variable la URL para pasársela al src de la img
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;


  return <article className="card">
      <h3>{nameUppercase}</h3>
      <img src={imageUrl} alt={name} />
  </article>;
};

export default Card;
