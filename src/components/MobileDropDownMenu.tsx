import { NavLink } from "react-router-dom"

export const MobileDropDownMenu = () => {

  return (
    <div className="absolute z-50 top-20 right-3 bg-zinc-200 rounded-lg -mt-2 p-4 shadow-md after:content-[''] after:absolute after:w-5 after:h-5 after:bottom-full after:border-b-0 after:border-r-0 after:rotate-45 after:bg-zinc-200 after:right-2 after:-top-2">
      <div className="flex flex-col gap-2 w-40">
        <NavLink
          to={"/signin"}
        >
          SignIn
        </NavLink>
        <NavLink
          to={"/signup"}
        >
          SignUp
        </NavLink>
      </div>
    </div>
  )
}
