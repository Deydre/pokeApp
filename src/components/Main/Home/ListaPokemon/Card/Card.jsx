import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (pokemon) => {
   const navigate = useNavigate();
  // Comprobamos si el pokemon viene de una búsqueda
  const isSearched = pokemon.data.abilities;
  const isCreated = pokemon.data.id;

  // Si viene de una búsqueda...
  if (isSearched) {
    const { id, species, types } = pokemon.data;
    const pokemonType = types[0].type.name;
    const idThreeLength = String(id).padStart(3, '0')
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return <article className={`card ${pokemonType}`}>
      <h5>#{idThreeLength}</h5>
      <img src={imageUrl} alt={species.name} />
      <div>
        <h3>{species.name}</h3>
        <p>{pokemonType}</p>
      </div>
    </article>;

  } else if (isCreated) {
    const { id, nombre, img_url, type1, type2 } = pokemon.data;
    const idThreeLength = String(id).padStart(3, '0')
    let nameUppercase = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    return <article className={`card ${type1}`}>
      <h5>#{idThreeLength}</h5>
      <img src={img_url} alt={nombre} />
      <div>
        <h4>{nameUppercase}</h4>
        <p>{type1}</p>
        <p>{type2}</p>
      </div>
    </article>;

  } else { // Si no, pintar todos
    const { name, url } = pokemon.data;
    // TRATAMIENTO  DE DATOS ----------------
    // Ponemos el nombre en mayúscula
    let nameUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // Sacamos el ID de la url que nos viene de la llamada a la API de cada Pokemon
    const pokemonId = url.split("/")[url.split("/").length - 2];
    // Guardamos en una variable la URL para pasársela al src de la img
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    const idThreeLength = pokemonId.padStart(3, '0')
    const details = () => {
      navigate(`/pokemon/${pokemonId}`)
    }
    
    return <article className={`card`}>
      <h5>#{idThreeLength}</h5>
      <img src={imageUrl} alt={name} />
      <div>
        <h4>{nameUppercase}</h4>
      </div>
      <button onClick={details}>View Details</button>
    </article>;

  }

};

export default Card;
