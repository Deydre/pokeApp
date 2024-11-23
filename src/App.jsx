import { useState } from 'react'
import Main from './components/Main'
import { pokeContext } from './context/pokeContext'

// El padre crea un contexto y actúa como el proveedor de datos.
// Los hijos consumen ese contexto para acceder o modificar los datos compartidos.
// Un hijo actualiza el estado global (en el contexto), y el otro responde a esos cambios.

function App() {

  // Dudas porque aquí o es 1 o es otra
  const [pokemon, setPokemon] = useState({
    nombre: ""
  })

  const updatePokemon = (newUser) => {
    const { nombre } = newUser;
    setPokemon({
      nombre: nombre
    })
  };

  // Creamos un contexto en el padre para que sea el PROVEEDOR
  const pokeData = {
    pokemon, // Objeto
    updatePokemon, // Función
  }

  return (
    <>
      <pokeContext.Provider value={{ pokeData }}>
        <Main />
      </pokeContext.Provider >
    </>
  )
}

export default App
