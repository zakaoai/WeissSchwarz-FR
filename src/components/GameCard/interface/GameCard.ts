import Card from "@/interfaces/DB/Card"

export default interface GameCard {
  card: Card
  onClick: (card: Card) => void
  onAdd: (card: Card) => void
  isAdded: boolean
}
