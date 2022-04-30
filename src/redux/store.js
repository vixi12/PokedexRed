import {createStore} from 'redux';
import reducer from './reducer';
import { fetchPokemons } from './actions';

const store = createStore(reducer);

// store.subscribe(()=> {
//     console.log("CAMBIA", store.getState());
// });

// store.dispatch(fetchPokemons("asdasdasd"))

export default store;
