import store from './redux/store';
import { fetchPokemons } from './redux/actions';
import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import PokemonContextProvider from "./pokemonContext";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PokemonContextProvider>
    <App />
    </PokemonContextProvider>
  </React.StrictMode>
);








