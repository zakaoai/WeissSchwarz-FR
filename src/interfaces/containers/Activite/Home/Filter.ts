import CardFileInfo from "@/interfaces/DB/CardFileInfo"
import { SelectChangeEvent } from "@mui/material"

export default interface Filter {
  handleChangeExtension: (event: SelectChangeEvent) => void
  filename: string
  handleChangeRarity: (event: SelectChangeEvent<string[]>) => void
  rarity: string[]
  raritys: Set<string>
  handleClearRarity: () => void
  files: string[]
  extensions: string[]
  filesIndex?: CardFileInfo[]
}
