import { useState } from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../store"

export const useAppNavbar = () => {
  const [isShowMobileDropDownMenu, setIsShowMobileDropDownMenu] = useState<boolean>(false)
  const user = useSelector((state: RootState) => state.auth.user)

  const mobileMenuHandlerClick = () => {
    setIsShowMobileDropDownMenu(!isShowMobileDropDownMenu)
  }

  return {
    user,
    isShowMobileDropDownMenu,
    onMobileMenuHandlerClick: mobileMenuHandlerClick,
  }
}
