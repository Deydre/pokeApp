import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main'
import { pokeContext } from './context/pokeContext'

// El padre crea un contexto y actúa como el proveedor de datos.
// Los hijos consumen ese contexto para acceder o modificar los datos compartidos.
// Un hijo actualiza el estado global (en el contexto), y el otro responde a esos cambios.

function App() {

  // Dudas porque aquí o es 1 o es otra
  const [pokemons, setPokemons] = useState([]);

  const updatePokemons = (newPokemon) => {
    setPokemons([...pokemons, newPokemon])
  };

  return (
    <>
    <Header/>
      <pokeContext.Provider value={{ pokemons, updatePokemons }}>
        <Main />
      </pokeContext.Provider >
    </>
  )
}

export default App
