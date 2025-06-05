"use client"
import Image from "next/image"
import dashboard from "../../public/images/dashboard.png"
import { motion } from "framer-motion"
import { useFinancialControlAnimations } from "../hooks/useFinancialControlAnimations"

export default function FinancialControl() {
  const {
    titleAnimation,
    titleAnimations,
    imageAnimations,
    textBoxAnimations
  } = useFinancialControlAnimations();

  return (
    <section id="financial-control" className="bg-white text-black py-20 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Title Section */}
          <motion.div
            ref={titleAnimation.ref}
            initial="hidden"
            animate={titleAnimation.controls}
            variants={titleAnimations.container}
          >
            <motion.h2 
              className="text-black text-4xl lg:text-5xl font-bold mb-6"
              variants={titleAnimations.title}
            >
              Abertura de conta & cartão de crédito <span className="text-diverse-pink">em cinco minutos</span>.
            </motion.h2>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div 
            className="bg-diverse-yellow p-0.5 rounded-2xl shadow-2xl flex items-center justify-center h-full"
            ref={imageAnimations.ref}
            initial="hidden"
            animate={imageAnimations.controls}
            variants={imageAnimations.container}
            whileHover={imageAnimations.hover}
          >
            <div className="bg-gray-50 rounded-2xl w-full h-full flex items-center justify-center">
              <Image
                src={dashboard}
                alt="Dashboard Interface"
                width={1280}
                height={600}
                className="w-full h-full object-cover rounded-xl shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div 
          className="mt-4 bg-[#101828] text-white p-8 rounded-2xl"
          ref={textBoxAnimations.ref}
          initial={textBoxAnimations.initial}
          animate={textBoxAnimations.controls}
          variants={{ visible: textBoxAnimations.visible }}
          whileHover={textBoxAnimations.hover}
        >
            <p className="text-lg leading-relaxed">
            Abra sua conta digital e solicite seu cartão de crédito em minutos, com controle financeiro!
            </p>
        </motion.div>
      </div>
    </section>
  )
}
