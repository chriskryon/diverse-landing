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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl border-2 border-diverse-pink"
        style={{ 
          maxHeight: 'calc(100vh - 80px)',
          overflow: 'hidden'
        }}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 pb-0">
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"
          >
            {title}
          </motion.h1>
          
          <button 
            type='button'
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-diverse-pink/10 hover:bg-diverse-pink/20 text-diverse-pink hover:text-diverse-pink transition-all duration-200 hover:scale-105 border border-diverse-pink/30"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content with scroll */}
        <div className="px-6 pb-6 pt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-700 leading-relaxed prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
          >
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-3">{children}</h1>,
                h2: ({children}) => <h2 className="text-xl font-semibold mb-4 text-gray-900 mt-8">{children}</h2>,
                h3: ({children}) => <h3 className="text-lg font-semibold mb-3 text-gray-900 mt-6">{children}</h3>,
                p: ({children}) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-none space-y-2 mb-4">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal pl-5 space-y-2 mb-4 text-gray-700">{children}</ol>,
                li: ({children}) => (
                  <li className="text-gray-700 flex items-start">
                    <span className="w-1.5 h-1.5 bg-diverse-pink rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>{children}</span>
                  </li>
                ),
                strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                em: ({children}) => <em className="italic text-gray-600">{children}</em>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-diverse-pink bg-gray-50 pl-4 py-2 my-4 italic text-gray-600">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {typeof children === 'string'
                ? children
                : typeof children === 'number'
                  ? children.toString()
                  : ''}
            </ReactMarkdown>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
