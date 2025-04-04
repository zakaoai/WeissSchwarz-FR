import Card from "@/interfaces/DB/Card"
import CardFileInfo from "@/interfaces/DB/CardFileInfo"
import api from "./api"
import { get } from "./request/request"

const CardService = {
  getCardIndex: async () => await get<CardFileInfo[]>(api.cardIndex),
  getCardJPIndex: async () => await get<CardFileInfo[]>(api.cardJPIndex),
  getCards: async (filename: string) => await get<Card[]>(api.cardJson(filename)),
  getJPCards: async (filename: string) => await get<Card[]>(api.jpCardJson(filename))
}

export default CardService
