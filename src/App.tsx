import { RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { useRouter } from "./router"
import { AppDispatch } from "./store"
import { currentUserChecker } from "./store/authSlice"

export const App = () => {
  const { router } = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(currentUserChecker())
  }, [dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
