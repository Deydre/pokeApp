import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../Details/DetailCard/DetailCard";
import { ColorRing } from 'react-loader-spinner';
import axios from "axios";

const Details = () => {
  const routeParams = useParams();
  const [pokemonData, setPokemonData] = useState([])
  const renderParamsCard = () => {
    return <DetailCard data={pokemonData}/>;
  }

  // FETCH DEL PARAM
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${routeParams.id}`);
        setPokemonData(resp.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPokemon();
  }, []);


  return <section>{pokemonData.length != 0 ? renderParamsCard() : <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />}</section>;
};

export default Details;
