import GameCard from "@/components/GameCard/GameCard"
import { jpExtension, jpFileNames } from "@/constants/jp"
import useJPCards from "@/hooks/containers/Activite/JPCards/useJPCards"
import CloseIcon from "@mui/icons-material/Close"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Modal from "@mui/material/Modal"
import CardDetail from "../CardDetail/CardDetail"
import Filter from "../Home/Filter"

/**
 * Activité d'accueil du projet
 */
const JPCards = () => {
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
  } = useJPCards()

  return (
    <>
      Dans cette sections vous retrouverez toute les cartes Japonnaises répertorié <br />
      <Filter
        handleChangeExtension={handleChangeFileName}
        filename={filename}
        rarity={rarity}
        handleChangeRarity={handleChangeRarity}
        raritys={raritys}
        handleClearRarity={handleClearRarity}
        files={jpFileNames}
        extensions={jpExtension}
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
export default JPCards
