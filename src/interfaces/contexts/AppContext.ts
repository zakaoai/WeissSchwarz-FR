import { Dispatch, SetStateAction } from "react"
import Deck from "../containers/Deck/Deck"

export default interface AppContext {
  decks: Record<string, Deck>
  setDecks: Dispatch<SetStateAction<Record<string, Deck>>>
}
