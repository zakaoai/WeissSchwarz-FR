import { useLocalStorage } from "@/hooks/utils/useLocalStorage"
import Card from "@/interfaces/DB/Card"
import { useMemo, type PropsWithChildren } from "react"
import AppContext from "./AppContext"

const AppProvider = ({ children }: PropsWithChildren) => {
  const [deck, setDeck] = useLocalStorage<Record<string, Card>>("deck", {})

  const contextValue = useMemo(() => ({ deck, setDeck }), [deck, setDeck])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider
