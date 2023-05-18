import { FormEvent, ChangeEvent, useEffect, useReducer } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState, AppDispatch } from "../../store"
import { signIn, signInWithGoogle, SignInCredentials } from "../../store/authSlice"
import { useNotification } from "../../hooks/useNotification"

interface FormState {
  email: string;
  password: string;
}

type FormActions = { type: "SET_EMAIL"; payload: string } | { type: "SET_PASSWORD", payload: string }

const initialFormState: FormState = {
  email: "",
  password: ""
}

const formReducer = (state: FormState, action: FormActions) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload }

    case "SET_PASSWORD":
      return { ...state, password: action.payload }

    default:
      return initialFormState
  }
}

export const useSignInForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState)
  const dispatchActionToRedux = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.auth.user)
  const loading = useSelector((state: RootState) => state.auth.loading)
  const error = useSelector((state: RootState) => state.auth.error)
  const { notifySuccess, notifyError } = useNotification()
  const { email, password } = state

  useEffect(() => {
    if (user) {
      notifySuccess("Signed in successfully.")
    }
    else if (!user && error?.includes("(auth/user-not-found)")) {
      notifyError("Wrong email or user not found.")
    }
    else if (!user && error?.includes("(auth/wrong-password)")) {
      notifyError("Wrong password.")
    }
  }, [error, notifyError, notifySuccess, user])

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: event.target.value })
  }

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: event.target.value })
  }

  const signInFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email.length !== 0 && password.length > 0) {
      const credentials: SignInCredentials = { email, password }
      dispatchActionToRedux(signIn(credentials))
    }
  }

  const googlePopupSignInHandler = () => {
    dispatchActionToRedux(signInWithGoogle())
  }

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
