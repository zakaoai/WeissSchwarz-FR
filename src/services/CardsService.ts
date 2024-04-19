import Card from "@/interfaces/DB/Card"
import api from "./api"
import { get } from "./request/request"

const CardService = {
  getCards: async (filename: string) => await get<Card[]>(api.cardJson(filename)),
  getJPCards: async (filename: string) => await get<Card[]>(api.jpCardJson(filename))
}

export default CardService
