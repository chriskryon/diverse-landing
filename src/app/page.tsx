"use client"
import CTAModal from "@/components/cta"
import { motion } from "framer-motion"
import {
  Check,
  Star,
  Download,
  Smartphone,
  CreditCard,
  Building,
  Package,
  TestTube,
  Globe,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function DiversePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <FixedNavigation openModal={openModal} />

      {/* Hero Section */}
      <HeroSection openModal={openModal} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Financial Control Section */}
      <FinancialControlSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer Section */}
      <FooterSection />

      <CTAModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  )
}

function FixedNavigation({ openModal }: { openModal: () => void }) {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className="flex items-center">
              <svg width="428" height="40" viewBox="0 0 428 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_5353_14046)">
<path d="M172.472 93.6801H161.5C160.819 93.6801 160.266 93.1311 160.266 92.4541V91.8909C160.266 90.8128 158.978 90.2752 158.182 91.0063C155.431 93.5294 151.967 94.7525 147.991 94.7525C136.549 94.7525 129 85.7694 129 72.1697C129 58.8999 136.3 50.0818 147.33 50.0818C151.452 50.0818 154.853 51.3135 157.612 53.8167C158.408 54.5392 159.688 53.9959 159.688 52.9235V46.7138C159.688 40.2453 164.967 35 171.476 35H172.472C173.154 35 173.706 35.549 173.706 36.226V92.457C173.706 93.1311 173.154 93.6801 172.472 93.6801ZM143.182 72.2522C143.182 79.5058 146.25 83.6247 151.641 83.6247C157.031 83.6247 160.183 79.5029 160.183 72.3347C160.183 65.1664 156.951 60.8797 151.644 60.8797C146.25 60.8797 143.182 64.9986 143.182 72.2522Z" fill="#F82D9E"/>
<path d="M196.525 45.5504H184.891C184.21 45.5504 183.657 45.0014 183.657 44.3244V36.226C183.657 35.549 184.21 35 184.891 35H196.525C197.206 35 197.759 35.549 197.759 36.226V44.3244C197.759 45.0014 197.206 45.5504 196.525 45.5504ZM196.525 93.6801H184.891C184.21 93.6801 183.657 93.1311 183.657 92.4541V52.3773C183.657 51.7003 184.21 51.1513 184.891 51.1513H196.525C197.206 51.1513 197.759 51.7003 197.759 52.3773V92.4541C197.759 93.1311 197.206 93.6801 196.525 93.6801Z" fill="#F82D9E"/>
<path d="M247.388 52.77L233.788 92.8468C233.619 93.3446 233.149 93.6803 232.62 93.6803H218.135C217.605 93.6803 217.136 93.3446 216.967 92.8468L203.363 52.77C203.094 51.9764 203.687 51.1543 204.531 51.1543H216.649C217.199 51.1543 217.682 51.5156 217.834 52.0418L224.361 74.6758C224.702 75.8563 226.385 75.8592 226.731 74.6787L233.33 52.039C233.482 51.5156 233.965 51.1543 234.515 51.1543H246.22C247.062 51.1543 247.657 51.9764 247.388 52.77Z" fill="#F82D9E"/>
<path d="M265.349 75.7962C264.616 75.7962 264.038 76.4306 264.121 77.1559C264.751 82.5833 268.286 85.6867 273.814 85.6867C277.472 85.6867 279.742 84.236 281.517 81.3317C281.741 80.9648 282.138 80.74 282.571 80.74H293.331C294.19 80.74 294.794 81.5934 294.488 82.3899C291.336 90.5679 283.77 94.9997 273.651 94.9997C260.296 94.9997 250.26 86.6766 250.26 72.9119C250.26 59.4771 259.715 50.0815 273.153 50.0815C287.251 50.0815 295.879 59.3946 295.879 74.5588V74.5702C295.879 75.2472 295.327 75.7962 294.645 75.7962H265.349ZM273.233 59.4771C268.684 59.4771 265.678 61.875 264.513 66.2499C264.304 67.0322 264.888 67.8002 265.704 67.8002H280.601C281.386 67.8002 281.97 67.0805 281.809 66.3182C280.956 62.2505 278.059 59.4771 273.233 59.4771Z" fill="#F82D9E"/>
<path d="M332.115 62.7516C332.07 62.7402 332.024 62.7317 331.978 62.7203C324.495 61.1217 317.441 66.8278 317.441 74.4341V92.4543C317.441 93.1313 316.889 93.6803 316.208 93.6803H304.657C303.975 93.6803 303.423 93.1313 303.423 92.4543V52.3775C303.423 51.7005 303.975 51.1515 304.657 51.1515H315.615C316.302 51.1515 316.854 51.7091 316.849 52.3889L316.829 54.2037C316.814 55.3643 318.28 55.8877 319.019 54.9888C321.638 51.7972 325.03 50.1616 329.968 50.1616C331.133 50.1616 331.755 50.2071 332.605 50.3636C333.192 50.4717 333.618 50.978 333.618 51.5697V61.554C333.615 62.3391 332.885 62.9194 332.115 62.7516Z" fill="#F82D9E"/>
<path d="M364.063 63.5992C363.496 63.5992 363.012 63.2152 362.869 62.669C362.062 59.614 359.812 58.6525 356.176 58.6525C352.526 58.6525 350.537 59.8899 350.537 62.1143C350.537 64.9987 353.937 65.3287 356.093 65.8236C360.49 66.731 364.801 67.5531 369.032 69.0379C374.589 71.0149 377.242 74.6417 377.242 80.163C377.242 89.311 369.528 94.8323 356.674 94.8323C346.798 94.8323 337.228 91.7175 335.968 81.0362C335.883 80.308 336.458 79.668 337.194 79.668H348.118C348.722 79.668 349.228 80.1032 349.334 80.6949C350.016 84.4952 352.875 85.6842 357.003 85.6842C360.985 85.6842 363.473 84.0372 363.473 81.315C363.473 79.0081 361.982 78.1007 356.256 76.8633C350.949 75.7909 347.797 74.9688 345.06 74.0614C339.587 72.1669 336.684 68.4577 336.684 63.1839C336.684 54.6133 343.735 49.9141 356.591 49.9141C366.015 49.9141 374.68 52.8439 375.88 62.2167C375.974 62.9478 375.396 63.5963 374.655 63.5963L364.063 63.5992Z" fill="#F82D9E"/>
<path d="M397.473 75.7962C396.74 75.7962 396.162 76.4306 396.245 77.1559C396.875 82.5833 400.41 85.6867 405.938 85.6867C409.596 85.6867 411.866 84.236 413.641 81.3317C413.865 80.9648 414.262 80.74 414.695 80.74H425.455C426.314 80.74 426.918 81.5934 426.612 82.3899C423.46 90.5679 415.894 94.9997 405.775 94.9997C392.42 94.9997 382.384 86.6766 382.384 72.9119C382.384 59.4771 391.839 50.0815 405.277 50.0815C419.375 50.0815 428.003 59.3946 428.003 74.5588V74.5702C428.003 75.2472 427.451 75.7962 426.769 75.7962H397.473ZM405.357 59.4771C400.808 59.4771 397.802 61.875 396.637 66.2499C396.428 67.0322 397.012 67.8002 397.828 67.8002H412.725C413.51 67.8002 414.094 67.0805 413.933 66.3182C413.083 62.2505 410.183 59.4771 405.357 59.4771Z" fill="#F82D9E"/>
</g>
<g clipPath="url(#clip1_5353_14046)">
<path d="M0 82.2364C0 70.8702 9.58519 61.654 21.4173 61.654H31.1825V52.8391C31.1825 39.2871 42.6113 28.3008 56.7046 28.3008H67.3556V15.6948C67.3556 7.02323 74.6651 0 83.6742 0C92.6905 0 100 7.02323 100 15.6948V82.2793C100 89.3097 94.0732 95 86.7636 95H67.3556V94.9928C67.226 94.9928 67.0892 95 66.9595 95H38.9745H36.67H0V82.2364Z" fill="#F82D9E"/>
</g>
<g clipPath="url(#clip2_5353_14046)">
<path d="M0 82.2364C0 70.8702 9.58519 61.654 21.4173 61.654H31.1825V52.8391C31.1825 39.2871 42.6113 28.3008 56.7046 28.3008H67.3556V15.6948C67.3556 7.02323 74.6651 0 83.6742 0C92.6905 0 100 7.02323 100 15.6948V82.2793C100 89.3097 94.0732 95 86.7636 95H67.3556V94.9928C67.226 94.9928 67.0892 95 66.9595 95H38.9745H36.67H0V82.2364Z" fill="#F82D9E"/>
</g>
<defs>
<clipPath id="clip0_5353_14046">
<rect width="299" height="60" fill="white" transform="translate(129 35)"/>
</clipPath>
<clipPath id="clip1_5353_14046">
<rect width="100" height="95" fill="white"/>
</clipPath>
<clipPath id="clip2_5353_14046">
<rect width="100" height="95" fill="white"/>
</clipPath>
</defs>
              </svg>
            </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              CREDIT
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              DEBIT
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              APP
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors font-medium">
              API's
            </a>
          </div>

          {/* CTA Button */}
          <button
          onClick={openModal}
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            ENTRAR NA LISTA DE ESPERA
          </button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection({ openModal }: { openModal: () => void }) {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Hero Content */}
      <div className="text-center px-6 pt-20 relative z-10">
        <h1 className="text-4xl lg:text-7xl font-light leading-tight mb-8 max-w-4xl mx-auto">
          Diversidade é nosso <span className="font-bold">ativo</span>
          .<br />
          <span className="font-bold">Seu crescimento</span>,
          <br />
          nosso objetivo.
        </h1>

        <button
        onClick={openModal}
        className="bg-[#edfb06] text-black px-12 py-4 rounded-full font-medium text-lg hover:bg-yellow-300 transition-colors">
          Explore
        </button>
      </div>

      {/* Credit Cards - Positioned like in reference image */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Card 1 */}
        <motion.div 
          className="absolute top-16 left-8 lg:left-24"
          initial={{ y: 0, rotate: 15 }}
          animate={{ 
        y: [0, -10, 0],
        transition: {
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror"
        }
          }}
          whileHover={{ 
        scale: 1.05,
        rotate: 20, // Added subtle rotation on hover
        transition: { duration: 0.3 }
          }}
        >
          <Image
        src="https://i.imgur.com/VNxvw3y.png"
        alt="Credit Card Gradient"
        width={320}
        height={200}
        className="shadow-2xl rounded-2xl"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="absolute bottom-20 right-16 lg:right-32"
          initial={{ y: 0, rotate: 34 }}
          animate={{ 
        y: [0, 10, 0],
        transition: {
          duration: 7,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror"
        }
          }}
          whileHover={{ 
        scale: 1.05,
        rotate: 28, // Added subtle rotation on hover (in opposite direction)
        transition: { duration: 0.3 }
          }}
        >
          <Image
        src="https://i.imgur.com/tQmhIJR.png"
        alt="Credit Card Zebra"
        width={320}
        height={200}
        className="shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "text-yellow-400",
    },
    {
      icon: Globe,
      title: "Geral",
      text: "Trazemos a diversidade como um diferencial competitivo.",
      color: "text-pink-500",
    },
    {
      icon: Building,
      title: "Conta Pessoa Jurídica",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "text-yellow-400",
    },
    {
      icon: Package,
      title: "Produtos Exclusivos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "text-pink-500",
    },
    {
      icon: TestTube,
      title: "Versão Beta",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "text-yellow-400",
    },
  ]

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            No hidden fees. No credit checks.
            <br />
            No more old-school banking credit.
          </h2>
        </div>

        <div className="relative flex justify-center mb-16">
          {/* iPhone Mockup */}
          <div className="relative z-10">
            <Image src="https://i.imgur.com/NkrGPNh.png" alt="iPhone Mockup" width={300} height={600} className="-rotate-20 shadow-2xl" />
          </div>

          {/* Floating Benefit Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
            {/* Left side cards */}
            {/* Left side cards - 3 aligned vertically to the left */}
            <div className="hidden lg:flex flex-col space-y-8 absolute left-0 top-1/2 -translate-y-1/2">
                {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-3 max-w-xs"
                  initial={{ y: 0 }}
                  animate={{ 
                  y: [0, -10, 0],
                  transition: {
                    duration: 4 + index * 0.5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror"
                  }
                  }}
                >
                  <benefit.icon className={`w-6 h-6 ${benefit.color} mt-1 flex-shrink-0`} />
                  <div>
                  <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                  <p className="text-xs text-black">{benefit.text}</p>
                  </div>
                </motion.div>
                ))}
            </div>
            {/* Right side cards - 2 aligned vertically to the right */}
            <div className="hidden lg:flex flex-col space-y-8 absolute right-0 top-1/2 -translate-y-1/2">
              {benefits.slice(3).map((benefit, index) => (
                <div
                  key={index + 3}
                  className="bg-white p-4 rounded-xl shadow-lg flex items-start space-x-3 max-w-xs"
                  style={{
                    animation: `float ${9.5 + index * 0.5}s ease-in-out infinite`,
                  }}
                >
                  <benefit.icon className={`w-6 h-6 ${benefit.color} mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-black">{benefit.title}</h4>
                    <p className="text-xs text-black">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </div>

        {/* Rendimento Pay Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Rendimento pay</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-pink-500 p-6 rounded-lg aspect-square flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FinancialControlSection() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-black text-4xl lg:text-5xl font-bold mb-6">
              Abertura de conta & cartão de crédito <span className="text-pink-500">em cinco minutos</span>.
            </h2>
          </div>

            <div className="bg-gray-50 rounded-2xl flex items-center justify-center h-full">
            {/* Dashboard Interface Image */}
            <Image
              src="https://i.imgur.com/FjZzBbF.png"
              alt="Dashboard Interface"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow-sm"
            />
            </div>
        </div>

        <div className="mt-12 bg-gray-900 text-white p-8 rounded-2xl">
          <p className="text-lg leading-relaxed">
            Earn 2% cash back on favorite brands. Earn 2% cash back on favorite brands. Get premium benefits and more
            customer service.
          </p>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const cards = [
    {
      name: "Sable Secured Credit & Debit Card",
      features: [
        "Build Credit History",
        "No Hidden Fees",
        "Instant Notifications",
        "Global Acceptance",
        "Cashback Rewards",
        "24/7 Support",
      ],
      price: "$0",
    },
    {
      name: "Sable Debit Card",
      features: [
        "No Credit Check",
        "No Hidden Fees",
        "Instant Notifications",
        "Global Acceptance",
        "Real-time Alerts",
        "Mobile Banking",
      ],
      price: "$0",
    },
  ]

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Compare Sable • Compare Sable</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl">
                <div className="mb-6 flex flex-col items-center text-center">
                {/* Credit Card Image */}
                <Image
                  src={index === 0 ? "https://i.imgur.com/2h0FCpo.png" : "https://i.imgur.com/wubzIic.png"}
                  alt={`Credit Card ${index + 1}`}
                  width={240}
                  height={150}
                  className="rounded-xl mb-4 shadow-md"
                />

                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                </div>

              <div className="space-y-3 mb-8">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold">{card.price}</div>
                <div className="text-gray-400 text-sm">Annual Fee</div>
              </div>

              <button className="w-full bg-[#edfb06] text-black py-3 rounded-xl font-medium hover:bg-yellow-300 transition-colors">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  const testimonials = [
    {
      text: "Fantastic customer service. I shifted from a traditional bank to Sable and I'm glad I made the switch.",
      author: "Sarah M.",
    },
    {
      text: "The best bank for immigrants in the US. Thank you Sable! I really enjoy the great things you're doing.",
      author: "Carlos R.",
    },
  ]

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-8 h-8 text-[#edfb06] fill-current" />
            <span className="text-4xl font-bold">4.8</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#edfb06] fill-current" />
                ))}
              </div>
              <blockquote className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"></div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  const footerLinks = {
    "Sable Credit": ["Features", "Security", "Apply"],
    Contact: ["Support", "Sales", "Help"],
    App: ["Download", "Features", "Updates"],
    Learn: ["Blog", "Resources", "Guides"],
    "Banking Basics": ["Getting Started", "FAQs", "Tips"],
  }

  return (
    <footer className="bg-gray-100 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Join Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Join over 400,000 accounts</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-medium">App Store</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
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

        {/* Contact Info */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <svg width="428" height="40" viewBox="0 0 428 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5353_14046)">
              <path d="M172.472 93.6801H161.5C160.819 93.6801 160.266 93.1311 160.266 92.4541V91.8909C160.266 90.8128 158.978 90.2752 158.182 91.0063C155.431 93.5294 151.967 94.7525 147.991 94.7525C136.549 94.7525 129 85.7694 129 72.1697C129 58.8999 136.3 50.0818 147.33 50.0818C151.452 50.0818 154.853 51.3135 157.612 53.8167C158.408 54.5392 159.688 53.9959 159.688 52.9235V46.7138C159.688 40.2453 164.967 35 171.476 35H172.472C173.154 35 173.706 35.549 173.706 36.226V92.457C173.706 93.1311 173.154 93.6801 172.472 93.6801ZM143.182 72.2522C143.182 79.5058 146.25 83.6247 151.641 83.6247C157.031 83.6247 160.183 79.5029 160.183 72.3347C160.183 65.1664 156.951 60.8797 151.644 60.8797C146.25 60.8797 143.182 64.9986 143.182 72.2522Z" fill="black"/>
              <path d="M196.525 45.5504H184.891C184.21 45.5504 183.657 45.0014 183.657 44.3244V36.226C183.657 35.549 184.21 35 184.891 35H196.525C197.206 35 197.759 35.549 197.759 36.226V44.3244C197.759 45.0014 197.206 45.5504 196.525 45.5504ZM196.525 93.6801H184.891C184.21 93.6801 183.657 93.1311 183.657 92.4541V52.3773C183.657 51.7003 184.21 51.1513 184.891 51.1513H196.525C197.206 51.1513 197.759 51.7003 197.759 52.3773V92.4541C197.759 93.1311 197.206 93.6801 196.525 93.6801Z" fill="black"/>
              <path d="M247.388 52.77L233.788 92.8468C233.619 93.3446 233.149 93.6803 232.62 93.6803H218.135C217.605 93.6803 217.136 93.3446 216.967 92.8468L203.363 52.77C203.094 51.9764 203.687 51.1543 204.531 51.1543H216.649C217.199 51.1543 217.682 51.5156 217.834 52.0418L224.361 74.6758C224.702 75.8563 226.385 75.8592 226.731 74.6787L233.33 52.039C233.482 51.5156 233.965 51.1543 234.515 51.1543H246.22C247.062 51.1543 247.657 51.9764 247.388 52.77Z" fill="black"/>
              <path d="M265.349 75.7962C264.616 75.7962 264.038 76.4306 264.121 77.1559C264.751 82.5833 268.286 85.6867 273.814 85.6867C277.472 85.6867 279.742 84.236 281.517 81.3317C281.741 80.9648 282.138 80.74 282.571 80.74H293.331C294.19 80.74 294.794 81.5934 294.488 82.3899C291.336 90.5679 283.77 94.9997 273.651 94.9997C260.296 94.9997 250.26 86.6766 250.26 72.9119C250.26 59.4771 259.715 50.0815 273.153 50.0815C287.251 50.0815 295.879 59.3946 295.879 74.5588V74.5702C295.879 75.2472 295.327 75.7962 294.645 75.7962H265.349ZM273.233 59.4771C268.684 59.4771 265.678 61.875 264.513 66.2499C264.304 67.0322 264.888 67.8002 265.704 67.8002H280.601C281.386 67.8002 281.97 67.0805 281.809 66.3182C280.956 62.2505 278.059 59.4771 273.233 59.4771Z" fill="black"/>
              <path d="M332.115 62.7516C332.07 62.7402 332.024 62.7317 331.978 62.7203C324.495 61.1217 317.441 66.8278 317.441 74.4341V92.4543C317.441 93.1313 316.889 93.6803 316.208 93.6803H304.657C303.975 93.6803 303.423 93.1313 303.423 92.4543V52.3775C303.423 51.7005 303.975 51.1515 304.657 51.1515H315.615C316.302 51.1515 316.854 51.7091 316.849 52.3889L316.829 54.2037C316.814 55.3643 318.28 55.8877 319.019 54.9888C321.638 51.7972 325.03 50.1616 329.968 50.1616C331.133 50.1616 331.755 50.2071 332.605 50.3636C333.192 50.4717 333.618 50.978 333.618 51.5697V61.554C333.615 62.3391 332.885 62.9194 332.115 62.7516Z" fill="black"/>
              <path d="M364.063 63.5992C363.496 63.5992 363.012 63.2152 362.869 62.669C362.062 59.614 359.812 58.6525 356.176 58.6525C352.526 58.6525 350.537 59.8899 350.537 62.1143C350.537 64.9987 353.937 65.3287 356.093 65.8236C360.49 66.731 364.801 67.5531 369.032 69.0379C374.589 71.0149 377.242 74.6417 377.242 80.163C377.242 89.311 369.528 94.8323 356.674 94.8323C346.798 94.8323 337.228 91.7175 335.968 81.0362C335.883 80.308 336.458 79.668 337.194 79.668H348.118C348.722 79.668 349.228 80.1032 349.334 80.6949C350.016 84.4952 352.875 85.6842 357.003 85.6842C360.985 85.6842 363.473 84.0372 363.473 81.315C363.473 79.0081 361.982 78.1007 356.256 76.8633C350.949 75.7909 347.797 74.9688 345.06 74.0614C339.587 72.1669 336.684 68.4577 336.684 63.1839C336.684 54.6133 343.735 49.9141 356.591 49.9141C366.015 49.9141 374.68 52.8439 375.88 62.2167C375.974 62.9478 375.396 63.5963 374.655 63.5963L364.063 63.5992Z" fill="black"/>
              <path d="M397.473 75.7962C396.74 75.7962 396.162 76.4306 396.245 77.1559C396.875 82.5833 400.41 85.6867 405.938 85.6867C409.596 85.6867 411.866 84.236 413.641 81.3317C413.865 80.9648 414.262 80.74 414.695 80.74H425.455C426.314 80.74 426.918 81.5934 426.612 82.3899C423.46 90.5679 415.894 94.9997 405.775 94.9997C392.42 94.9997 382.384 86.6766 382.384 72.9119C382.384 59.4771 391.839 50.0815 405.277 50.0815C419.375 50.0815 428.003 59.3946 428.003 74.5588V74.5702C428.003 75.2472 427.451 75.7962 426.769 75.7962H397.473ZM405.357 59.4771C400.808 59.4771 397.802 61.875 396.637 66.2499C396.428 67.0322 397.012 67.8002 397.828 67.8002H412.725C413.51 67.8002 414.094 67.0805 413.933 66.3182C413.083 62.2505 410.183 59.4771 405.357 59.4771Z" fill="black"/>
              </g>
              <g clipPath="url(#clip1_5353_14046)">
              <path d="M0 82.2364C0 70.8702 9.58519 61.654 21.4173 61.654H31.1825V52.8391C31.1825 39.2871 42.6113 28.3008 56.7046 28.3008H67.3556V15.6948C67.3556 7.02323 74.6651 0 83.6742 0C92.6905 0 100 7.02323 100 15.6948V82.2793C100 89.3097 94.0732 95 86.7636 95H67.3556V94.9928C67.226 94.9928 67.0892 95 66.9595 95H38.9745H36.67H0V82.2364Z" fill="black"/>
              </g>
              <g clipPath="url(#clip2_5353_14046)">
              <path d="M0 82.2364C0 70.8702 9.58519 61.654 21.4173 61.654H31.1825V52.8391C31.1825 39.2871 42.6113 28.3008 56.7046 28.3008H67.3556V15.6948C67.3556 7.02323 74.6651 0 83.6742 0C92.6905 0 100 7.02323 100 15.6948V82.2793C100 89.3097 94.0732 95 86.7636 95H67.3556V94.9928C67.226 94.9928 67.0892 95 66.9595 95H38.9745H36.67H0V82.2364Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_5353_14046">
              <rect width="299" height="60" fill="white" transform="translate(129 35)"/>
              </clipPath>
              <clipPath id="clip1_5353_14046">
              <rect width="100" height="95" fill="white"/>
              </clipPath>
              <clipPath id="clip2_5353_14046">
              <rect width="100" height="95" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>

            <div className="space-y-2 lg:text-right">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contact: email@quacard.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">London, NY, USA</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">© 2024 Diverse. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
