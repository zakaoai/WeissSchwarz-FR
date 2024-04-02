import { useMemo, type PropsWithChildren } from "react"
import AppContext from "./AppContext"

const AppProvider = ({ children }: PropsWithChildren) => {
  const contextValue = useMemo(() => ({}), [])

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider
