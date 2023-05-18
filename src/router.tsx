import { createBrowserRouter, redirect } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "./store"
import { MainAppLayout } from "./layout/MainAppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { HomePage } from "./pages/HomePage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"
import { ResetPasswordPage } from "./pages/ResetPasswordPage"

export const useRouter = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainAppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: async () => {
            if(!user) {
              throw redirect("/signin")
            }
            return null
          }
        },
        {
          path: "signin",
          element: <SignInPage />
        },
        {
          path: "signup",
          element: <SignUpPage />
        },
        {
          path: "reset-password",
          element: <ResetPasswordPage />
        }
      ]
    }
  ])
  
  return {
    router
  }
}
