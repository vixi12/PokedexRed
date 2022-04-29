import { useContext } from "react";
import { PokemonContext } from "../pokemonContext"

const PokemonFetch = () => {
 const { pokemonApiCall } = useContext(PokemonContext);
  
  


//   const handleFetch = async () => {
//     const response = await fetchHeroes(inputState);
//     if (!response.data.count) {
 
//     } else {
//       const responseComics = await fetchComics(response.data.results[0].id);

//       if (!responseComics.data.count) {

//       }

//       setMarvelHeroeData(response);

//       setMarvelComicData(responseComics);
//     }
//   };

  return (
    <div className="fetchComp">
   
    </div>
  );
};

export default PokemonFetch;
