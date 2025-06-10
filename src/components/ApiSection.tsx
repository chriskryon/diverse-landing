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
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={benefitsAnimations.item}
                className="relative flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/10"
                style={{ minHeight: 180, maxWidth: 240 }}
                animate={{
                  opacity: hoveredBenefit !== null && hoveredBenefit !== benefit.id ? 0.4 : 1,
                  scale: hoveredBenefit === benefit.id ? 1.02 : 1,
                  filter: hoveredBenefit !== null && hoveredBenefit !== benefit.id ? "blur(1px)" : "blur(0px)",
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
              >
                {/* Accent border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-diverse-pink/30 transition-all duration-300" />
                
                <div className="mb-4 flex items-center justify-center rounded-2xl bg-diverse-pink/20 w-14 h-14 group-hover:bg-diverse-pink/30 transition-all duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white text-center leading-tight">{benefit.title}</h3>
                <p className="text-sm text-gray-300 text-center font-medium leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modern Language Cards + Code Example */}
        <motion.div
          className="bg-gray-950/80 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto mb-7 border border-gray-800/50 shadow-2xl"
          ref={codeBlockAnimations.ref}
          initial={codeBlockAnimations.initial}
          animate={codeBlockAnimations.controls}
          variants={codeBlockAnimations.variants}
        >
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">Exemplo: Criar um Pix</h3>
          
          {/* Enhanced language selector */}
          <div className="flex gap-3 mb-8 justify-center bg-gray-900/50 p-2 rounded-xl border border-gray-700/50">
            {languages.map(lang => (
              <button
                key={lang.id}
                type="button"
                onClick={() => {
                  setSelectedLang(lang.id as 'node' | 'python' | 'curl');
                  setCodeKey(prev => prev + 1);
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 font-medium
                  ${selectedLang === lang.id
                    ? 'bg-diverse-pink border-diverse-pink text-white shadow-lg shadow-diverse-pink/20'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/70 hover:text-white hover:border-gray-600'
                  }
                `}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {lang.icon}
                </span>
                <span className="text-sm">{lang.label}</span>
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

        {/* Enhanced CTA */}
        <motion.div 
          className="text-center mt-4"
          ref={ctaAnimations.ref}
          initial={ctaAnimations.initial}
          animate={ctaAnimations.controls}
          variants={ctaAnimations.variants}
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
            <button type='button' className="bg-diverse-yellow text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-diverse-yellow/90 hover:scale-105 shadow-lg hover:shadow-xl">
              Solicitar Acesso à API
            </button>
            <p className="mt-2 text-gray-400 text-sm max-w-2xl leading-relaxed">
              Nossa API segue os padrões do <span className="text-diverse-pink font-medium">Open Banking Brasil</span>, com autenticação OAuth 2.0, criptografia AES-256 e conformidade com LGPD.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}