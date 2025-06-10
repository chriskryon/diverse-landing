import { motion } from 'framer-motion';
import ApiCodeBlock from './ApiCodeBlock';
import { useApiSectionAnimations } from '../hooks/useApiSectionAnimations';
import { useState } from 'react';

export default function ApiSection() {
  const {
    titleAnimations,
    benefitsAnimations,
    codeBlockAnimations,
    ctaAnimations
  } = useApiSectionAnimations();

  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const benefits = [
    { id: 'pagamentos', title: 'Pagamentos Automatizados', desc: 'Integre Pix e boletos diretamente no seu sistema.', icon: '📲' },
    { id: 'gestao', title: 'Gestão em Tempo Real', desc: 'Acesse saldos e relatórios financeiros via API.', icon: '📊' },
    { id: 'seguranca', title: 'Segurança Bancária', desc: 'Autenticação OAuth 2.0 e criptografia ponta a ponta.', icon: '🔒' },
  ];

  return (
    <section id="api-section" className="py-10 bg-gray-900 text-white overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <motion.h2
          ref={titleAnimations.ref}
          initial={titleAnimations.initial}
          animate={titleAnimations.controls}
          variants={titleAnimations.variants}
          className="text-3xl lg:text-4xl font-bold mb-4 text-center"
        >
          Integre sua Empresa com a API da Diverse
        </motion.h2>

        {/* Benefícios */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-12"
          ref={benefitsAnimations.ref}
          initial="hidden"
          animate={benefitsAnimations.controls}
          variants={benefitsAnimations.container}
          onMouseLeave={() => setHoveredBenefit(null)}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={benefitsAnimations.item}
              className="p-6 bg-white rounded-xl shadow-lg border-2 border-[rgba(249,45,158,0.7)]"
              animate={{
                opacity: hoveredBenefit !== null && hoveredBenefit !== benefit.id ? 0.3 : 1,
                filter: hoveredBenefit !== null && hoveredBenefit !== benefit.id ? "blur(2px)" : "blur(0px)",
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Exemplo de Código */}
        <motion.div 
          className="bg-black p-6 rounded-xl max-w-3xl mx-auto mb-12 border border-gray-800"
          ref={codeBlockAnimations.ref}
          initial={codeBlockAnimations.initial}
          animate={codeBlockAnimations.controls}
          variants={codeBlockAnimations.variants}
        >
          <h3 className="text-xl font-semibold mb-4">Exemplo: Criar um Pix</h3>
          <ApiCodeBlock />
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          ref={ctaAnimations.ref}
          initial={ctaAnimations.initial}
          animate={ctaAnimations.controls}
          variants={ctaAnimations.variants}
        >
          <button type='button' className="bg-diverse-yellow text-black px-6 py-3 rounded-full font-medium transition-opacity duration-300 hover:opacity-80">
            Solicitar Acesso à API
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Nossa API segue os padrões do Open Banking Brasil, com autenticação OAuth 2.0, criptografia AES-256 e conformidade com LGPD.
          </p>
        </motion.div>
      </div>
    </section>
  );
}