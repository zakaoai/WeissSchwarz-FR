import Card from "@/interfaces/DB/Card"
import ResponseError from "@/interfaces/services/ResponseError"
import CardService from "@/services/CardsService"
import { SelectChangeEvent } from "@mui/material/Select"
import { useMutation } from "@tanstack/react-query"
import { useCallback, useMemo, useState } from "react"

const useHomeActivity = () => {
  const [cards, setCards] = useState<Card[]>(Array<Card>(0))
  const [card, setCard] = useState<Card | undefined>(undefined)
  const [rarity, setRarity] = useState<string[]>(Array<string>(0))

  const [filename, setFilename] = useState("")

  const handleModalClose = useCallback(() => {
    setCard(undefined)
  }, [setCard])

  const onClickCard = useCallback(
    (card: Card) => {
      setCard(card)
    },
    [setCard]
  )

  const getCardsCall = useCallback((cardsFilename: string) => CardService.getCards(cardsFilename), [])
  const onSuccessGetCards = useCallback(
    (cards: Card[]) => {
      setCards(cards)
    },
    [setCards]
  )
  const onErrorGetCards = useCallback((error: ResponseError, filename: string) => {
    console.error(
      "Une erreur est survenue lors de la lecture du fichier %s avec le status %s",
      filename,
      error?.response?.status
    )
  }, [])

  const { mutate: getCards } = useMutation<Card[], ResponseError, string>({
    mutationFn: getCardsCall,
    onSuccess: onSuccessGetCards,
    onError: onErrorGetCards
  })

  const handleChangeFileName = useCallback(
    (event: SelectChangeEvent) => {
      setFilename(event.target.value as string)
      getCards(event.target.value as string)
      setRarity(Array<string>(0))
    },
    [getCards]
  )

  const handleChangeRarity = useCallback(
    (event: SelectChangeEvent) => {
      const {
        target: { value }
      } = event
      setRarity(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      )
    },
    [setRarity]
  )

  const raritys = useMemo(() => new Set(cards.map(({ rarity }) => rarity)), [cards])

  const handleClearRarity = useCallback(() => {
    setRarity(Array<string>(0))
  }, [setRarity])

  const filteredCards = cards.filter(card => (rarity.length > 0 ? rarity.includes(card.rarity) : true))

  return {
    handleChangeFileName,
    filename,
    cards: filteredCards,
    onClickCard,
    card,
    handleModalClose,
    rarity,
    handleChangeRarity,
    raritys,
    handleClearRarity
  }
}

export default useHomeActivity
