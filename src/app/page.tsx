"use client"
import ApiSection from "@/components/ApiSection"
import Benefits from "@/components/benefits"
import CTAModal from "@/components/CallToAction"
import FinancialControl from "@/components/FinancialControl"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import { useState } from "react"

export default function DiversePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden w-full">
      {/* Fixed Navigation */}
      <Navigation openModal={openModal} />

      {/* Hero Section */}
      <Hero openModal={openModal} />

      {/* Benefits Section */}
      <Benefits />

      {/* Financial Control Section */}
      <FinancialControl />

      {/* Comparison Section */}
      {/* <Comparison /> */}

      {/* Reviews Section */}
      {/* <Reviews /> */}

      {/* API */}
      <ApiSection />

      {/* Footer Section */}
      <Footer />

      <CTAModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
