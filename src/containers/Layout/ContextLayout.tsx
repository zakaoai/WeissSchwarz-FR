import AppProvider from "@/context/AppProvider"

import QueryClientProvider from "@/context/QueryClientProvider"

import { Outlet } from "react-router-dom"

const ContextLayout = () => (
  <QueryClientProvider>
    <AppProvider>
      <Outlet />
    </AppProvider>
  </QueryClientProvider>
)

export default ContextLayout
