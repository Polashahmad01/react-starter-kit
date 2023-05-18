import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { AppNavbar } from "../components/AppNavbar"
import { AppFooter } from "../components/AppFooter"
import "react-toastify/dist/ReactToastify.css"

export const MainAppLayout = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <AppNavbar />
      <main className="container mx-auto px-4">
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
      <footer className="bg-slate-300">
        <div className="container mx-auto px-4">
          <AppFooter />
        </div>
      </footer>
    </div>
  )
}
