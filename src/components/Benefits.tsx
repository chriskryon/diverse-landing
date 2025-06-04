"use client"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import RendimentoPayLogo from "./logos/LogoRendimentoPay"
import PJIcon from "./icons/PJ"
import CreditCardIcon from "./icons/CreditCard"
import GeneralIcon from "./icons/General"
import ExclusiveProductsIcon from "./icons/ExclusiveProducts"
import BetaVersionIcon from "./icons/BetaVersion"


export default function Benefits() {
  // Estado para controlar qual card está com hover
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: GeneralIcon,
      title: "Para Geral",
      text: "Trazemos a diversidade para o centro, formando serviços acolhedores para todo mundo.",
      color: "text-yellow-400",
    },
    {
      icon: PJIcon,
      title: "Conta Pessoa Jurídica",
      text: "te falei? também ofereço a modalidade de conta jurídica.",
      color: "text-pink-500",
    },
    {
      icon: ExclusiveProductsIcon,
      title: "Produtos Exclusivos",
      text: "Em breve, vou trazer produtos exclusivos para te ajudar no dia a dia.",
      color: "text-yellow-400",
    },
    {
      icon: BetaVersionIcon,
      title: "Versão Beta",
      text: "Estou na minha primeira versão, valeu por estar aqui e me ajudar a melhorar.",
      color: "text-pink-500",
    },
    {
      icon: CreditCardIcon,
      title: "Cartão de Crédito",
      text: "Ainda estou preparando um cartão de crédito mara.",
      color: "text-yellow-400",
    },
  ]

  return (
    <section className="bg-gray-900 py-20 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            No hidden fees. No credit checks.
            <br />
            No more old-school banking credit.
          </h2>
        </div>

        <div className="relative flex justify-center mb-16">
          {/* Mobile layout */}
          <div className="lg:hidden w-full relative">
            
            {/* iPhone como fundo */}
            <div className="relative mx-auto pt-4 pb-8">
              <Image 
                src="https://i.imgur.com/NkrGPNh.png" 
                alt="iPhone Mockup" 
                width={300} 
                height={600} 
                className="-rotate-20 shadow-2xl mx-auto" 
              />
            </div>
            
            {/* Benefits cards por cima do celular, começando da mesma altura */}
            <div className="flex flex-col space-y-4 absolute top-4 left-0 right-0 px-4">
              {benefits.map((benefit, index) => (
                <div
                  key={`mobile-benefit-${benefit.title}`}
                  className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-[rgba(249,45,158,0.7)]"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                    <p className="text-xs text-black">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop layout - Corrigido com layout de 3 colunas */}
          <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
            {/* Left side cards - 3 cards alinhados verticalmente */}
            <div className="flex flex-col space-y-8 justify-center">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={`desktop-left-benefit-${benefit.title}`}
                  className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-[rgba(249,45,158,0.7)]"
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
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                    <p className="text-xs text-black">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center column with iPhone */}
            <div className="flex justify-center items-center">
              <Image 
                src="https://i.imgur.com/NkrGPNh.png" 
                alt="iPhone Mockup" 
                width={300} 
                height={600} 
                className="-rotate-20 shadow-2xl mx-auto" 
              />
            </div>
            
            {/* Right side cards - 2 cards alinhados verticalmente */}
            <div className="flex flex-col space-y-8 justify-center">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={`desktop-right-benefit-${benefit.title}`}
                  className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-4 border-2 border-[rgba(249,45,158,0.7)]"
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
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                    <p className="text-xs text-black">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Rendimento Pay Section */}
        <div className="text-center">
          {/* <h3 className="text-2xl font-bold mb-8">Rendimento pay</h3> */}
            <RendimentoPayLogo height={80} className="mx-auto mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`rendimento-box-id-${i}-${Date.now()}`} className="bg-pink-500 p-6 rounded-lg aspect-square flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
