const api = {
  cardIndex: "/indexEN.json",
  cardJPIndex: "/indexJP.json",
  cardJson: (filename: string) => `/EN/${filename}`,
  jpCardJson: (filename: string) => `/JP/${filename}`
}

export default api
