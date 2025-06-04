"use client"
import { motion, } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import RendimentoPayLogo from "../logos/LogoRendimentoPay"
import AppOnIphone from "../../../public/images/app.png"
import { benefits, features } from "./data"
import { useElementInView } from "@/hooks/useElementInView"

export default function Benefits() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const titleAnimation = useElementInView(0.1);
  const mobileAnimation = useElementInView(0.1);
  const desktopAnimation = useElementInView(0.1);
  const featuresAnimation = useElementInView(0.1);

  const hoverGradientBorder = "hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:p-[2px]";
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <section className="bg-gray-900 py-20 px-6 overflow-x-hidden w-full box-border">
      <div className="max-w-6xl mx-auto box-border">
        <motion.div 
          className="text-center mb-16"
          ref={titleAnimation.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={titleAnimation.controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            No hidden fees. No credit checks.
            <br />
            No more old-school banking credit.
          </h2>
        </motion.div>

        <div className="relative flex justify-center mb-16">
          {/* Mobile layout */}
          <motion.div 
            className="lg:hidden w-full relative"
            ref={mobileAnimation.ref}
            initial="hidden"
            animate={mobileAnimation.controls}
            variants={containerVariants}
          >
            
            {/* iPhone como fundo */}
            <motion.div 
              className="relative mx-auto pt-4 pb-8"
              variants={itemVariants}
            >
              <Image 
                src={AppOnIphone} 
                alt="iPhone Mockup" 
                width={300} 
                height={600} 
                z-index={999}
                className="-rotate-20 shadow-2xl mx-auto" 
              />
            </motion.div>
            
            {/* Benefits cards por cima do celular, começando da mesma altura */}
            <motion.div 
              className="flex flex-col space-y-4 absolute top-4 left-0 right-0 px-4"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={`mobile-benefit-${benefit.title}`}
                  className={`bg-white rounded-xl ${hoverGradientBorder} transition-all duration-300 group`}
                  variants={{
                    hidden: { x: index % 2 === 0 ? -30 : 30, y: 20, opacity: 0 },
                    visible: {
                      x: 0,
                      y: 0,
                      opacity: 1,
                      transition: { 
                        duration: 0.6, 
                        delay: 0.1 * index,
                        ease: "easeOut"
                      }
                    }
                  }}
                  custom={index}
                >
                  <div className="p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-[rgba(249,45,158,0.7)] group-hover:border-transparent bg-white">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                      <p className="text-xs text-black">{benefit.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop layout - Corrigido com layout de 3 colunas */}
          <motion.div 
            className="hidden lg:grid grid-cols-3 gap-6 w-full"
            ref={desktopAnimation.ref}
            initial="hidden"
            animate={desktopAnimation.controls}
            variants={containerVariants}
          >
            {/* Left side cards - 3 cards alinhados verticalmente */}
            <div className="flex flex-col space-y-8 justify-center">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={`desktop-left-benefit-${benefit.title}`}
                  className={`rounded-xl group ${hoverGradientBorder}`}
                  variants={{
                    hidden: { x: -40, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { 
                        duration: 0.6, 
                        delay: 0.15 * index,
                        ease: "easeOut"
                      }
                    }
                  }}
                  initial={{ y: 0 }}
                  animate={{ 
                    y: hoveredCard === index ? 0 : [0, -10, 0],
                    scale: hoveredCard === index ? 1.03 : 1,
                    transition: {
                      duration: 4 + index * 0.5,
                      ease: "easeInOut",
                      repeat: hoveredCard === index ? 0 : Number.POSITIVE_INFINITY,
                      repeatType: "mirror"
                    }
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(249,45,158,0.15)",
                  }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-[rgba(249,45,158,0.7)] group-hover:border-transparent">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                      <p className="text-xs text-black">{benefit.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center column with iPhone */}
            <motion.div 
              className="flex justify-center items-center"
              variants={itemVariants}
            >
              <Image 
                src={AppOnIphone} 
                alt="iPhone Mockup" 
                width={300} 
                height={600} 
                className="-rotate-20 shadow-2xl mx-auto" 
              />
            </motion.div>
            
            {/* Right side cards - 2 cards alinhados verticalmente */}
            <div className="flex flex-col space-y-8 justify-center">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={`desktop-right-benefit-${benefit.title}`}
                  className={`rounded-xl group ${hoverGradientBorder}`}
                  variants={{
                    hidden: { x: 40, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { 
                        duration: 0.6, 
                        delay: 0.15 * index,
                        ease: "easeOut"
                      }
                    }
                  }}
                  initial={{ y: 0 }}
                  animate={{ 
                    y: hoveredCard === index + 3 ? 0 : [0, -10, 0],
                    scale: hoveredCard === index + 3 ? 1.03 : 1,
                    transition: {
                      duration: 5 + index * 0.5,
                      ease: "easeInOut",
                      repeat: hoveredCard === index + 3 ? 0 : Number.POSITIVE_INFINITY,
                      repeatType: "mirror"
                    }
                  }}
                  onMouseEnter={() => setHoveredCard(index + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(249,45,158,0.15)",
                  }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-[rgba(249,45,158,0.7)] group-hover:border-transparent">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                      <p className="text-xs text-black">{benefit.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          ref={featuresAnimation.ref}
          initial="hidden"
          animate={featuresAnimation.controls}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
              <RendimentoPayLogo height={80} className="mx-auto mb-8" />
            </motion.div>
          
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:auto-cols-auto lg:grid-flow-col gap-4 items-center w-fit">
                  {features.map((item, i) => (
                    <motion.div
                      key={`rendimento-benefit-${i}`}
                      className={`rounded-xl group ${hoverGradientBorder}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.07, y: -8, boxShadow: "0 8px 32px rgba(249,45,158,0.15)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center border-2 border-[rgba(249,45,158,0.7)] group-hover:border-transparent aspect-square cursor-pointer p-6 min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px]">
                        <div className="w-10 h-10 flex items-center justify-center mb-2">
                          <item.icon className={`w-10 h-10 ${item.color}`} />
                        </div>
                        <span className="text-black text-xs font-medium text-center">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
