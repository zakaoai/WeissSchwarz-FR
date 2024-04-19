import { Dispatch, SetStateAction } from "react"
import Card from "../DB/Card"

export default interface AppContext {
  deck: Record<string, Card>
  setDeck: Dispatch<SetStateAction<Record<string, Card>>>
}
