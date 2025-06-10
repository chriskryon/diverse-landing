import { motion, AnimatePresence } from 'framer-motion';
import { useApiSectionAnimations } from '../hooks/useApiSectionAnimations';
import { useState } from 'react';
import ApiCodeBlock from './ApiCodeBlock';
import NodeJsIcon from './icons/NodeJs';
import PythonIcon from './icons/Python';
import { Smartphone, BarChart2, ShieldCheck, CreditCard, Database, Lock } from 'lucide-react';

const codeExamples = {
  node: `// Criar um Pix com axios (Node.js)
const axios = require('axios');

const response = await axios.post('https://api.diverse.com.vc/pix', {
  valor: 100.00,
  chave: 'email@cliente.com',
  descricao: 'Pagamento de serviço'
}, {
  headers: {
    'Authorization': 'Bearer SEU_TOKEN_AQUI'
  }
});

console.log(response.data);`,
  python: `# Criar um Pix com requests (Python)
import requests

headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI"
}
payload = {
    "valor": 100.00,
    "chave": "email@cliente.com",
    "descricao": "Pagamento de serviço"
}
response = requests.post("https://api.diverse.com.vc/pix", json=payload, headers=headers)
print(response.json())`,
  curl: `# Criar um Pix com cURL
curl -X POST https://api.diverse.com.vc/pix \\
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \\
  -H "Content-Type: application/json" \\
  -d '{
    "valor": 100.00,
    "chave": "email@cliente.com",
    "descricao": "Pagamento de serviço"
  }'`
};

const languages = [
  {
    id: 'node',
    label: 'Node.js',
    icon: <NodeJsIcon width={"32px"} />
  },
  {
    id: 'python',
    label: 'Python',
    icon: <PythonIcon width={"32px"} />
  },
];

export default function ApiSection() {
  const {
    titleAnimations,
    benefitsAnimations,
    codeBlockAnimations,
    ctaAnimations
  } = useApiSectionAnimations();

  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<'node' | 'python' | 'curl'>('node');
  const [codeKey, setCodeKey] = useState(0);

  const benefits = [
    {
      id: 'pagamentos',
      title: 'Pagamentos Automatizados',
      desc: 'Integre Pix e boletos diretamente no seu sistema.',
      icon: <CreditCard className="w-6 h-6 text-diverse-pink" />
    },
    {
      id: 'gestao',
      title: 'Gestão em Tempo Real',
      desc: 'Acesse saldos e relatórios financeiros via API.',
      icon: <Database className="w-6 h-6 text-diverse-yellow" />
    },
    {
      id: 'seguranca',
      title: 'Segurança Bancária',
      desc: 'Autenticação OAuth 2.0 e criptografia ponta a ponta.',
      icon: <Lock className="w-6 h-6 text-diverse-black" />
    },
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
          className="flex justify-center mb-12 mt-7"
          ref={benefitsAnimations.ref}
          initial="hidden"
          animate={benefitsAnimations.controls}
          variants={benefitsAnimations.container}
          onMouseLeave={() => setHoveredBenefit(null)}
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={benefitsAnimations.item}
                className="flex flex-col items-center bg-white rounded-xl border-2 border-diverse-pink p-4 shadow-sm hover:shadow-md transition-all duration-200 group"
                style={{ minHeight: 150, maxWidth: 220 }}
                animate={{
                  opacity: hoveredBenefit !== null && hoveredBenefit !== benefit.id ? 0.3 : 1,
                  filter: hoveredBenefit !== null && hoveredBenefit !== benefit.id ? "blur(2px)" : "blur(0px)",
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
              >
                <div className="mb-2 flex items-center justify-center rounded-full bg-diverse-pink/10 w-10 h-10 group-hover:bg-diverse-pink/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold mb-1 text-[#181919] text-center">{benefit.title}</h3>
                <p className="text-sm text-[#181919] text-center font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modern Language Cards + Code Example */}
        <motion.div
          className="bg-black p-6 rounded-xl max-w-3xl mx-auto mb-12 border border-gray-800"
          ref={codeBlockAnimations.ref}
          initial={codeBlockAnimations.initial}
          animate={codeBlockAnimations.controls}
          variants={codeBlockAnimations.variants}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Exemplo: Criar um Pix</h3>
          {/* Minimal language buttons */}
          <div className="flex gap-2 mb-6 justify-center">
            {languages.map(lang => (
              <button
                key={lang.id}
                type="button"
                onClick={() => {
                  setSelectedLang(lang.id as 'node' | 'python' | 'curl');
                  setCodeKey(prev => prev + 1);
                }}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200
                  ${selectedLang === lang.id
                    ? 'bg-diverse-pink border-diverse-pink text-white scale-110 shadow'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }
                `}
                aria-label={lang.label}
              >
                {lang.icon}
              </button>
            ))}
          </div>
          {/* Animated code block with ApiCodeBlock */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLang + codeKey}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <ApiCodeBlock
                code={codeExamples[selectedLang]}
                language={
                  selectedLang === 'node'
                    ? 'javascript'
                    : selectedLang === 'python'
                    ? 'python'
                    : 'bash'
                }
              />
            </motion.div>
          </AnimatePresence>
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