import Card from "@/interfaces/DB/Card"

export default interface Deck {
  en: Record<string, Partial<Card>[]>
  jp: Record<string, Partial<Card>[]>
}
