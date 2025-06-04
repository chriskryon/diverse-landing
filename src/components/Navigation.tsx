"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import LogoDiverse from "./logos/Logo"
import LogoDiverseNoText from "./logos/LogoNoText"

interface NavigationProps {
  openModal: () => void
}

export default function Navigation({ openModal }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Desktop Navigation with logo left-aligned */}
        <div className="flex items-center justify-between">
          {/* Logo - aligned to left at the start */}
          <div className="flex-none">
            <div className="hidden md:block">
              <LogoDiverse height={32} />
            </div>
            <div className="block md:hidden">
              <LogoDiverseNoText height={32} />
            </div>
          </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 ml-4 self-end">
              <a href="#" className="text-sm lg:text-base text-white hover:text-pink-500 transition-colors font-medium">
              CREDIT
              </a>
              <a href="#" className="text-sm lg:text-base text-white hover:text-pink-500 transition-colors font-medium">
              DEBIT
              </a>
              <a href="#" className="text-sm lg:text-base text-white hover:text-pink-500 transition-colors font-medium">
              APP
              </a>
              <a href="#" className="text-sm lg:text-base text-white hover:text-pink-500 transition-colors font-medium">
              API's
              </a>
            </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={openModal}
              className="bg-diverse-yellow text-black px-4 lg:px-6 py-2 rounded-full font-medium transition-opacity duration-300 hover:opacity-80 text-sm lg:text-base"
            >
              ENTRAR NA LISTA DE ESPERA
            </button>
          </div>

          {/* Mobile menu controls */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={openModal}
              className="mr-4 bg-diverse-yellow text-black px-3 py-1 rounded-full font-medium transition-opacity duration-300 hover:opacity-80 text-xs">
              CADASTRAR
            </button>
            <button 
              type="button"
              className="text-white p-1 rounded-full bg-diverse-yellow"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-black" />
              ) : (
                <Menu className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#" className="block py-2 px-2 text-sm text-white hover:text-pink-500 transition-colors font-medium">
              CREDIT
            </a>
            <a href="#" className="block py-2 px-2 text-sm text-white hover:text-pink-500 transition-colors font-medium">
              DEBIT
            </a>
            <a href="#" className="block py-2 px-2 text-sm text-white hover:text-pink-500 transition-colors font-medium">
              APP
            </a>
            <a href="#" className="block py-2 px-2 text-sm text-white hover:text-pink-500 transition-colors font-medium">
              API's
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
