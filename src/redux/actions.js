import * as actions from "./actiontypes";

// export function fetchPokemons(pokearray) {
//     return {
//         type: actions.FETCH,
//         payload: {
//             pokearray: ["MISCO", "MASCO", "MESCA"]
//         }
//     }
// }

export function fetchPokemonSuccess(pokearray) {
  return {
    type: actions.FETCH,
    payload: pokearray,
  };
}

export function fetchPokemons() {
  return async (dispatch) => {
    try {
      let pokemons = [];
      for (let i = 1; i < 152; i++) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemons.push(await pokemon.json());
      }
      // console.log(pokemons);
      dispatch(fetchPokemonSuccess(pokemons));
    } catch (error) {
      console.log("xd");
      // dispatch(loadPokemonsError('No se han podido cargar los pokemons'));
    }
  };
}
