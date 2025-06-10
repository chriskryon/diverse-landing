"use client"
import { useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

// Custom hook to detect when element is in viewport
export function useElementInView(threshold = 0.1) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return { ref, controls, inView }
}