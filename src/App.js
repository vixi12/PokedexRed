
import './App.css';
import PokemonFetch from "./components/pokemonFetch";
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import initialState from './redux/initialState';

function App() {

  console.log("APP")

  return (
    <div className="App">
      <Provider store={configureStore(initialState)}>
      <PokemonFetch/>
      </Provider>

    </div>
  );
}

export default App;
