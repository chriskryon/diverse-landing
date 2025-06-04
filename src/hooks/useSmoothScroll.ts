"use client"
import { useCallback, useEffect } from "react"

export function useSmoothScroll() {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      
      const targetId = href
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        // Adiciona um pequeno offset para compensar a altura do header fixo
        const headerOffset = 80 // Ajuste conforme a altura do seu header
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [])

  // Adiciona comportamento global de smooth scroll via CSS
  useEffect(() => {
    // Adiciona estilo ao elemento html para smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      // Remove o estilo ao desmontar o componente
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return { handleSmoothScroll }
}
