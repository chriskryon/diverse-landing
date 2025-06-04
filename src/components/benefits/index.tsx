"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import RendimentoPayLogo from "../logos/LogoRendimentoPay"
import AppOnIphone from "../../../public/images/app.png"
import { benefits, features } from "./data"
import { useBenefitsAnimations } from "@/hooks/useBenefitsAnimations"

export default function Benefits() {
  const {
    hoveredCard,
    setHoveredCard,
    titleAnimations,
    mobileAnimations,
    desktopAnimations,
    featuresAnimations,
    hoverGradientBorder
  } = useBenefitsAnimations();
  
  return (
    <section className="bg-gray-900 py-20 px-6 overflow-x-hidden w-full box-border">
      <div className="max-w-6xl mx-auto box-border">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-16"
          ref={titleAnimations.ref}
          initial={titleAnimations.initial}
          animate={titleAnimations.controls}
          variants={titleAnimations.variants}
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
            ref={mobileAnimations.ref}
            initial="hidden"
            animate={mobileAnimations.controls}
            variants={mobileAnimations.container}
          >
            {/* iPhone background */}
            <motion.div 
              className="relative mx-auto pt-4 pb-8"
              variants={mobileAnimations.item}
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
            
            {/* Benefits cards overlapping the phone */}
            <motion.div 
              className="flex flex-col space-y-4 absolute top-4 left-0 right-0 px-4"
              variants={mobileAnimations.container}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={`mobile-benefit-${benefit.title}`}
                  className={`bg-white rounded-xl ${hoverGradientBorder} transition-all duration-300 group`}
                  variants={mobileAnimations.card(index)}
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

          {/* Desktop layout - 3 columns */}
          <motion.div 
            className="hidden lg:grid grid-cols-3 gap-6 w-full"
            ref={desktopAnimations.ref}
            initial="hidden"
            animate={desktopAnimations.controls}
            variants={desktopAnimations.container}
          >
            {/* Left side cards */}
            <div className="flex flex-col space-y-8 justify-center">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={`desktop-left-benefit-${benefit.title}`}
                  className={`rounded-xl group ${hoverGradientBorder}`}
                  variants={desktopAnimations.leftCard(index)}
                  animate={desktopAnimations.floatingAnimation(index, hoveredCard === index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={desktopAnimations.hoverEffect}
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
              variants={desktopAnimations.image}
            >
              <Image 
                src={AppOnIphone} 
                alt="iPhone Mockup" 
                width={300} 
                height={600} 
                className="-rotate-20 shadow-2xl mx-auto" 
              />
            </motion.div>
            
            {/* Right side cards */}
            <div className="flex flex-col space-y-8 justify-center">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={`desktop-right-benefit-${benefit.title}`}
                  className={`rounded-xl group ${hoverGradientBorder}`}
                  variants={desktopAnimations.rightCard(index)}
                  animate={desktopAnimations.floatingAnimation(index + 3, hoveredCard === index + 3)}
                  onMouseEnter={() => setHoveredCard(index + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={desktopAnimations.hoverEffect}
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

        {/* Features Section */}
        <motion.div 
          className="text-center"
          ref={featuresAnimations.ref}
          initial="hidden"
          animate={featuresAnimations.controls}
          variants={featuresAnimations.container}
        >
          <motion.div variants={featuresAnimations.item}>
            <RendimentoPayLogo height={80} className="mx-auto mb-8" />
          </motion.div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:auto-cols-auto lg:grid-flow-col gap-4 items-center w-fit">
              {features.map((item, i) => (
                <motion.div
                  key={`rendimento-benefit-${i}`}
                  className={`rounded-xl group ${hoverGradientBorder}`}
                  variants={featuresAnimations.item}
                  whileHover={featuresAnimations.featureHover}
                  transition={featuresAnimations.featureTransition}
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
