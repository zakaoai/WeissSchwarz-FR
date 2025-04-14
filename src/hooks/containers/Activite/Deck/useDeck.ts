import useAppContext from "@/hooks/context/useAppContext"
import Card from "@/interfaces/DB/Card"
import ResponseError from "@/interfaces/services/ResponseError"
import CardService from "@/services/CardsService"
import { SelectChangeEvent } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useCallback, useEffect, useMemo, useState } from "react"

const useDeck = () => {
  const { decks, setDecks } = useAppContext()
  const [deckList, setdeckList] = useState(Object.keys(decks))
  const [currentDeck, setCurrentDeck] = useState(deckList[0])

  const deck = useMemo(
    () => ({
      en: Object.fromEntries(Object.entries(decks[currentDeck]?.en ?? {})?.filter(([, list]) => list.length > 0)),
      jp: Object.fromEntries(Object.entries(decks[currentDeck]?.jp ?? {})?.filter(([, list]) => list.length > 0))
    }),
    [decks, currentDeck]
  )

  const [enCollection, setEnCollection] = useState<Record<string, Card[]>>({})

  const [jpCollection, setJpCollection] = useState<Record<string, Card[]>>({})

  const getCardsCall = useCallback((cardsFilename: string) => CardService.getCards(cardsFilename), [])
  const onSuccessGetCards = useCallback(
    (cards: Card[], filename: string) => {
      setEnCollection(curr => ({ ...curr, [filename]: cards }))
    },
    [setEnCollection]
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

  const getCardsCallJP = useCallback((cardsFilename: string) => CardService.getJPCards(cardsFilename), [])
  const onSuccessGetCardsJP = useCallback(
    (cards: Card[], filename: string) => {
      setJpCollection(curr => ({ ...curr, [filename]: cards }))
      console.log(enCollection)
    },
    [setJpCollection]
  )
  const onErrorGetCardsJP = useCallback((error: ResponseError, filename: string) => {
    console.error(
      "Une erreur est survenue lors de la lecture du fichier %s avec le status %s",
      filename,
      error?.response?.status
    )
  }, [])

  const { mutate: getCardsJP } = useMutation<Card[], ResponseError, string>({
    mutationFn: getCardsCallJP,
    onSuccess: onSuccessGetCardsJP,
    onError: onErrorGetCardsJP
  })

  useEffect(() => {
    Object.keys(deck.en).forEach(a => getCards(a))
    Object.keys(deck.jp).forEach(a => getCardsJP(a))
  }, [currentDeck])

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

  const deckCard = useMemo(
    () =>
      Object.entries(deck.en)
        .flatMap(([key, values]) =>
          values.map(card => ({ ...enCollection[key]?.find(en => en.code === card.code), country: "en", setKey: key }))
        )
        .concat(
          Object.entries(deck.jp).flatMap(([key, values]) =>
            values.map(card => ({
              ...jpCollection[key]?.find(jp => jp.code === card.code),
              country: "jp",
              setKey: key
            }))
          )
        )
        .filter(a => a !== undefined),
    [deck, enCollection, jpCollection]
  )

  const isAdded = useCallback(
    (setKey: string, country: "en" | "jp", card: Card) =>
      decks[currentDeck]?.[country]?.[setKey]?.some(a => a.code === card.code),
    [decks, currentDeck]
  )

  const onAdd = useCallback(
    (setKey: string, country: "en" | "jp") => (card: Card) => {
      if (isAdded(setKey, country, card)) {
        setDecks(curr => ({
          ...curr,
          [currentDeck]: {
            ...curr[currentDeck],
            [country]: {
              ...curr[currentDeck]?.[country],
              [setKey]: curr[currentDeck]?.[country]?.[setKey]?.filter(a => a.code !== card.code)
            }
          }
        }))
      } else {
        setDecks(curr => ({
          ...curr,
          [currentDeck]: {
            ...curr[currentDeck],
            [country]: {
              ...curr[currentDeck]?.[country],
              [setKey]: [...(curr[currentDeck]?.[country]?.[setKey] ?? []), { code: card.code }]
            }
          }
        }))
      }
    },
    [setDecks, currentDeck]
  )

  const handleChangeDeckList = useCallback(
    (event: SelectChangeEvent) => {
      setCurrentDeck(event.target.value)
    },
    [setCurrentDeck]
  )

  return {
    deck: deckCard,
    card,
    handleModalClose,
    onClickCard,
    onAdd,
    isAdded,
    deckList,
    currentDeck,
    handleChangeDeckList
  }
}

export default useDeck
