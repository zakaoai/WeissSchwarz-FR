import useAppContext from "@/hooks/context/useAppContext"
import Card from "@/interfaces/DB/Card"
import { useCallback, useState } from "react"

const useDeck = () => {
  const { deck, setDeck } = useAppContext()

  const [card, setCard] = useState<Card | undefined>(undefined)
  const handleModalClose = useCallback(() => {
    setCard(undefined)
  }, [setCard])

  const onClickCard = useCallback(
    (card: Card) => {
      setCard(card)
    },
    [setCard]
  )

  return { deck, card, handleModalClose, onClickCard }
}

export default useDeck
