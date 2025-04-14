import GameCard from "@/components/GameCard/GameCard"
import dbextension from "@/constants/dbextension"
import dbfiles from "@/constants/dbfiles"
import useHomeActivity from "@/hooks/containers/Activite/Home/useHomeActivity"
import CloseIcon from "@mui/icons-material/Close"
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
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
    handleClearRarity,
    cardIndex,
    isAdded,
    onAdd,
    deckList,
    currentDeck,
    handleChangeDeckList
  } = useHomeActivity()

  return (
    <>
      Bienvenue dans cette application de visualisation de carte WeissSchwarz en Français <br />
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
      <Filter
        handleChangeExtension={handleChangeFileName}
        filename={filename}
        rarity={rarity}
        handleChangeRarity={handleChangeRarity}
        raritys={raritys}
        handleClearRarity={handleClearRarity}
        files={dbfiles}
        extensions={dbextension}
        filesIndex={cardIndex}
      />
      <Grid container justifyContent="center" spacing={1}>
        {cards.map(card => (
          <GameCard key={card.code} card={card} onClick={onClickCard} isAdded={isAdded(card)} onAdd={onAdd} />
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
