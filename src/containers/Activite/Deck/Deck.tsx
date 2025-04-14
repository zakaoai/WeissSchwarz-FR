import GameCard from "@/components/GameCard/GameCard"
import useDeck from "@/hooks/containers/Activite/Deck/useDeck"
import Card from "@/interfaces/DB/Card"
import CloseIcon from "@mui/icons-material/Close"
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Modal from "@mui/material/Modal"
import CardDetail from "../CardDetail/CardDetail"

const Deck = () => {
  const { deck, card, handleModalClose, onClickCard, onAdd, isAdded, deckList, currentDeck, handleChangeDeckList } =
    useDeck()

  return (
    <>
      Pour Ajouter des cartes à votre deck il suffit d&apos;appuyer sur l&apos;icone + en haut d&apos;une carte depuis
      l&apos;accueil <br />
      <FormControl fullWidth sx={{ marginY: 2 }}>
        <InputLabel id="deck-label">Selectionner votre deck</InputLabel>
        <Select labelId="deck-label" value={currentDeck} label="Deck" onChange={handleChangeDeckList}>
          {deckList
            .toSorted((a, b) => a.localeCompare(b))
            .map(a => (
              <MenuItem key={a} value={a}>
                {a}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Grid container justifyContent="center" spacing={1}>
        {Object.entries(deck)
          .toSorted(([a], [b]) => a.localeCompare(b))
          .map(([key, card]) => (
            <GameCard
              key={key}
              card={card as Card}
              onClick={onClickCard}
              onAdd={onAdd(card.setKey, card.country as "en" | "jp")}
              isAdded={isAdded(card.setKey, card.country as "en" | "jp", card as Card)}
            />
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
