"use client";
import { DownloadIcon, Mail, MapPin } from "lucide-react"
import LogoDiverse from "./logos/Logo"
import { useState } from "react"
import GenericModal from "./GenericModal"
import { footerContent } from "@/data/footerContent"

export default function Footer() {
  const [modalOpen, setModalOpen] = useState<string | null>(null)

  const footerLinks = {
    "Sobre": ["Quem Somos", "Nossa Missão", "Carreiras"],
    "Produtos": ["Cartão de Crédito", "Conta Digital", "Seguros"],
    "Suporte": ["Central de Ajuda", "FAQ", "Contato"],
    "Legal": ["Termos de Uso", "Privacidade", "Segurança"],
  }

  const handleLinkClick = (linkName: string) => {
    setModalOpen(linkName)
  }

  const closeModal = () => {
    setModalOpen(null)
  }

  return (
    <>
      <footer className="bg-gray-100 text-zinc-900 py-16 px-6 overflow-x-hidden w-full">
        <div className="max-w-6xl mx-auto bg-gray-100">
          {/* Join Section */}
          <div className="text-center mb-16 bg-gray-100">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-zinc-900">
              Sua vida financeira. Seu jeito.
              </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button
              className="flex items-center w-56 h-16 space-x-3 bg-zinc-900 text-white px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
              style={{ minWidth: "224px", minHeight: "64px" }}
              >
              <DownloadIcon className="w-6 h-6 text-white" />
              <div className="text-left text-white">
                <div className="text-xs text-white">Em breve na</div>
                <div className="font-medium text-white">App Store</div>
              </div>
              </button>
              <button
              className="flex items-center w-56 h-16 space-x-3 bg-zinc-900 text-white px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors"
              style={{ minWidth: "224px", minHeight: "64px" }}
              >
              <DownloadIcon className="w-6 h-6 text-white" />
              <div className="text-left text-white">
                <div className="text-xs text-white">Em breve no</div>
                <div className="font-medium text-white">Google Play</div>
              </div>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12 bg-gray-100">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="bg-gray-100">
                <h3 className="font-bold mb-4 text-zinc-900">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <button 
                        onClick={() => handleLinkClick(link)}
                        className="text-zinc-600 hover:text-zinc-900 transition-colors text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info & Copyright */}
          <div className="border-t border-gray-200 pt-8 bg-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 bg-gray-100">
              {/* Logo */}
              <div className="flex items-center self-start bg-gray-100">
                <LogoDiverse fill="#18181b" height={32} />
              </div>
              
              {/* Contato */}
              <div className="flex flex-col items-center md:items-end space-y-3 bg-gray-100">
                <a href="mailto:contato@diverse.com.vc" className="flex items-center space-x-2 text-zinc-900 hover:text-zinc-600 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-900" />
                  <span className="text-sm text-zinc-900">contato@diverse.com.vc</span>
                </a>
                <div className="flex items-center space-x-2 text-zinc-900">
                  <MapPin className="w-4 h-4 text-zinc-900" />
                  <span className="text-sm text-zinc-900">São Paulo, SP, Brasil</span>
                </div>
                
                {/* Copyright - mudado para ficar junto do contato */}
                <div className="text-xs text-zinc-500 mt-4">© 2025 Diverse LTDA. Todos os direitos reservados.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Generic Modal */}
      {modalOpen && footerContent[modalOpen] && (
        <GenericModal
          isOpen={!!modalOpen}
          onClose={closeModal}
          title={footerContent[modalOpen].title}
        >
          {footerContent[modalOpen].content}
        </GenericModal>
      )}
    </>
  )
}