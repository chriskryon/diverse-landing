"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { faqData } from '@/data/faqSection';

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const headerAnimation = useScrollAnimation(0);
  const staggeredAnimation = useStaggeredAnimation(faqData.length, 0.1);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 relative overflow-hidden">
      {/* Background pattern subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-diverse-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-diverse-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Enhanced Left Section */}
          <motion.div
            ref={headerAnimation.ref}
            initial={headerAnimation.initial}
            animate={headerAnimation.animate}
            className="text-center mb-16 lg:mb-0 lg:text-left lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8"
          >
            {/* Icon header */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-diverse-pink/10 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-diverse-pink" />
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-diverse-black mb-6 tracking-tight">
              FAQ
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Esclarecemos as principais dúvidas sobre nossos produtos e serviços financeiros.
              <span className="hidden lg:block mt-4 text-lg"> 
                Nossa missão é oferecer transparência total e suporte completo para sua jornada financeira.
              </span>
            </p>
            
            {/* Enhanced divider */}
            <div className="flex items-center gap-2 mx-auto lg:mx-0 w-fit">
              <div className="w-12 h-1 bg-diverse-pink rounded-full"></div>
              <div className="w-6 h-1 bg-diverse-pink/50 rounded-full"></div>
              <div className="w-3 h-1 bg-diverse-pink/25 rounded-full"></div>
            </div>

            {/* Stats */}
            <div className="hidden lg:block mt-12 space-y-4">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-diverse-pink">8</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Perguntas Frequentes</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Right Section */}
          <div className="lg:w-2/3 xl:w-3/4">
            <motion.div
              ref={staggeredAnimation.ref}
              initial="hidden"
              animate={staggeredAnimation.isInView ? "visible" : "hidden"}
              variants={staggeredAnimation.containerVariants}
              className="space-y-6"
            >
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggeredAnimation.itemVariants}
                  className={`
                    bg-white rounded-3xl border-2 transition-all duration-500 
                    hover:shadow-2xl hover:shadow-diverse-pink/5 hover:-translate-y-1
                    ${openItem === index 
                      ? 'border-diverse-pink shadow-xl shadow-diverse-pink/10 scale-[1.02]' 
                      : 'border-gray-100 hover:border-diverse-pink/30 shadow-lg'
                    }
                  `}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Question number */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                        ${openItem === index 
                          ? 'bg-diverse-pink text-white' 
                          : 'bg-gray-100 text-gray-400 group-hover:bg-diverse-pink/10 group-hover:text-diverse-pink'
                        }
                      `}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      <h3 className={`text-lg lg:text-xl font-semibold transition-colors leading-tight ${
                        openItem === index 
                          ? 'text-diverse-pink' 
                          : 'text-gray-800 group-hover:text-diverse-pink'
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openItem === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`
                        flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all
                        ${openItem === index 
                          ? 'bg-diverse-pink text-white' 
                          : 'bg-gray-100 text-gray-400 group-hover:bg-diverse-pink/10 group-hover:text-diverse-pink'
                        }
                      `}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItem === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          {/* Enhanced separator */}
                          <div className="flex items-center gap-2 mb-6">
                            <div className="flex-1 h-px bg-diverse-pink/20"></div>
                            <div className="w-2 h-2 bg-diverse-pink/30 rounded-full"></div>
                            <div className="flex-1 h-px bg-diverse-pink/20"></div>
                          </div>
                          
                          <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
