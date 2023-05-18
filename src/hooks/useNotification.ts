import { toast } from "react-toastify"

const DEFAULT_DURATION = 5000

type NotificationType = "default" | "error" | "info" | "success" | "warning"

const notifyDefault = (message: string, duration = DEFAULT_DURATION) => notify("default", message, duration)
const notifyError = (messsage: string, duration = DEFAULT_DURATION) => notify("error", messsage, duration)
const notifyInfo = (message: string, duration = DEFAULT_DURATION) => notify("info", message, duration)
const notifySuccess = (message: string, duration = DEFAULT_DURATION) => notify("success", message, duration)
const notifyWarning = (message: string, duration = DEFAULT_DURATION) => notify("warning", message, duration)

const notify = (type: NotificationType, message: string, duration: number) => {
  const method = type === "default" ? toast : toast[type]

  method(message, { autoClose: duration, position: "top-right" })
}

export const useNotification = () => {
  return {
    notifyDefault,
    notifyError,
    notifyInfo,
    notifySuccess,
    notifyWarning
  }
}
