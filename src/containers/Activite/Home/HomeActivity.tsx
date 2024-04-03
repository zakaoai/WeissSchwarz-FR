import GameCard from "@/components/GameCard/GameCard"
import useHomeActivity from "@/hooks/containers/Activite/Home/useHomeActivity"
import CloseIcon from "@mui/icons-material/Close"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Modal from "@mui/material/Modal"
import CardDetail from "../CardDetail/CardDetail"
import Filter from "./Filter"
/**
 * Activité d'accueil du projet
 */
const HomeActivity = () => {
  const {
    handleChangeFileName,
    filename,
    cards,
    onClickCard,
    card,
    handleModalClose,
    rarity,
    handleChangeRarity,
    raritys,
    handleClearRarity
  } = useHomeActivity()

  return (
    <>
      Bienvenue dans cette application de visualisation de carte WeissSchwarz en Français <br />
      <Filter
        handleChangeExtension={handleChangeFileName}
        filename={filename}
        rarity={rarity}
        handleChangeRarity={handleChangeRarity}
        raritys={raritys}
        handleClearRarity={handleClearRarity}
      />
      <Grid container justifyContent="center" spacing={1}>
        {cards.map(card => (
          <GameCard key={card.code} card={card} onClick={onClickCard} />
        ))}
      </Grid>
      <Modal open={card !== undefined} onClose={handleModalClose} sx={{ overflow: "scroll" }}>
        <Box sx={{ margin: "auto", width: "90%" }}>
          <Box sx={{ alignContent: "right" }}>
            <IconButton aria-label="close" size="small" onClick={handleModalClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Box>
          {card !== undefined ? <CardDetail card={card} /> : "Waiting"}
        </Box>
      </Modal>
    </>
  )
}
export default HomeActivity
