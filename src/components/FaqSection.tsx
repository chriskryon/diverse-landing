"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como posso abrir minha conta digital na Diverse?",
    answer: "A abertura de conta é 100% digital e pode ser feita em poucos minutos. Através do nosso aplicativo, você fornece seus dados pessoais, envia fotos dos documentos necessários e realiza a validação biométrica. Nossa análise é automatizada e você recebe o resultado na hora. Todo o processo é seguro, criptografado e atende às normas do Banco Central."
  },
  {
    question: "Quais documentos são necessários para abrir minha conta?",
    answer: "Para pessoa física: CPF, RG ou CNH válidos, comprovante de residência atualizado (até 90 dias) e uma selfie para validação biométrica. Para pessoa jurídica: CNPJ ativo, contrato social atualizado, CPF e RG do representante legal, comprovante de endereço da empresa e procuração, se aplicável. Todos os documentos devem estar legíveis e dentro da validade."
  },
  {
    question: "A conta digital Diverse é realmente gratuita?",
    answer: "Sim, nossa conta digital é completamente gratuita para sempre. Não cobramos taxa de manutenção, abertura ou encerramento. Transferências via PIX, TED e DOC são ilimitadas e gratuitas. O cartão de débito também não possui taxas de emissão ou anuidade. Nosso compromisso é democratizar o acesso aos serviços financeiros."
  },
  {
    question: "Como funciona o cartão de crédito Diverse?",
    answer: "Nosso cartão de crédito internacional não possui anuidade e oferece aprovação instantânea baseada em análise de renda e score. Você pode controlar limite, bloquear/desbloquear, acompanhar gastos em tempo real e configurar alertas pelo app. Oferecemos programa de benefícios com cashback, descontos em parceiros e proteção contra fraudes 24/7."
  },
  {
    question: "Posso usar meu cartão Diverse em compras internacionais?",
    answer: "Sim! Nosso cartão possui bandeira internacional aceita em mais de 200 países. Você pode ativar/desativar o uso internacional pelo app para maior segurança. Oferecemos taxas competitivas para compras no exterior e notificações em tempo real de todas as transações. Também disponibilizamos seguros de viagem como benefício adicional."
  },
  {
    question: "Como funciona o atendimento e suporte da Diverse?",
    answer: "Oferecemos atendimento multicanal 24/7: chat inteligente no app com respostas instantâneas, WhatsApp Business, e-mail (suporte@diverse.com.vc) e central telefônica. Nossa base de conhecimento online resolve 80% das dúvidas automaticamente. Para questões complexas, conectamos você com especialistas humanos em menos de 2 minutos."
  },
  {
    question: "Quando poderei começar a usar os serviços da Diverse?",
    answer: "Estamos nos preparativos finais para o lançamento oficial. Nossa plataforma está passando pelos últimos testes de segurança e conformidade com o Banco Central. Em breve, o app estará disponível nas lojas iOS e Android. Cadastre-se em nossa lista VIP para receber acesso antecipado e condições especiais de lançamento."
  },
  {
    question: "A Diverse é regulamentada pelo Banco Central?",
    answer: "Sim, a Diverse é uma instituição financeira devidamente autorizada e supervisionada pelo Banco Central do Brasil. Seguimos todas as normas de segurança, compliance e proteção de dados exigidas pela legislação brasileira. Seus recursos são protegidos pelo Fundo Garantidor de Créditos (FGC) até R$ 250.000 por CPF."
  }
];

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
