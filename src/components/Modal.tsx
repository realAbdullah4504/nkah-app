"use client"
import { X } from "lucide-react"
import { useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  className = "",
}: ModalProps) => {
  useEffect(() => {
    const getScrollbarWidth = () => {
      return window.innerWidth - document.documentElement.clientWidth
    }

    if (isOpen) {
      const scrollbarWidth = getScrollbarWidth()
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div
        className={`relative mx-auto overflow-hidden rounded-lg ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        {children}
      </div>

      <style jsx>{`
        div {
          animation: modalBackdropIn 0.3s ease-out forwards;
        }

        div > div {
          animation: modalZoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes modalBackdropIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        @keyframes modalZoomIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
