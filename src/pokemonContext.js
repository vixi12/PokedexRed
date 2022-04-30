import React, { createContext } from "react";


export const PokemonContext = createContext({});

const PokemonContextProvider = ({ children }) => {
  async function pokemonApiCall(id) {
  //  for (let i = 1; i < 152; i++) {
      try {
        const pokemonFetched = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        return pokemonFetched.json();
       
      } catch (e) {
        console.error(e);
      }
   // }
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
