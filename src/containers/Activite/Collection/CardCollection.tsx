import ICard from "@/interfaces/DB/Card"
import { Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

const CardCollection = ({ card, isInCollection }: { card: Partial<ICard>; isInCollection: boolean }) => (
  <Grid item lg={1} md={3} sm={4}>
    <Card>
      <CardMedia
        component="img"
        width="100%"
        image={card.image}
        alt={card.name}
        style={{ filter: isInCollection ? "grayscale(0)" : "grayscale(1)" }}
      />
    </Card>
  </Grid>
)

export default CardCollection
