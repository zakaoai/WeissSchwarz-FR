import { useLocalStorage } from "@/hooks/utils/useLocalStorage"
import Deck from "@/interfaces/containers/Deck/Deck"
import { useMemo, type PropsWithChildren } from "react"
import AppContext from "./AppContext"

const AppProvider = ({ children }: PropsWithChildren) => {
  const [decks, setDecks] = useLocalStorage<Record<string, Deck>>("decks", {})

  const contextValue = useMemo(() => ({ decks, setDecks }), [decks, setDecks])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider
