import { Outlet } from "react-router-dom"

import { AppNavbar } from "../components/AppNavbar"
import { AppFooter } from "../components/AppFooter"

export const MainAppLayout = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <AppNavbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <footer className="bg-slate-300">
        <div className="container mx-auto px-4">
          <AppFooter />
        </div>
      </footer>
    </div>
  )
}
