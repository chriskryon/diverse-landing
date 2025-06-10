"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import LogoDiverse from "./logos/Logo"
import LogoDiverseNoText from "./logos/LogoNoText"
import { useSmoothScroll } from "../hooks/useSmoothScroll"

interface NavigationProps {
  openModal: () => void
}

export default function Navigation({ openModal }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { handleSmoothScroll } = useSmoothScroll()
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  // Navigation links object
  const navigationLinks = [
    { name: "INÍCIO", href: "#hero" },
    { name: "BENEFÍCIOS", href: "#benefits" },
    { name: "CONTA DIGITAL", href: "#financial-control" },
    { name: "DESENVOLVEDORES", href: "#api-section" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Desktop Navigation with logo left-aligned */}
        <div className="flex items-center justify-between">
          {/* Logo - aligned to left at the start */}
          <div className="flex-none">
            <div className="hidden md:block transition-transform hover:scale-105 duration-200">
              <LogoDiverse height={32} />
            </div>
            <div className="block md:hidden transition-transform hover:scale-105 duration-200">
              <LogoDiverseNoText height={32} />
            </div>
          </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-4 self-end">
              {navigationLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm lg:text-base text-white/80 hover:text-diverse-pink transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/5 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-diverse-pink transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                </a>
              ))}
            </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={openModal}
              className="bg-diverse-yellow text-black px-5 lg:px-7 py-2.5 rounded-full font-semibold transition-all duration-300 hover:bg-diverse-yellow/90 hover:scale-105 text-sm lg:text-base shadow-lg hover:shadow-diverse-yellow/20"
            >
              ENTRAR NA LISTA DE ESPERA
            </button>
          </div>

          {/* Mobile menu controls */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              type="button"
              onClick={openModal}
              className="bg-diverse-yellow text-black px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-diverse-yellow/90 text-xs hover:scale-105">
              CADASTRAR
            </button>
            <button 
              type="button"
              className="text-white p-2 rounded-full bg-diverse-yellow transition-all duration-300 hover:bg-diverse-yellow/90 hover:scale-105"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-black transition-transform duration-200" />
              ) : (
                <Menu className="h-5 w-5 text-black transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800/50 backdrop-blur-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigationLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block py-3 px-4 text-sm text-white/80 hover:text-diverse-pink hover:bg-white/5 transition-all duration-300 font-medium rounded-xl"
                onClick={(e) => {
                  handleSmoothScroll(e, link.href);
                  toggleMobileMenu();
                }}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
