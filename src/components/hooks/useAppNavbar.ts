import { useState } from "react"

export const useAppNavbar = () => {
  const [isShowMobileDropDownMenu, setIsShowMobileDropDownMenu] = useState<boolean>(false)

  const mobileMenuHandlerClick = () => {
    setIsShowMobileDropDownMenu(!isShowMobileDropDownMenu)
  }

  return {
    isShowMobileDropDownMenu,
    onMobileMenuHandlerClick: mobileMenuHandlerClick,
  }
}
