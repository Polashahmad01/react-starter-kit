import { useState, FormEvent, ChangeEvent } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState, AppDispatch } from "../../store"
import { signIn, signInWithGoogle, SignInCredentials } from "../../store/authSlice"

export const useSignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector((state: RootState) => state.auth.loading)
  const error = useSelector((state: RootState) => state.auth.error)

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const signInFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email.length !== 0 && password.length > 0) {
      const credentials: SignInCredentials = { email, password }
      dispatch(signIn(credentials))
    }
  }

  const googlePopupSignInHandler = () => {
    dispatch(signInWithGoogle())
  }

  console.log(error)

  return {
    email,
    password,
    loading,
    inValidEmail: error?.includes("(auth/user-not-found)"),
    inValidPassword: error?.includes("(auth/wrong-password)"),
    emailChangeHandler,
    passwordChangeHandler,
    signInFormHandler,
    googlePopupSignInHandler
  }
}
