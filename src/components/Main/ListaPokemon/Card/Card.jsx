import React from "react";

const Card = (pokemon) => {

  // // Cuando viene del search
  // useEffect(() => {
  //   const getPokemons = async () => {
  //     try {
  //       // Se ejecuta sólo cuando pokemonSearch no está vacío
  //       if (pokemonSearch.length > 0) {
  //         const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`);
  //         console.log(resp.data)
  //       }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getPokemons();
  // }, [pokemonSearch]);


  const {name, url} = pokemon.data;
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
      <button type="submit">SEE MORE</button>
  </article>;
};

export default Card;
