import React from "react";
import { useState, useContext } from 'react'
import { pokeContext } from "../../../context/pokeContext";
import Card from "../Home/ListaPokemon/Card";
import { v4 as uuidv4 } from 'uuid';

const NewPokemonForm = () => {
  const { pokemonsCreated, updatePokemonsCreated } = useContext(pokeContext); // Consume el Context

  // Estado del formulario
  const [formValues, setFormValues] = useState({
    id: '',
    nombre: '',
    img_url: '',
    tipo1: '',
    tipo2: '',
  });

  // Actualiza el estado items
  const addPokemon = (new_pokemon) => {
    updatePokemonsCreated(new_pokemon)
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues, // Conserva las claves anteriores
      [e.target.name]: e.target.value // Si cambia el título, guardarlo
    })
  }

  const renderCreatedCards = () => {
    return pokemonsCreated.map((pokemon, i) => <Card data={pokemon} key={uuidv4()} />)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPokemon(formValues)
  }

  return <><section>
   
    <form onSubmit={handleSubmit}>
    <h2>¡Crea tu propio Pokémon!</h2>
      <input type="text" name="id" onChange={handleChange} placeholder="ID" />
      <input type="text" name="nombre" onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="img_url" onChange={handleChange} placeholder="URL de la imagen" />
      <input type="text" name="type1" onChange={handleChange} placeholder="Tipo 1" />
      <input type="text" name="type2" onChange={handleChange} placeholder="Tipo 2" />
      <button type="submit">Crear Pokémon</button>
    </form>
  </section>
    <section id= "newPokemonsRender">
      {renderCreatedCards()}
    </section>
  </>
};

export default NewPokemonForm;
