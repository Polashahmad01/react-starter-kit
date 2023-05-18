import { Link } from "react-router-dom"

import { useSignUpForm } from "./hooks/useSignUpForm"

export const SignUpForm = () => {
  const { email, password, loading, emailInUse, weakPassword, emailChangeHandler, passwordChangeHandler, signUpFormHandler, signUpWithPopHandler } = useSignUpForm()

  return (
    <div className="bg-slate-300 text-slate-800 px-6 py-4 rounded-lg shadow-xl sm:px-6 sm:py-8">
      <form onSubmit={signUpFormHandler}>
        <h1 className="font-medium text-xl mb-2 sm:text-3xl sm:mb-4">Company Name or Logo</h1>
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base">Welcome</p>
          <h2 className="text-xl font-medium sm:text-2xl">Sign Up a new account</h2>
        </div>
        <div className="flex flex-col mb-2 sm:mb-4">
          <label className="mb-1 text-sm sm:text-base" htmlFor="email">Email</label>
          <input
            className="px-2 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-black sm:px-3 sm:py-3"
            type="email"
            placeholder="john.doe@gmail.com"
            onChange={emailChangeHandler}
            value={email}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-sm sm:text-base" htmlFor="password">Password</label>
          <input
            className="px-2 py-2 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-black sm:px-3 sm:py-3"
            type="password"
            placeholder="password"
            onChange={passwordChangeHandler}
            value={password}
            required
          />
        </div>
        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-black text-white px-2 py-2 w-full rounded-md transition-all hover:bg-gray-800 sm:px-3 sm:py-3"
            disabled={loading}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center mb-2 sm:mb-4">
        <p>OR</p>
      </div>
      <div className="flex items-center justify-center mb-2 sm:mb-4">
        <button
          className="px-2 py-2 w-full rounded-md ring-1 ring-black cursor-pointer flex justify-center items-center gap-1 sm:px-3 sm:py-3"
          onClick={signUpWithPopHandler}
        >
        <span>Sign Up with</span>
        <span className="mt-1">
          <svg data-v-4b9d7e47="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="65" height="18px">
            <path data-v-4b9d7e47="" fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"></path> 
            <path data-v-4b9d7e47="" fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"></path> 
            <path data-v-4b9d7e47="" fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"></path> 
            <path data-v-4b9d7e47="" fill="#34A853" d="M225 3v65h-9.5V3h9.5z"></path> <path data-v-4b9d7e47="" fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"></path> 
            <path data-v-4b9d7e47="" fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"></path>
          </svg>
        </span>
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mb-4">
        <p className="text-sm">Already have an account?</p>
        <Link className="text-sm text-black hover:underline" to="/signin">Sign In</Link>
      </div>
      <div>
        {emailInUse && <p className="mt-1 text-sm text-red-600 text-center">email already in use</p>}
        { weakPassword && <p className="mt-1 text-sm text-red-600 text-center">Password should be at least 6 characters.</p>}
      </div>
    </div>
  )
}
