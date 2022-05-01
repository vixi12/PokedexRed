import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PokemonCard = ({ name }) => {
  return (
    <div className="pokemon-card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <p>{name}</p>
          </Typography> 
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonCard;
