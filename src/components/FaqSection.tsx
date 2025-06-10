"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
  const footerAnimation = useScrollAnimation(0.3);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerAnimation.ref}
          initial={headerAnimation.initial}
          animate={headerAnimation.animate}
          className="text-center mb-12 lg:hidden"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#181919] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-justify">
            Esclarecemos as principais dúvidas sobre nossos produtos e serviços financeiros. 
            Nossa missão é oferecer transparência total e suporte completo para sua jornada financeira.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Desktop FAQ Title - Left Side */}
          <motion.div
            ref={headerAnimation.ref}
            initial={headerAnimation.initial}
            animate={headerAnimation.animate}
            className="hidden lg:block lg:col-span-4 lg:sticky lg:top-8"
          >
            <div className="pr-8">
              <h2 className="text-5xl xl:text-6xl font-bold text-[#181919] mb-6 leading-tight">
                FAQ
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8 text-justify">
                Esclarecemos as principais dúvidas sobre nossos produtos e serviços financeiros.
              </p>
              <div className="w-20 h-1 bg-diverse-pink rounded-full"></div>
            </div>
          </motion.div>

          {/* Accordion - Right Side */}
          <div className="lg:col-span-8">
            <motion.div
              ref={staggeredAnimation.ref}
              initial="hidden"
              animate={staggeredAnimation.isInView ? "visible" : "hidden"}
              variants={staggeredAnimation.containerVariants}
              className="space-y-4 mb-12"
            >
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggeredAnimation.itemVariants}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-diverse-pink/20"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors group"
                  >
                    <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                      openItem === index 
                        ? 'text-diverse-pink' 
                        : 'text-[#181919] group-hover:text-diverse-pink'
                    }`}>
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItem === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 p-1 rounded-full bg-diverse-pink/10 group-hover:bg-diverse-pink/20 transition-colors"
                    >
                      <ChevronDown className="w-5 h-5 text-diverse-pink" />
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
                        <div className="px-6 pb-6 pt-0">
                          <div className="w-full h-px bg-gradient-to-r from-diverse-pink/20 to-transparent mb-4"></div>
                          <p className="text-[#181919] leading-relaxed text-base text-justify">
                            {item.answer}
                          </p>
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
