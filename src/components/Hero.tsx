"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import CardGradient from "../../public/gradientCard.png"
import CardZebra from "../../public/zebraCard.png"

interface HeroProps {
  openModal: () => void
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center w-full max-w-[100vw]">
      {/* Hero Content */}
      <div className="text-center px-4 sm:px-6 pt-20 relative z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6 sm:mb-8 max-w-4xl mx-auto break-words">
          Diversidade é nosso <span className="font-bold">ativo</span>.<br />
          <span className="font-bold">Seu crescimento</span>,<br />
          nosso objetivo.
        </h1>

        <button
        type="button"
        onClick={openModal}
        className="bg-gradient-to-r from-diverse-pink to-diverse-yellow text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-colors
          hover:bg-gradient-to-r hover:from-diverse-yellow hover:to-diverse-pink">
          Explore
        </button>
      </div>

      {/* Credit Cards - Positioned like in reference image */}
      <div className="absolute inset-0 pointer-events-none w-full">
        {/* Card 1 */}
        <motion.div 
          className="absolute bottom-16 left-4 sm:left-8 lg:left-24 scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-top-left"
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -10, 0],
            transition: {
              duration: 6,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror"
            }
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src={CardGradient}
            alt="Credit Card Gradient"
            width={200}
            height={200}
            className="transform -rotate-45 shadow-2xl rounded-2xl"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-0 sm:right-16 lg:right-32 scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-bottom-right"
          initial={{ y: 0 }}
          animate={{ 
            y: [0, 10, 0],
            transition: {
              duration: 7,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror"
            }
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src={CardZebra}
            alt="Credit Card Zebra"
            width={200}
            height={200}
            className="transform rotate-[34deg] shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
