import PokemonCard from "./pokemonCard";
import { useState, useEffect } from "react";
import { fetchPokemons } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const PokemonFetch = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state);


  // useEffect(() => {
  //   if (!reducer.pokemonList?.length) {
  //     dispatch(fetchPokemons());
  //     console.log("ESESTO", reducer.pokemonList);
  //   }
  // }, [reducer.pokemonList]);
  console.log("asds")

  return (
    <div className="fetchPokemon">
      {reducer.pokemonList ? (
        reducer.pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} name={pokemon.name} />
        ))
      ) : (
        <p>xD</p>
      )}
    </div>
  );
};

export default PokemonFetch;
