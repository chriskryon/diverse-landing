import { Download, DownloadIcon, Mail, MapPin, Smartphone } from "lucide-react"
import LogoDiverse from "./logos/Logo"

export default function Footer() {
  const footerLinks = {
    "Sobre": ["Quem Somos", "Nossa Missão", "Carreiras"],
    "Produtos": ["Cartão de Crédito", "Conta Digital", "Seguros"],
    "Suporte": ["Central de Ajuda", "FAQ", "Contato"],
    "Legal": ["Termos de Uso", "Privacidade", "Segurança"],
  }

  return (
    <footer className="bg-gray-50 text-black py-10 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        {/* Join Section */}
        <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight tracking-tight">
            Sua vida financeira,  <span className="underline decoration-wavy decoration-2 decoration-pink-400">seu jeito.</span>
            </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button className="flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg group">
              <DownloadIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <div className="text-sm opacity-80">Em breve na</div>
                <div className="font-semibold text-lg">App Store</div>
              </div>
            </button>
            <button className="flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg group">
              <DownloadIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <div className="text-left">
                <div className="text-sm opacity-80">Em breve no</div>
                <div className="font-semibold text-lg">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-6 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center self-start transition-transform hover:scale-105 duration-200">
              <LogoDiverse fill="black" height={36} />
            </div>
            
            {/* Contato */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a href="mailto:contato@diverse.com.vc" className="flex items-center space-x-3 hover:text-gray-600 transition-all duration-300 hover:scale-105 group">
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="text-base font-medium">contato@diverse.com.vc</span>
              </a>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="text-base">São Paulo, SP, Brasil</span>
              </div>
              
              <div className="text-sm text-gray-500 mt-6">© 2025 Diverse LTDA. Todos os direitos reservados.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}