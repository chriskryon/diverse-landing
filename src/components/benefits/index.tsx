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
    hoveredFeature,
    setHoveredFeature,
    titleAnimations,
    mobileAnimations,
    desktopAnimations,
    featuresAnimations
  } = useBenefitsAnimations();
  
  const companyLogos = [
    {
      id: 'rendimento-pay',
      component: RendimentoPayLogo,
      height: 60
    },
  ];
  
  return (
    <section id="benefits" className="bg-gray-900 py-20 px-6 overflow-x-hidden w-full box-border">
      <div className="max-w-6xl mx-auto box-border">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-16"
          ref={titleAnimations.ref}
          initial="hidden"
          animate={titleAnimations.controls}
          variants={titleAnimations.variants}
        >
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Descubra uma nova forma de <span className="text-diverse-pink">lidar com seu dinheiro</span>
              <br />
                <span className="text-xl lg:text-2xl text-gray-100 font-semibold py-0">Simples, digital e feita para você.</span>
                </h2>
                <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto py-0 text-justify">
                  Tudo o que você precisa para cuidar do seu dinheiro, com praticidade e segurança. Sem complicação, sem burocracia.
                </p>
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
                className="-rotate-20 shadow-2xl mx-auto opacity-60" 
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
                  className={`bg-white rounded-xl shadow-lg transition-all duration-300 group border-2 border-diverse-pink/70 hover:border-diverse-pink hover:shadow-xl`}
                  variants={mobileAnimations.card(index)}
                  custom={index}
                >
                  <div className="p-4 rounded-xl flex items-start space-x-4">
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
                  className="rounded-xl group transition-all duration-300"
                  variants={desktopAnimations.leftCard(index)}
                  animate={desktopAnimations.floatingAnimation(index, hoveredCard === index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-diverse-pink/70 group-hover:border-diverse-pink group-hover:shadow-xl transition-all duration-300">
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
                  className="rounded-xl group transition-all duration-300"
                  variants={desktopAnimations.rightCard(index)}
                  animate={desktopAnimations.floatingAnimation(index + 3, hoveredCard === index + 3)}
                  onMouseEnter={() => setHoveredCard(index + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-diverse-pink/70 group-hover:border-diverse-pink group-hover:shadow-xl transition-all duration-300">
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
          style={{ boxSizing: "border-box" }}
          ref={featuresAnimations.ref}
          initial="hidden"
          animate={featuresAnimations.controls}
          variants={featuresAnimations.container}
        >
          {/* Logos das Empresas */}
          <motion.div 
            variants={featuresAnimations.item}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-8"
          >
            {companyLogos.map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <motion.div
                  key={logo.id}
                  {...featuresAnimations.logoItem(index)}
                  className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
                >
                  <LogoComponent height={logo.height} />
                </motion.div>
              );
            })}
          </motion.div>
          
          <div className="w-full flex justify-center" style={{ boxSizing: "border-box" }}>
            <div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 place-items-center"
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {features.map((item, i) => (
                <motion.div
                  key={`rendimento-benefit-${i}`}
                  className="rounded-xl group transition-all duration-300 flex justify-center"
                  style={{ boxSizing: "border-box" }}
                  {...featuresAnimations.featureItem(i)}
                  onMouseEnter={() => setHoveredFeature(i)}
                  whileHover={featuresAnimations.featureHover}
                >
                  <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center border-2 border-diverse-pink/70 group-hover:border-diverse-pink aspect-square cursor-pointer p-4 w-32 h-32 transition-all duration-300">
                    <div className="w-8 h-8 flex items-center justify-center mb-2">
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <span className="text-black text-xs font-medium text-center leading-tight">{item.text}</span>
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
