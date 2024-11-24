import React from "react";

const Card = (pokemon) => {
  // Comprobamos si el pokemon viene de una búsqueda
  const isSearched = pokemon.data.abilities;

  // Si viene de una búsqueda...
  if (isSearched) {
    const { id, species, sprites, types } = pokemon.data;
    const pokemonType = types[0].type.name;
    const idThreeLength = String(id).padStart(3, '0')
    console.log(pokemon)
    return <article className={`card ${pokemonType}`}>

      <h5>#{idThreeLength}</h5>
      <img src={sprites.front_default} alt={species.name} />
      <div>
        <h3>{species.name}</h3>
      </div>
    </article>;
  } else { // Si no, pintar todos
    const pokemonType = "hola";
    const { name, url } = pokemon.data;
    // TRATAMIENTO  DE DATOS ----------------
    // Ponemos el nombre en mayúscula
    let nameUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // Sacamos el ID de la url que nos viene de la llamada a la API de cada Pokemon
    const pokemonId = url.split("/")[url.split("/").length - 2];
    // Guardamos en una variable la URL para pasársela al src de la img
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    const idThreeLength = pokemonId.padStart(3, '0')
    return <article className={`card ${pokemonType}`}>
        <h5>#{idThreeLength}</h5>
        <img src={imageUrl} alt={name} />
        <div>
          <h4>{nameUppercase}</h4>
        </div>

    </article>;

  }

};

export default Card;
