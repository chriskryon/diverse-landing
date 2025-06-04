"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import CardGradient from "../../public/cards/gradientCard.png"
import CardZebra from "../../public/cards/zebraCard.png"
import NoiseOverlay from "./NoiseOverlay"

interface HeroProps {
  openModal: () => void
}

export default function Hero({ openModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const [isMounted, setIsMounted] = useState(false)
  
  // Parallax effects based on scroll
  const titleY = useTransform(scrollY, [0, 500], [0, 100])
  const buttonOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const buttonScale = useTransform(scrollY, [0, 300], [1, 0.8])
  
  // For cards' parallax movement - updated for diagonal movement
  const card1Y = useTransform(scrollY, [0, 500], [0, 200])
  const card1X = useTransform(scrollY, [0, 500], [0, -150])
  const card1Rotate = useTransform(scrollY, [0, 500], [-45, -65])
  
  const card2Y = useTransform(scrollY, [0, 500], [0, 250])
  const card2X = useTransform(scrollY, [0, 500], [0, 200])
  const card2Rotate = useTransform(scrollY, [0, 500], [34, 65])
  
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6 sm:mb-8 max-w-4xl mx-auto break-words"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            } 
          }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Diversidade é nosso <span className="font-bold">ativo</span>.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="font-bold">Seu crescimento</span>,
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            nosso objetivo.
          </motion.div>
        </motion.h1>

        <motion.button
          type="button"
          onClick={openModal}
          className="relative bg-gradient-to-r from-diverse-pink to-diverse-yellow text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg overflow-hidden"
          style={{ opacity: buttonOpacity, scale: buttonScale }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(249, 45, 158, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              delay: 1.4,
              ease: "easeOut"
            }
          }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-diverse-yellow to-diverse-pink opacity-0 transition-opacity"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <motion.span className="relative z-10">
            Explore
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Credit Cards - Positioned like in reference image */}
      <div className="absolute inset-0 pointer-events-none w-full">
        {/* Card 1 */}
        <motion.div 
          className="absolute bottom-16 left-4 sm:left-8 lg:left-24 scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-top-left"
          style={{ 
            y: card1Y,
            x: card1X,
            rotate: card1Rotate 
          }}
          initial={{ opacity: 0, x: -100, rotate: -60 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotate: -45,
            transition: {
              opacity: { duration: 1, delay: 0.5 },
              x: { duration: 1, delay: 0.5, type: "spring" },
              rotate: { duration: 1, delay: 0.5 },
            }
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: -30,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              filter: [
                "drop-shadow(0px 0px 10px rgba(249,45,158,0.3))",
                "drop-shadow(0px 0px 30px rgba(249,45,158,0.7))",
                "drop-shadow(0px 0px 10px rgba(249,45,158,0.3))"
              ]
            }}
            transition={{
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror"
              },
              filter: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="relative"
          >
            <Image
              src={CardGradient}
              alt="Credit Card Gradient"
              width={200}
              height={200}
              className="transform rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-0 sm:right-16 lg:right-32 scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-bottom-right"
          style={{ 
            y: card2Y,
            x: card2X,
            rotate: card2Rotate
          }}
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotate: 34,
            transition: {
              opacity: { duration: 1, delay: 0.8 },
              x: { duration: 1, delay: 0.8, type: "spring" },
              rotate: { duration: 1, delay: 0.8 },
            }
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 40,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              filter: [
                "drop-shadow(0px 0px 10px rgba(249,200,99,0.3))",
                "drop-shadow(0px 0px 30px rgba(249,200,99,0.7))",
                "drop-shadow(0px 0px 10px rgba(249,200,99,0.3))"
              ]
            }}
            transition={{
              y: {
                duration: 7,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror"
              },
              filter: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="relative"
          >
            <Image
              src={CardZebra}
              alt="Credit Card Zebra"
              width={200}
              height={200}
              className="transform rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient border */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
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
