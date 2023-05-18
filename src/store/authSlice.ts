import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"

import { auth, provider } from "../utils/firebase"

export interface SignInCredentials {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk<User, SignInCredentials>("auth/signIn", async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
  return response.user as User
})

export const signUp = createAsyncThunk<User, SignInCredentials>("auth/signUp", async ({ email, password }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
  return response.user as User
})

export const signInWithGoogle = createAsyncThunk("auth/signInWithGoogle", async () => {
  const response = await signInWithPopup(auth, provider)
  return response.user as User
})

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Something went wrong..."
      })

    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signInWithGoogle.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Something went wrong..."
      })
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Something went wrong..."
      })
  }
})

export default authSlice.reducer
