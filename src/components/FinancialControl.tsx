"use client"
import Image from "next/image"
import dashboard from "../../public/images/dashboard.png"
import { motion } from "framer-motion"
import { useElementInView } from "../hooks/useElementInView"

export default function FinancialControl() {
  const titleAnimation = useElementInView(0.1);
  const imageAnimation = useElementInView(0.1);
  const textBoxAnimation = useElementInView(0.1);

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
    <section className="bg-white text-black py-20 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={titleAnimation.ref}
            initial="hidden"
            animate={titleAnimation.controls}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-black text-4xl lg:text-5xl font-bold mb-6"
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { 
                  x: 0, 
                  opacity: 1,
                  transition: { duration: 0.7, ease: "easeOut" }
                }
              }}
            >
              Abertura de conta & cartão de crédito <span className="text-diverse-pink">em cinco minutos</span>.
            </motion.h2>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-diverse-pink to-diverse-yellow p-0.5 rounded-2xl shadow-2xl flex items-center justify-center h-full"
            ref={imageAnimation.ref}
            initial="hidden"
            animate={imageAnimation.controls}
            variants={{
              hidden: { x: 50, opacity: 0, scale: 0.9 },
              visible: { 
                x: 0, 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut" 
                }
              }
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="bg-gray-50 rounded-2xl w-full h-full flex items-center justify-center">
              {/* Dashboard Interface Image */}
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

        <motion.div 
          className="mt-12 bg-gray-900 text-white p-8 rounded-2xl"
          ref={textBoxAnimation.ref}
          initial={{ y: 30, opacity: 0 }}
          animate={textBoxAnimation.controls}
          variants={{
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { 
                duration: 0.6, 
                delay: 0.4,
                ease: "easeOut" 
              }
            }
          }}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 30px rgba(249,45,158,0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <p className="text-lg leading-relaxed">
            Earn 2% cash back on favorite brands. Earn 2% cash back on favorite brands. Get premium benefits and more
            customer service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
