"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import CardGradient from "../../public/cards/gradientCard.png"
import CardZebra from "../../public/cards/zebraCard.png"
import NoiseOverlay from "./NoiseOverlay"
import { useHeroAnimations } from "@/hooks/useHeroAnimations"

interface HeroProps {
  openModal: () => void
}

export default function Hero({ openModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  
  // Get all animation configurations from custom hook, including mobile detection
  const {
    isMobile,
    titleY,
    buttonOpacity,
    buttonScale,
    card1Animations,
    card2Animations,
    textAnimations,
    buttonAnimations,
    cardHoverAnimations,
    borderAnimations,
    mobileGlowAnimations
  } = useHeroAnimations()
  
  // Mounting animation
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center w-full max-w-[100vw]">
      {/* Hero Content */}
      <motion.div 
        className="text-center px-4 sm:px-6 pt-20 relative z-10 w-full"
        style={{ y: titleY }}
        initial={textAnimations.container.initial}
        animate={textAnimations.container.animate}
        transition={textAnimations.container.transition}
      >
        <motion.h1 
          className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-light leading-tight mb-6 sm:mb-8 max-w-4xl mx-auto break-words"
          initial={textAnimations.heading.initial}
          animate={textAnimations.heading.animate}
          transition={textAnimations.heading.transition}
        >
          <motion.div 
            initial={textAnimations.line1.initial}
            animate={textAnimations.line1.animate}
            transition={textAnimations.line1.transition}
          >
            Diversidade é nosso <span className="font-bold">ativo</span>.
          </motion.div>
          
          <motion.div 
            initial={textAnimations.line2.initial}
            animate={textAnimations.line2.animate}
            transition={textAnimations.line2.transition}
          >
            <span className="font-bold">Seu crescimento</span>,
          </motion.div>
          
          <motion.div 
            initial={textAnimations.line3.initial}
            animate={textAnimations.line3.animate}
            transition={textAnimations.line3.transition}
          >
            nosso objetivo.
          </motion.div>
        </motion.h1>

        <motion.button
          type="button"
          onClick={openModal}
          className="relative bg-gradient-to-l from-diverse-pink to-diverse-yellow text-black px-8 sm:px-12 py-4 sm:py-4 rounded-full font-medium text-lg sm:text-lg overflow-hidden z-20"
          style={{ opacity: buttonOpacity, scale: buttonScale }}
          whileHover={buttonAnimations.whileHover}
          whileTap={buttonAnimations.whileTap}
          initial={buttonAnimations.initial}
          animate={buttonAnimations.animate}
          transition={buttonAnimations.transition}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-l from-diverse-yellow to-diverse-pink opacity-0 transition-opacity"
            initial={buttonAnimations.gradient.initial}
            whileHover={buttonAnimations.gradient.whileHover}
          />
          <motion.span className="relative z-10">
            Explore
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Credit Cards - Responsive positioning handled by the hook */}
      <div className="absolute inset-0 pointer-events-none w-full">
        {/* Card 1 */}
        <motion.div 
          className={isMobile ? 
            "absolute top-24 left-4 scale-[0.65] origin-top-left" : 
            "absolute bottom-16 left-0 sm:left-4 lg:left-16 scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-top-left"
          }
          style={isMobile ? card1Animations.mobileStyle : card1Animations.style}
          initial={card1Animations.initial}
          animate={isMobile ? card1Animations.mobileAnimate : card1Animations.animate}
          whileHover={cardHoverAnimations.card1}
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror"
              }
            }}
            className="relative"
          >
            <Image
              src={CardGradient}
              alt="Credit Card Gradient"
              width={isMobile ? 230 : 200}
              height={isMobile ? 230 : 200}
              className="transform rounded-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className={isMobile ? 
            "absolute bottom-28 right-8 scale-[0.65] origin-bottom-right" : 
            "absolute bottom-10 sm:bottom-20 right-0 sm:right-16 lg:right-32 scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-bottom-right"
          }
          style={isMobile ? card2Animations.mobileStyle : card2Animations.style}
          initial={card2Animations.initial}
          animate={isMobile ? card2Animations.mobileAnimate : card2Animations.animate}
          whileHover={cardHoverAnimations.card2}
        >
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              y: {
                duration: 7,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror"
              }
            }}
            className="relative"
          >
            <Image
              src={CardZebra}
              alt="Credit Card Zebra"
              width={isMobile ? 230 : 200}
              height={isMobile ? 230 : 200}
              className="transform rounded-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile-only decorative elements */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-[60%] left-[50%] w-[180px] h-[180px] rounded-full bg-diverse-pink opacity-10 blur-[70px]"
            animate={mobileGlowAnimations.animate}
            transition={{
              ...mobileGlowAnimations.transition,
              repeatType: mobileGlowAnimations.transition?.repeatType as "loop" | "reverse" | "mirror" | undefined
            }}
          />
        </div>
      )}

      {/* Animated gradient border */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={borderAnimations.initial}
        animate={borderAnimations.animate}
        transition={borderAnimations.transition}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-diverse-pink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-diverse-yellow to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-diverse-pink to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-diverse-yellow to-transparent" />
      </motion.div>

      <NoiseOverlay opacity={0.42} />
    </section>
  )
}
