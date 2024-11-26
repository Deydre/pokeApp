import React from "react";
import Home from './Home/Home';
import NewPokemonForm from "./NewPokemonForm/NewPokemonForm";
import Details from "./Details/Details";
import { Route, Routes, Navigate } from 'react-router-dom'

const Main = () => {
  return <>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/new' element={ <NewPokemonForm/>} />
      <Route path='/pokemon/:id' element={<Details/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
  </>;
};

export default Main;
