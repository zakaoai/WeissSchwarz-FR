import DeckCard from "@/interfaces/containers/Deck/DeckCard"

export default interface GameCard {
  card: DeckCard
  onClick: (card: DeckCard) => void
}
