import useAppContext from "@/hooks/context/useAppContext"
import Card from "@/interfaces/DB/Card"
import ResponseError from "@/interfaces/services/ResponseError"
import CardService from "@/services/CardsService"
import { Accordion, AccordionDetails, AccordionSummary, Chip, Grid, Stack, Typography } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useCallback, useEffect, useMemo, useState } from "react"
import CardCollection from "./CardCollection"

const Collection = () => {
  const { decks } = useAppContext()

  const collectionsEN = useMemo(
    () => Object.entries(decks.collection.en ?? {}).filter(([, cards]) => cards.length > 0),
    [decks]
  )
  const collectionsJP = useMemo(
    () => Object.entries(decks.collection.jp ?? {}).filter(([, cards]) => cards.length > 0),
    [decks]
  )

  const [enCollection, setEnCollection] = useState<Record<string, Card[]>>({})

  const [jpCollection, setJpCollection] = useState<Record<string, Card[]>>({})

  const reducerRarity = (acc: Record<string, number>, curr: Card) => {
    if (acc[curr.rarity] === undefined) acc[curr.rarity] = 0
    acc[curr.rarity] += 1
    return acc
  }

  const collectionsEnStats = useMemo(
    () =>
      Object.fromEntries(
        collectionsEN.map(([code, cards]) => [
          code,
          cards
            .map(a => enCollection[code]?.find(c => c.code === a.code))
            .filter(a => a !== undefined)
            .reduce(reducerRarity, {})
        ])
      ),
    [collectionsEN]
  )

  const collectionsJpStats = useMemo(
    () =>
      Object.fromEntries(
        collectionsEN.map(([code, cards]) => [
          code,
          cards
            .map(a => jpCollection[code]?.find(c => c.code === a.code))
            .filter(a => a !== undefined)
            .reduce(reducerRarity, {})
        ])
      ),
    [jpCollection]
  )

  const enCollectionStats = useMemo(
    () =>
      Object.fromEntries(Object.entries(enCollection).map(([code, cards]) => [code, cards.reduce(reducerRarity, {})])),
    [enCollection]
  )

  const jpCollectionStats = useMemo(
    () =>
      Object.fromEntries(Object.entries(jpCollection).map(([code, cards]) => [code, cards.reduce(reducerRarity, {})])),
    [enCollection]
  )

  console.log("🚀 ~ Collection ~ enCollectionStats:", enCollectionStats)

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
    collectionsEN.forEach(([filename]) => getCards(filename))
    collectionsJP.forEach(([filename]) => getCardsJP(filename))
  }, [collectionsEN, collectionsJP])

  const isInCollectionEN = useCallback(
    (code: string, card: Card) => decks.collection.en[code].some(collCard => collCard.code === card.code),
    [decks]
  )

  const isInCollectionJP = useCallback(
    (code: string, card: Card) => decks.collection.jp[code].some(collCard => collCard.code === card.code),
    [decks]
  )

  const rarityOrder: Record<string, number> = {
    C: 1,
    U: 2,
    R: 3,
    CR: 3,
    RR: 4,
    "RR+": 5,
    RRR: 6,
    SR: 6,
    OFR: 7,
    SP: 8,
    SSP: 9,
    SEC: 10,
    PR: 10,
    TD: 11
  }
  const raritySorter = (a: string, b: string) => rarityOrder[a] - rarityOrder[b]

  return (
    <>
      {collectionsEN.length > 0 && (
        <>
          <Typography>English Edition</Typography>
          {Object.entries(enCollection)
            .sort(([, cardsA], [, cardB]) => cardsA[0].expansion.localeCompare(cardB[0].expansion))
            .map(([code, cards]) => (
              <Accordion>
                <AccordionSummary>
                  <Typography>{cards?.[0]?.expansion}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack direction="row" spacing={1}>
                    {Object.entries(enCollectionStats[code])
                      .sort((a, b) => raritySorter(a[0], b[0]))
                      .map(([rarity, number]) => (
                        <Chip label={`${rarity} : ${collectionsEnStats[code]?.[rarity] ?? 0}/${number}`} />
                      ))}
                  </Stack>
                  <Grid container justifyContent="center" spacing={1}>
                    {cards.map(a => (
                      <CardCollection card={a} isInCollection={isInCollectionEN(code, a)} />
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
        </>
      )}
      {collectionsJP.length > 0 && (
        <>
          <Typography>JP Edition</Typography>
          {Object.entries(jpCollection)
            .sort(([, cardsA], [, cardB]) => cardsA[0].expansion.localeCompare(cardB[0].expansion))
            .map(([code, cards]) => (
              <Accordion>
                <AccordionSummary>
                  <Typography>{cards?.[0]?.expansion}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack direction="row" spacing={1}>
                    {Object.entries(jpCollectionStats[code])
                      .sort((a, b) => raritySorter(a[0], b[0]))
                      .map(([rarity, number]) => (
                        <Chip label={`${rarity} : ${collectionsJpStats[code]?.[rarity] ?? 0}/${number}`} />
                      ))}
                  </Stack>
                  <Grid container justifyContent="center" spacing={1}>
                    {cards.map(a => (
                      <CardCollection card={a} isInCollection={isInCollectionJP(code, a)} />
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
        </>
      )}
    </>
  )
}

export default Collection
