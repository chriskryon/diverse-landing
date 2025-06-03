"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { submitFormData } from '@/actions/form';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    cnpj: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState({
    cpf: '',
    cnpj: '',
    phone: '',
    email: '',
    form: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    
    const nameValid = formData.name.trim().length > 0;
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone.replace(/\D/g, ''));  
    const unmaskedCPF = formData.cpf.replace(/\D/g, '');
    const cpfValid = unmaskedCPF.length === 11 && validateCPF(unmaskedCPF);
    const unmaskedCNPJ = formData.cnpj.replace(/\D/g, '');
    const cnpjValid = unmaskedCNPJ.length === 14 && validateCNPJ(unmaskedCNPJ);    
    
    // Todos os campos devem ser válidos
    setIsFormValid(nameValid && emailValid && phoneValid && cpfValid && cnpjValid);
  }, [formData, isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Fechar o modal apenas se o clique foi diretamente no backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Aplica máscara de CPF: 000.000.000-00
  const maskCPF = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // Limita a 11 dígitos
  };

  // Aplica máscara de CNPJ: 00.000.000/0000-00
  const maskCNPJ = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // Limita a 14 dígitos
  };

  // Aplica máscara de telefone: (00) 00000-0000
  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .replace(/(\d{5}-\d{4})\d+?$/, '$1'); // Limita a 11 dígitos
  };

  // Valida CPF
  const validateCPF = (cpf: string) => {
    const cleanCpf = cpf.replace(/[^\d]+/g, '');
    
    if (cleanCpf.length !== 11 || 
        cleanCpf === '00000000000' || 
        cleanCpf === '11111111111' || 
        cleanCpf === '22222222222') {
      return false;
    }
    
    // Validação de CPF
    let soma = 0;
    let resto: number;
    
    for (let i = 1; i <= 9; i++) {
      soma = soma + Number.parseInt(cleanCpf.substring(i-1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== Number.parseInt(cleanCpf.substring(9, 10))) return false;
    
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma = soma + Number.parseInt(cleanCpf.substring(i-1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== Number.parseInt(cleanCpf.substring(10, 11))) return false;
    
    return true;
  };

  // Valida CNPJ
  const validateCNPJ = (cnpj: string) => {
    const cleanCnpj = cnpj.replace(/[^\d]+/g, '');
    
    if (cleanCnpj.length !== 14 ||
        cleanCnpj === '00000000000000' || 
        cleanCnpj === '11111111111111') {
      return false;
    }
    
    // Validação do CNPJ
    let tamanho = cleanCnpj.length - 2;
    let numeros = cleanCnpj.substring(0, tamanho);
    const digitos = cleanCnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== Number.parseInt(digitos.charAt(0))) return false;
    
    tamanho = tamanho + 1;
    numeros = cleanCnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += Number.parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== Number.parseInt(digitos.charAt(1))) return false;
    
    return true;
  };

  // Valida telefone
  const validatePhone = (phone: string) => {
    const unmaskedPhone = phone.replace(/\D/g, '');
    return unmaskedPhone.length >= 10 && unmaskedPhone.length <= 11;
  };

  // Valida email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Gerencia a mudança nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cpf') {
      const maskedValue = maskCPF(value);
      
      setFormData({
        ...formData,
        [name]: maskedValue
      });
      
      // Valida apenas se tiver o tamanho completo
      const unmaskedValue = maskedValue.replace(/\D/g, '');
      if (unmaskedValue.length === 11) {
        const isValid = validateCPF(unmaskedValue);
        setErrors({
          ...errors,
          cpf: isValid ? '' : 'CPF inválido'
        });
      } else {
        setErrors({ ...errors, cpf: '' });
      }
    } 
    else if (name === 'cnpj') {
      const maskedValue = maskCNPJ(value);
      
      setFormData({
        ...formData,
        [name]: maskedValue
      });
      
      // Valida apenas se tiver o tamanho completo
      const unmaskedValue = maskedValue.replace(/\D/g, '');
      if (unmaskedValue.length === 14) {
        const isValid = validateCNPJ(unmaskedValue);
        setErrors({
          ...errors,
          cnpj: isValid ? '' : 'CNPJ inválido'
        });
      } else {
        setErrors({ ...errors, cnpj: '' });
      }
    }
    else if (name === 'phone') {
      const maskedValue = maskPhone(value);
      
      setFormData({
        ...formData,
        [name]: maskedValue
      });
      
      // Valida telefone se tiver pelo menos um dígito
      const unmaskedValue = maskedValue.replace(/\D/g, '');
      if (unmaskedValue.length > 0) {
        const isValid = validatePhone(unmaskedValue);
        setErrors({
          ...errors,
          phone: isValid ? '' : 'Telefone inválido'
        });
      } else {
        setErrors({ ...errors, phone: '' });
      }
    }
    else if (name === 'email') {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Validar email quando o campo tiver algum valor
      if (value) {
        const isValid = validateEmail(value);
        setErrors({
          ...errors,
          email: isValid ? '' : 'E-mail inválido'
        });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }
    else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setErrors({...errors, form: 'Por favor, preencha seu nome completo'});
      return;
    }
    
    if (!formData.email.trim()) {
      setErrors({...errors, email: 'E-mail é obrigatório', form: 'Por favor, preencha seu e-mail'});
      return;
    }
    
    if (!formData.phone.trim()) {
      setErrors({...errors, phone: 'Telefone é obrigatório', form: 'Por favor, forneça um número de telefone'});
      return;
    }
    
    // Verifica e-mail
    if (!validateEmail(formData.email)) {
      setErrors({...errors, email: 'E-mail inválido', form: 'Por favor, forneça um e-mail válido'});
      return;
    }
    
    // Validação do CPF - agora obrigatório
    const unmaskedCPF = formData.cpf.replace(/\D/g, '');
    if (unmaskedCPF.length === 0) {
      setErrors({...errors, cpf: 'CPF é obrigatório', form: 'Por favor, forneça um CPF'});
      return;
    } if (unmaskedCPF.length !== 11 || !validateCPF(unmaskedCPF)) {
      setErrors({...errors, cpf: 'CPF inválido', form: 'Por favor, forneça um CPF válido'});
      return;
    }
    
    // Validação do CNPJ - agora obrigatório
    const unmaskedCNPJ = formData.cnpj.replace(/\D/g, '');
    if (unmaskedCNPJ.length === 0) {
      setErrors({...errors, cnpj: 'CNPJ é obrigatório', form: 'Por favor, forneça um CNPJ'});
      return;
    } if (unmaskedCNPJ.length !== 14 || !validateCNPJ(unmaskedCNPJ)) {
      setErrors({...errors, cnpj: 'CNPJ inválido', form: 'Por favor, forneça um CNPJ válido'});
      return;
    }
    
    // Validação do telefone
    const unmaskedPhone = formData.phone.replace(/\D/g, '');
    if (!validatePhone(unmaskedPhone)) {
      setErrors({...errors, phone: 'Telefone inválido', form: 'Por favor, forneça um número de telefone válido'});
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Envia para o server action
      const result = await submitFormData({
        name: formData.name,
        cpf: formData.cpf,
        cnpj: formData.cnpj,
        email: formData.email,
        phone: formData.phone
      });
      
      if (result.error) {
        setErrors({...errors, form: result.error});
      } else {
        // Sucesso
        setSuccess(true);
        // Limpa o formulário
        setFormData({
          name: '',
          cpf: '',
          cnpj: '',
          email: '',
          phone: ''
        });
        setErrors({ cpf: '', cnpj: '', phone: '', email: '', form: '' });
        
        // Opcional: fechar o modal após alguns segundos de sucesso
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      setErrors({...errors, form: 'Erro ao enviar o formulário. Tente novamente.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative p-8 bg-black/80 backdrop-blur-md rounded-2xl shadow-xl max-w-2xl m-4 border-2 border-[rgba(249,45,158,0.7)]"
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
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Lista de espera
            </motion.h1>
            
            <p className="text-lg text-gray-200 mb-6">
              Gestão financeira inteligente e taxas ocultas.
            </p>
            
            {errors.form && (
              <div className="bg-red-900/40 border border-red-500/50 text-white p-3 rounded-lg mb-4 text-sm">
                {errors.form}
              </div>
            )}
            
            <motion.form 
              className="flex flex-col gap-4 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome completo" 
                className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-gray-700 focus:border-pink-500 outline-none transition-colors" 
              />
              
              {/* Campo de CPF */}
              <div className="relative">
                <label htmlFor="cpf-input" className="text-sm text-gray-300 mb-1 block">CPF (Pessoa Física)</label>
                <input 
                  id="cpf-input"
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00" 
                  className={`p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none ${
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
                <label htmlFor="cnpj-input" className="text-sm text-gray-300 mb-1 block">CNPJ (Pessoa Jurídica)</label>
                <input 
                  id="cnpj-input"
                  type="text"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleChange}
                  placeholder="00.000.000/0000-00" 
                  className={`p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none ${
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
                  className={`p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none ${
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
                <label htmlFor="phone-input" className="text-sm text-gray-300 mb-1 block">Telefone Celular</label>
                <input 
                  id="phone-input"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000" 
                  className={`p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border transition-colors w-full focus:outline-none ${
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
                className={`bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition-colors mt-4 relative
                  ${(isSubmitting || !isFormValid) ? 'opacity-50 cursor-not-allowed' : ''}
                `}
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
          </>
        )}
      </motion.div>
    </motion.div>
  );
}