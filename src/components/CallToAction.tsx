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
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 sm:p-6 overflow-y-auto"
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative p-4 sm:p-6 md:p-8 bg-black sm:bg-black/90 rounded-2xl shadow-xl w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg my-auto border-2 border-diverse-pink"
        style={{ 
          minHeight: 'fit-content',
          backdropFilter: 'blur(12px)', 
          WebkitBackdropFilter: 'blur(12px)' 
        }}
      >
        {/* Close Button mantendo estilo original */}
        <button 
          type='button'
          onClick={onClose}
          className="absolute top-3 right-3 text-white opacity-70 hover:opacity-100 transition-opacity text-sm"
          aria-label="Fechar"
        >
          ✕
        </button>
        
        {success ? (
          <div className="text-center py-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-5 text-3xl md:text-5xl">✅</motion.div>
            <h2 className="text-xl font-bold text-white mb-3">Cadastro realizado!</h2>
            <p className="text-sm text-gray-300">
              Em breve entraremos em contato com você.
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {/* Header com responsividade melhorada */}
            <div className="text-center space-y-2 sm:space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-white"
              >
                Junte-se à Lista de Espera
              </motion.h1>
              
              <p className="text-xs sm:text-sm text-gray-200 max-w-sm mx-auto">
                Descubra uma nova forma de lidar com seu dinheiro!
              </p>
            </div>
            
            {errors.form && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-900/40 border border-red-500/50 text-white p-3 rounded-lg text-xs"
              >
                {errors.form}
              </motion.div>
            )}
            
            <motion.form 
              className="space-y-3 sm:space-y-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Nome */}
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome completo" 
                className="w-full p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-gray-700 focus:border-pink-500 outline-none transition-all duration-300 text-xs sm:text-sm hover:border-gray-600" 
              />
              
              {/* Seção de documentos responsiva */}
              <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 space-y-3 border border-gray-700/50">
                <h3 className="text-xs sm:text-sm font-medium text-gray-300 text-center">Documentos</h3>
                
                <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
                  {/* CPF */}
                  <div className="space-y-1">
                    <label htmlFor="cpf-input" className="text-xs text-gray-300 block">CPF (Pessoa Física)</label>
                    <input 
                      id="cpf-input"
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      placeholder="000.000.000-00" 
                      className={`w-full p-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none text-xs sm:text-sm ${
                        errors.cpf ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-pink-500 hover:border-gray-600'
                      }`}
                    />
                    {errors.cpf && (
                      <p className="text-red-500 text-xs">
                        {errors.cpf}
                      </p>
                    )}
                  </div>
                  
                  {/* CNPJ */}
                  <div className="space-y-1">
                    <label htmlFor="cnpj-input" className="text-xs text-gray-300 block">CNPJ (Pessoa Jurídica)</label>
                    <input 
                      id="cnpj-input"
                      type="text"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      placeholder="00.000.000/0000-00" 
                      className={`w-full p-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none text-xs sm:text-sm ${
                        errors.cnpj ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-pink-500 hover:border-gray-600'
                      }`}
                    />
                    {errors.cnpj && (
                      <p className="text-red-500 text-xs">
                        {errors.cnpj}
                      </p>
                    )}
                  </div>
                </div>
                
                <p className="text-[10px] sm:text-xs text-gray-400 text-center">
                  É necessário preencher CPF e CNPJ corretamente.
                </p>
              </div>
              
              {/* Email */}
              <div className="space-y-1">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className={`w-full p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none text-xs sm:text-sm ${
                    errors.email ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-pink-500 hover:border-gray-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">
                    {errors.email}
                  </p>
                )}
              </div>
              
              {/* Telefone */}
              <div className="space-y-1">
                <label htmlFor="phone-input" className="text-xs text-gray-300 block">Telefone Celular</label>
                <input 
                  id="phone-input"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000" 
                  className={`w-full p-2 sm:p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none text-xs sm:text-sm ${
                    errors.phone ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-pink-500 hover:border-gray-600'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">
                    {errors.phone}
                  </p>
                )}
              </div>
              
              {/* Button mantendo design original */}
              <button 
                type="submit" 
                disabled={isSubmitting || !isFormValid}
                className={`w-full bg-diverse-yellow text-black px-3 sm:px-4 py-2 sm:py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 mt-2 relative text-xs sm:text-sm
                  ${(isSubmitting || !isFormValid) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Junte-se à Lista de Espera</span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" role="img">
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
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}