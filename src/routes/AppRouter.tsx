import ContextLayout from "@/containers/Layout/ContextLayout"
import Layout from "@/containers/Layout/Layout"
import SiteMap from "@/routes/SiteMap"
import { Navigate, Route } from "react-router-dom"

import { lazy } from "react"

const HomeActivity = lazy(async () => await import("@/containers/Activite/Home/HomeActivity"))
const DeckActivity = lazy(async () => await import("@/containers/Activite/Deck/Deck"))
const RegleActivity = lazy(async () => await import("@/containers/Activite/Regle/Regle"))
const RemerciementActivity = lazy(async () => await import("@/containers/Activite/Remerciement/Remerciement"))

const AppRouter = () => (
  <Route element={<ContextLayout />}>
    <Route element={<Layout />}>
      <Route index path={SiteMap.ACCUEIL.path} element={<HomeActivity />} />
      <Route index path={SiteMap.DECK.path} element={<DeckActivity />} />
      <Route index path={SiteMap.REGLE.path} element={<RegleActivity />} />
      <Route index path={SiteMap.REMERCIEMENT.path} element={<RemerciementActivity />} />
    </Route>

    <Route path="*" element={<Navigate replace to={SiteMap.ACCUEIL.path} />} />
  </Route>
)

export default AppRouter
