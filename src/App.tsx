import { RouterProvider } from "react-router-dom"

import { useRouter } from "./router"

export const App = () => {
  const { router } = useRouter()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
