import { FormEvent, ChangeEvent, useReducer, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState, AppDispatch } from "../../store"
import { signUp, signInWithGoogle, SignInCredentials } from "../../store/authSlice"
import { useNotification } from "../../hooks/useNotification"

interface FormState {
  email: string;
  password: string;
}

type FormActions = { type: "SET_EMAIL"; payload: string } | { type: "SET_PASSWORD"; payload: string }

const initialFormState: FormState = {
  email: "",
  password: "",
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

export const useSignUpForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState)
  const user = useSelector((state: RootState) => state.auth.user)
  const loading = useSelector((state: RootState) => state.auth.loading)
  const error = useSelector((state: RootState) => state.auth.error)
  const dispatchActionToRedux = useDispatch<AppDispatch>()
  const { notifySuccess, notifyError } = useNotification()

  useEffect(() => {
    if (user) {
      notifySuccess("Signed in successfully.")
    }
    else if (error?.includes("email-already-in-use")) {
      notifyError("Email already in use.")
    }
    else if (error?.includes("auth/weak-password")) {
      notifyError("Password should be at least 6 characters.")
    }
  }, [error, notifyError, notifySuccess, user])

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: event.target.value })
  }

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: event.target.value })
  }

  const credentials: SignInCredentials = {
    email: state.email,
    password: state.password
  }

  const signUpFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (state.email.length > 0 && state.password.length > 0) {
      dispatchActionToRedux(signUp(credentials))
      dispatch({ type: "SET_EMAIL", payload: "" })
      dispatch({ type: "SET_PASSWORD", payload: "" })
    }
  }

  const signUpWithPopHandler = () => {
    dispatchActionToRedux(signInWithGoogle())
  }

  return {
    email: state.email,
    password: state.password,
    loading,
    emailInUse: error?.includes("email-already-in-use"),
    weakPassword: error?.includes("auth/weak-password"),
    emailChangeHandler,
    passwordChangeHandler,
    signUpWithPopHandler,
    signUpFormHandler
  }
}
