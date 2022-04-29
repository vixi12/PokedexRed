import * as actions from './actiontypes'

// export function fetchPokemons(pokearray) {
//     return {
//         type: actions.FETCH,
//         payload: {
//             pokearray: ["MISCO", "MASCO", "MESCA"]
//         }
//     }
// }

export const fetchPokemons = pokearray => ({
    type: actions.FETCH,
    payload:{
        array : pokearray,
    }
})