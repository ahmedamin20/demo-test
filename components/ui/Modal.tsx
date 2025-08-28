"use client"

import type React from "react"

import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, setIsOpen, children, className }: ModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50  overflow-y-scroll flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-700/10 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-10 w-full max-w-xl mx-4 p-8 rounded-lg",
          "bg-slate-700/90 text-white",
          "animate-in fade-in-0 zoom-in-95 duration-200",
          className,
        )}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {children}
      </div>
    </div>
  )
}
