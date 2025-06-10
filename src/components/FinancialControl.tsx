"use client"
import Image from "next/image"
import dashboard from "../../public/images/dashboard.png"
import { motion } from "framer-motion"
import { useFinancialControlAnimations } from "../hooks/useFinancialControlAnimations"
import { Clock, Shield, Zap } from "lucide-react"

export default function FinancialControl() {
  const {
    titleAnimations,
    imageAnimations,
    textBoxAnimations
  } = useFinancialControlAnimations();

  const features = [
    { icon: Clock, text: "5 min", label: "para abrir" },
    { icon: Shield, text: "100%", label: "seguro" },
    { icon: Zap, text: "0", label: "burocracias" }
  ];

  return (
    <section id="financial-control" className="bg-gray-50 py-16 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="grid lg:grid-cols-2 gap-4 items-center mb-12">
          {/* Left side - Title and features */}
          <motion.div 
            className="order-2 lg:order-1"
            ref={titleAnimations.ref}
            initial="hidden"
            animate={titleAnimations.controls}
            variants={titleAnimations.container}
          >
            <motion.h2 
              className="text-gray-900 text-3xl lg:text-4xl font-bold mb-8 leading-tight"
              variants={titleAnimations.title}
            >
              Abertura de conta & cartão de crédito{" "}
              <span className="text-diverse-pink relative">
                em cinco minutos
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-diverse-pink/30"></div>
              </span>
            </motion.h2>

            {/* Features list */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={titleAnimations.container}
            >
              {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200/50 shadow-sm w-auto hover:shadow-md transition-shadow duration-300"
                variants={titleAnimations.title}
              >
                <div className="w-10 h-10 rounded-full bg-diverse-pink/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-diverse-pink" />
                </div>
                <div>
                <div className="font-bold text-gray-900 text-lg">{feature.text}</div>
                <div className="text-sm text-gray-500">{feature.label}</div>
                </div>
              </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard Image */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            ref={imageAnimations.ref}
            initial="hidden"
            animate={imageAnimations.controls}
            variants={imageAnimations.container}
            whileHover={imageAnimations.hover}
          >
            {/* Clean minimal frame */}
            <div className="bg-white p-3 rounded-3xl shadow-2xl border border-gray-200/50">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={dashboard}
                  alt="Dashboard Interface"
                  width={1280}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Removed the overlay */}
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-diverse-pink rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-diverse-yellow rounded-full opacity-15"></div>
          </motion.div>
        </div>

        {/* Bottom info card */}
        <motion.div 
          className="mx-auto max-w-2xl"
          ref={textBoxAnimations.ref}
          initial="hidden"
          animate={textBoxAnimations.controls}
          variants={textBoxAnimations.variants}
          whileHover={textBoxAnimations.hover}
        >
          <div className="bg-white p-6 rounded-2xl border border-gray-200/50 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-diverse-pink/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-diverse-pink" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Processo Simplificado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Abra sua conta digital e solicite seu cartão de crédito em minutos, 
                  com controle financeiro completo e sem complicações.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
