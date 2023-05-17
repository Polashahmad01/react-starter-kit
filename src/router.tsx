import { createBrowserRouter } from "react-router-dom"

import { MainAppLayout } from "./layout/MainAppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { HomePage } from "./pages/HomePage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"
import { ResetPasswordPage } from "./pages/ResetPasswordPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainAppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
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
