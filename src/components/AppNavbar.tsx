import { NavLink } from "react-router-dom"

import { useAppNavbar } from "./hooks/useAppNavbar"
import { MobileDropDownMenu } from "./MobileDropDownMenu"

export const AppNavbar = () => {
  const { isShowMobileDropDownMenu, onMobileMenuHandlerClick } = useAppNavbar()

  return (
    <header className="bg-slate-300 text-slate-800">
      <div className="px-4 md:container md:mx-auto md:px-4">
        <nav className="flex items-center justify-between py-4 sm:py-6">
          <NavLink
            to={"/"}
          >
            <h1 className=" font-bold transition-opacity hover:opacity-70">companyName</h1>
          </NavLink>
          <ul className="flex items-center justify-between">
            <div className="hidden md:flex md:items-center md:justify-between md:gap-8">
              <li>
                <NavLink
                  className="font-medium transition-opacity hover:opacity-70"
                  to={"/signin"}
                >
                  SignIn
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium transition-opacity hover:opacity-70"
                  to={"/signup"}
                >
                  SignUp
                </NavLink>
              </li>
            </div>
            <li className="md:hidden">
              <svg 
                data-v-5306269d="" 
                height="30" 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="bars" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                role="img" 
                className="svg-inline--fa fa-bars fa-w-14 cursor-pointer"
                onClick={onMobileMenuHandlerClick}
              >
                <path data-v-5306269d="" fill="#1E243E" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>              
            </li>
            <li className="md:hidden">
              {isShowMobileDropDownMenu && <MobileDropDownMenu />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}