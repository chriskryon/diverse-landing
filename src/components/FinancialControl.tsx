import Image from "next/image"
import Dashboard from "../../public/images/dashboard.png"

export default function FinancialControl() {
  return (
    <section className="bg-white text-black py-20 px-6 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-black text-4xl lg:text-5xl font-bold mb-6">
              Abertura de conta & cartão de crédito <span className="text-diverse-pink">em cinco minutos</span>.
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl flex items-center justify-center h-full">
            {/* Dashboard Interface Image */}
            <Image
              src={Dashboard}
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
