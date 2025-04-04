import IFilter from "@/interfaces/containers/Activite/Home/Filter"
import ClearIcon from "@mui/icons-material/Clear"
import { IconButton } from "@mui/material"
import Box from "@mui/material/Box"
import Checkbox from "@mui/material/Checkbox"
import Chip from "@mui/material/Chip"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import ListItemText from "@mui/material/ListItemText"
import MenuItem from "@mui/material/MenuItem"
import OutlinedInput from "@mui/material/OutlinedInput"
import Select from "@mui/material/Select"

const Filter = ({
  handleChangeExtension,
  filename,
  handleChangeRarity,
  rarity,
  raritys,
  handleClearRarity,
  filesIndex
}: IFilter) => {
  return (
    <>
      <FormControl fullWidth sx={{ marginY: 2 }}>
        <InputLabel id="filename-label">Selectionner l&apos;extension</InputLabel>
        <Select labelId="filename-label" value={filename} label="Filename" onChange={handleChangeExtension}>
          {(filesIndex ?? [])
            .map(({ file, name }) => ({ filename: file, extension: name }))
            .toSorted((a, b) => a.extension.localeCompare(b.extension))
            .map(({ filename, extension }) => (
              <MenuItem key={filename} value={filename}>
                {extension}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {raritys.size > 0 ? (
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="rarity-label">Rarity</InputLabel>
          <Select
            endAdornment={
              <IconButton size="small" onClick={handleClearRarity} sx={{ display: rarity.length > 0 ? "" : "none" }}>
                <ClearIcon />
              </IconButton>
            }
            sx={{ "& .MuiSelect-iconOutlined": { display: rarity.length > 0 ? "none" : "" } }}
            labelId="rarity-label"
            multiple
            value={rarity}
            onChange={handleChangeRarity}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected: string[]) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}>
            {Array.from(raritys)
              .toSorted()
              .map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={rarity.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      ) : undefined}
    </>
  )
}

export default Filter
