import React, { createContext } from "react";

export const PokemonContext = createContext({});

const PokemonContextProvider = ({ children }) => {

    async function pokemonApiCall(pokeId) {
        try {
          const pokemonFetched = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
          );
          return pokemonFetched.json();
        } catch (e) {
          console.error(e);
        }
      }





  return (
    <PokemonContext.Provider
      value={{
          pokemonApiCall,
   
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;

