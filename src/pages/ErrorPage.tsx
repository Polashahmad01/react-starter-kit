import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error: any = useRouteError()

  console.log(error)

  return (
    <div>
      <h1 className="text-3xl">Opps!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
