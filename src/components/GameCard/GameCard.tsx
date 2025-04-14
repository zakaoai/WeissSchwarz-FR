import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { Avatar, Grid, IconButton } from "@mui/material"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IGameCard from "./interface/GameCard"

const GameCard = ({ card, onClick, onAdd, isAdded }: IGameCard) => (
  <Grid item lg={3} md={4} xs={12} sm={6}>
    <Card>
      <CardHeader
        title={card.name}
        subheader={card.code}
        avatar={
          <Avatar sx={{ bgcolor: card.color }} aria-label="recipe">
            {card.rarity}
          </Avatar>
        }
        action={
          <IconButton aria-label="update deck" onClick={() => onAdd(card)}>
            {isAdded ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        }
      />
      <CardMedia component="img" width="100%" image={card.image} alt={card.name} onClick={() => onClick(card)} />
    </Card>
  </Grid>
)

export default GameCard
