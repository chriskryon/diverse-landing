"use client";
import { motion } from 'framer-motion';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function GenericModal({ isOpen, onClose, title, children }: GenericModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative p-3 sm:p-5 bg-white rounded-2xl shadow-xl w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl m-auto border-2 border-diverse-pink"
        style={{ 
          maxHeight: 'calc(100vh - 40px)',
          overflow: 'auto'
        }}
      >
        <div className="flex justify-end mb-4">
          <button 
            type='button'
            onClick={onClose}
            className="text-diverse-pink hover:text-diverse-pink/80 transition-colors text-xl font-bold"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2"
        >
          {title}
        </motion.h1>
        
        <div className="text-black leading-relaxed prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-2xl font-bold mb-4 text-black">{children}</h1>,
              h2: ({children}) => <h2 className="text-xl font-bold mb-3 text-black">{children}</h2>,
              h3: ({children}) => <h3 className="text-lg font-bold mb-2 text-black">{children}</h3>,
              p: ({children}) => <p className="mb-3 text-black">{children}</p>,
              ul: ({children}) => <ul className="list-disc pl-6 mb-3 text-black">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal pl-6 mb-3 text-black">{children}</ol>,
              li: ({children}) => <li className="mb-1 text-black">{children}</li>,
              strong: ({children}) => <strong className="font-bold text-black">{children}</strong>,
              em: ({children}) => <em className="italic text-black">{children}</em>,
            }}
          >
            {typeof children === 'string'
              ? children
              : typeof children === 'number'
                ? children.toString()
                : ''}
          </ReactMarkdown>
        </div>
      </motion.div>
    </motion.div>
  );
}
