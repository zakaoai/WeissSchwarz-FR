import GameCard from "@/components/GameCard/GameCard"
import useDeck from "@/hooks/containers/Activite/Deck/useDeck"
import CloseIcon from "@mui/icons-material/Close"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Modal from "@mui/material/Modal"
import CardDetail from "../CardDetail/CardDetail"

const Deck = () => {
  const { deck, card, handleModalClose, onClickCard } = useDeck()

  return (
    <>
      Pour Ajouter des cartes à votre deck il suffit d&apos;appuyer sur l&apos;icone + en haut d&apos;une carte depuis
      l&apos;accueil <br />
      <Grid container justifyContent="center" spacing={1}>
        {Object.entries(deck)
          .toSorted(([a], [b]) => a.localeCompare(b))
          .map(([key, card]) => (
            <GameCard key={key} card={card} onClick={onClickCard} />
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

export default Deck
