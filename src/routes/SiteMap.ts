import ISiteMap from "@/interfaces/route/SiteMap"

const SiteMap: ISiteMap = {
  ACCUEIL: {
    path: "/app/home",
    label: "Accueil"
  },
  JPCARDS: {
    path: "/app/jp",
    label: "JP Cards"
  },
  DECK: {
    path: "/app/deck",
    label: "Deck"
  },
  COLLECTION: {
    path: "/app/collection",
    label: "Collection"
  },
  REGLE: {
    path: "/app/regle",
    label: "Règles"
  },
  REMERCIEMENT: {
    path: "/app/remerciement",
    label: "Remerciement"
  }
}

export default SiteMap
