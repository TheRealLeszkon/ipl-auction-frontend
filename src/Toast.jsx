
import { useEffect } from "react"

export default function Toast({ color, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000) // auto-close after 3 sec
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`toast-slide-in z-20 fixed top-4 right-4 bg-${color}-500 text-white px-4 py-2 rounded shadow-lg animate-slide-in`}>
      {message}
    </div >
  )
}
