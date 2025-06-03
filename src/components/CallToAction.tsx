"use client";
import { motion } from 'framer-motion';
import useCallToActionForm from '@/hooks/useCallToActionForm';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const {
    formData,
    errors,
    isSubmitting,
    success,
    isFormValid,
    handleChange,
    handleSubmit
  } = useCallToActionForm(isOpen, onClose);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Fechar o modal apenas se o clique foi diretamente no backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-4 md:p-0"
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md md:max-w-2xl m-auto border-2 border-[rgba(249,45,158,0.7)]"
      >
        <button 
          type='button'
          onClick={onClose}
          className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Fechar"
        >
          ✕
        </button>
        
        {success ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6 text-5xl">✅</motion.div>
            <h2 className="text-2xl font-bold text-white mb-4">Cadastro realizado!</h2>
            <p className="text-gray-300">
              Em breve entraremos em contato com você.
            </p>
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4"
            >
              Lista de espera
            </motion.h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6">
              Gestão financeira inteligente e taxas ocultas.
            </p>
            
            {errors.form && (
              <div className="bg-red-900/40 border border-red-500/50 text-white p-3 rounded-lg mb-4 text-sm">
                {errors.form}
              </div>
            )}
            
            <motion.form 
              className="flex flex-col gap-3 sm:gap-4 mx-auto"
              onSubmit={handleSubmit}
            >
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome completo" 
                className="p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-gray-700 focus:border-pink-500 outline-none transition-colors text-sm sm:text-base" 
              />
              
              {/* Campo de CPF */}
              <div className="relative">
                <label htmlFor="cpf-input" className="text-xs sm:text-sm text-gray-300 mb-1 block">CPF (Pessoa Física)</label>
                <input 
                  id="cpf-input"
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00" 
                  className={`p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none text-sm sm:text-base ${
                    errors.cpf ? 'border-red-500' : 'border-gray-700 focus:border-pink-500'
                  }`}
                />
                {errors.cpf && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cpf}
                  </p>
                )}
              </div>
              
              <div className="relative">
                <label htmlFor="cnpj-input" className="text-xs sm:text-sm text-gray-300 mb-1 block">CNPJ (Pessoa Jurídica)</label>
                <input 
                  id="cnpj-input"
                  type="text"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleChange}
                  placeholder="00.000.000/0000-00" 
                  className={`p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none text-sm sm:text-base ${
                    errors.cnpj ? 'border-red-500' : 'border-gray-700 focus:border-pink-500'
                  }`}
                />
                {errors.cnpj && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cnpj}
                  </p>
                )}
              </div>
              
              {/* Campo de Email */}
              <div className="relative">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className={`p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none text-sm sm:text-base ${
                    errors.email ? 'border-red-500' : 'border-gray-700 focus:border-pink-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="phone-input" className="text-xs sm:text-sm text-gray-300 mb-1 block">Telefone Celular</label>
                <input 
                  id="phone-input"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000" 
                  className={`p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none text-sm sm:text-base ${
                    errors.phone ? 'border-red-500' : 'border-gray-700 focus:border-pink-500'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-1">
                É necessário preencher CPF e CNPJ corretamente.
              </p>
              
              <button 
                type="submit" 
                disabled={isSubmitting || !isFormValid}
                className={`bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:opacity-90 transition-colors mt-2 sm:mt-4 relative text-sm sm:text-base
                  ${(isSubmitting || !isFormValid) ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Junte-se à Lista de Espera</span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" role="img">
                        <title>Loading</title>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </span>
                  </>
                ) : (
                  "Junte-se à Lista de Espera"
                )}
              </button>
            </motion.form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}