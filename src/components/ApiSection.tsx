import { motion } from 'framer-motion';
import ApiCodeBlock from './ApiCodeBlock';

export default function ApiSection() {
  const benefits = [
    { id: 'pagamentos', title: 'Pagamentos Automatizados', desc: 'Integre Pix e boletos diretamente no seu sistema.', icon: '📲' },
    { id: 'gestao', title: 'Gestão em Tempo Real', desc: 'Acesse saldos e relatórios financeiros via API.', icon: '📊' },
    { id: 'seguranca', title: 'Segurança Bancária', desc: 'Autenticação OAuth 2.0 e criptografia ponta a ponta.', icon: '🔒' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-4xl font-bold mb-4 text-center"
        >
          Integre sua Empresa com a API da Diverse
        </motion.h2>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Exemplo de Código */}
        <div className="bg-black p-6 rounded-xl max-w-3xl mx-auto mb-12 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Exemplo: Criar um Pix</h3>
          <ApiCodeBlock />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button type='button' className="bg-[#edfb06] text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors">
            Solicitar Acesso à API
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Nossa API segue os padrões do Open Banking Brasil, com autenticação OAuth 2.0, criptografia AES-256 e conformidade com LGPD.
          </p>
        </div>
      </div>
    </section>
  );
}