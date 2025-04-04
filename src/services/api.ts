const api = {
  cardIndex: "/EN/index.json",
  cardJPIndex: "/JP/index.json",
  cardJson: (filename: string) => `/EN/${filename}`,
  jpCardJson: (filename: string) => `/JP/${filename}`
}

export default api
