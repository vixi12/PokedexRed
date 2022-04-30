import { useContext, useState } from "react";
//import { connect } from "react-redux";
import { PokemonContext } from "../pokemonContext";
import { fetchPokemons } from "../redux/actions";
import store from "../redux/store";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PokemonFetch = () => {
  const { pokemonApiCall } = useContext(PokemonContext);

  const [inputState, setInputState] = useState("");
  const [showCardsState, setshowCardsState] = useState(false);

  const handleFetch = async () => {
    setshowCardsState(!showCardsState);
    console.log(showCardsState);
    for (let i = 1; i < 152; i++) {
      const response = await pokemonApiCall(i);
      store.dispatch(fetchPokemons(response));
    }
    console.log(store.getState());
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="fetchPokemon">
      {/* <input onChange={(event) => {
            setInputState(event.target.value);
          }}></input> */}
      <button onClick={handleFetch}>asdds</button>

      {showCardsState ? (

     //   store.map(pokemon => 
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <p>asd</p>
            </Typography>
          </CardContent>
        </Card>
    //  )
      
      ) : (
        <p>RES</p>
      )}
    </div>
  );
};

export default PokemonFetch;
