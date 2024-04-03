import dbextension from "@/constants/dbextension"
import dbfiles from "@/constants/dbfiles"
import ICard from "@/interfaces/DB/Card"
import CloseIcon from "@mui/icons-material/Close"
import { Grid } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import FormControl from "@mui/material/FormControl"
import IconButton from "@mui/material/IconButton"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Modal from "@mui/material/Modal"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useCallback, useEffect, useState } from "react"
import CardDetail from "../CardDetail/CardDetail"
/**
 * Activité d'accueil du projet
 */
const HomeActivity = () => {
  const [data, setData] = useState<ICard[]>(Array<ICard>(0))
  const [card, setCard] = useState<ICard | undefined>(undefined)

  const [filename, setFilename] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setFilename(event.target.value as string)
  }

  const handleClose = useCallback(() => {
    setCard(undefined)
  }, [setCard])

  const onClick = useCallback(
    (card: ICard) => {
      setCard(card)
    },
    [setCard]
  )

  useEffect(() => {
    if (filename !== "")
      fetch("/" + filename)
        .then(resp => resp.json())
        .then(data => setData(data as ICard[]))
  }, [filename, setData])

  return (
    <>
      Bienvenue dans cette application de visualisation de carte WeissSchwarz en Français <br />
      <FormControl fullWidth sx={{ marginY: 2 }}>
        <InputLabel id="filename-label">Selectionner l&apos;extension</InputLabel>
        <Select labelId="filename-label" value={filename} label="Filename" onChange={handleChange}>
          {dbfiles.map((filename, idx) => (
            <MenuItem key={filename} value={filename}>
              {dbextension[idx]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container justifyContent="center" spacing={1}>
        {data.map(card => (
          <Grid key={card.code} item lg={3} md={4} xs={12} sm={6}>
            <Card>
              <CardHeader title={card.name} subheader={card.code} />
              <CardMedia
                component="img"
                width="100%"
                image={card.image}
                alt={card.name}
                onClick={() => onClick(card)}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={card !== undefined} onClose={handleClose}>
        <Box>
          <Box sx={{ alignContent: "right" }}>
            <IconButton aria-label="close" size="small" onClick={handleClose}>
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
