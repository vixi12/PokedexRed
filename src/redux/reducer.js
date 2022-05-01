import * as actions from "./actiontypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.FETCH:
      return {
        ...state,
        pokemonList: action.payload,
      };
    default:
      return state;
  }
}
