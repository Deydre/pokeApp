import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main'
import { pokeContext } from './context/pokeContext';
import { BrowserRouter } from 'react-router-dom';

// El padre crea un contexto y actúa como el proveedor de datos.
// Los hijos consumen ese contexto para acceder o modificar los datos compartidos.
// Un hijo actualiza el estado global (en el contexto), y el otro responde a esos cambios.

function App() {

  const [pokemons, setPokemons] = useState([]);

  const updatePokemons = (newPokemon) => {
    setPokemons([...pokemons, newPokemon])
  };

  const [pokemonsCreated, setPokemonsCreated] = useState([]);

  const updatePokemonsCreated = (newPokemon) => {
    setPokemonsCreated([...pokemonsCreated, newPokemon])
  };

  return (
    <>
      <BrowserRouter >
        <Header />
        <pokeContext.Provider value={{ pokemons, updatePokemons, pokemonsCreated, updatePokemonsCreated }}>
          <Main />
        </pokeContext.Provider >
      </BrowserRouter>
    </>
  )
}

export default App
