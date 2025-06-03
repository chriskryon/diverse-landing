"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import LogoDiverse from "./logos/Logo"

interface NavigationProps {
  openModal: () => void
}

export default function Navigation({ openModal }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <LogoDiverse height={40}/>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              CREDIT
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              DEBIT
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              APP
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              API's
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={openModal}
              className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-4 lg:px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm lg:text-base">
              ENTRAR NA LISTA DE ESPERA
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={openModal}
              className="mr-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-3 py-1 rounded-full font-medium hover:opacity-90 transition-opacity text-xs">
              Lista de Espera
            </button>
            <button 
              type="button"
              className="text-white p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a href="#" className="block py-2 px-2 text-white hover:text-pink-500 transition-colors font-medium">
              CREDIT
            </a>
            <a href="#" className="block py-2 px-2 text-white hover:text-pink-500 transition-colors font-medium">
              DEBIT
            </a>
            <a href="#" className="block py-2 px-2 text-white hover:text-pink-500 transition-colors font-medium">
              APP
            </a>
            <a href="#" className="block py-2 px-2 text-white hover:text-pink-500 transition-colors font-medium">
              API's
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
