import { motion } from 'framer-motion';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CTAModal({ isOpen, onClose }: CTAModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl max-w-2xl m-4"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100"
        >
          ✕
        </button>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          A Conta PJ que Simplifica o Crescimento da Sua Empresa
        </motion.h1>
        
        <p className="text-lg text-gray-200 mb-6">
          Sem taxas ocultas e gestão financeira inteligente.
        </p>
        
        <motion.form
          whileHover={{ scale: 1.02 }}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input type="text" placeholder="Nome" className="p-2 rounded bg-white/20 text-white placeholder-gray-300" />
          <input type="text" placeholder="CNPJ" className="p-2 rounded bg-white/20 text-white placeholder-gray-300" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-white/20 text-white placeholder-gray-300" />
          <button type='button' className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">
            Junte-se à Lista de Espera
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}