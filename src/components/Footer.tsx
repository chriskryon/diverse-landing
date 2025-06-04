import { Download, DownloadIcon, Mail, MapPin, Smartphone } from "lucide-react"
import LogoDiverse from "./logos/Logo"

export default function Footer() {
  const footerLinks = {
    "Sable Credit": ["Features", "Security", "Apply"],
    Contact: ["Support", "Sales", "Help"],
    App: ["Download", "Features", "Updates"],
    Learn: ["Blog", "Resources", "Guides"],
    "Banking Basics": ["Getting Started", "FAQs", "Tips"],
  }

  return (
    <footer className="bg-gray-100 text-black py-16 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        {/* Join Section */}
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Descubra uma nova forma de gerenciar seu dinheiro com praticidade e segurança
            </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
              <DownloadIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Em breve na</div>
                <div className="font-medium">App Store</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
              <DownloadIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Em breve no</div>
                <div className="font-medium">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info & Copyright - Versão mais clean e responsiva */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center">
              <LogoDiverse fill="black" height={32} />
            </div>
            
            {/* Contato */}
            <div className="flex flex-col items-center md:items-end space-y-3">
              <a href="mailto:contato@diverse.com.vc" className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@diverse.com.vc</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, SP, Brasil</span>
              </div>
              
              {/* Copyright - mudado para ficar junto do contato */}
              <div className="text-xs text-gray-500 mt-4">© 2025 Diverse LTDA. Todos os direitos reservados.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
