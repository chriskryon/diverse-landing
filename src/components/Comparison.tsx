import { Check } from "lucide-react"
import Image from "next/image"

export default function Comparison() {
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
    <section className="bg-black py-20 px-6 overflow-x-hidden w-full">
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
