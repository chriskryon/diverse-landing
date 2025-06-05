import { Star } from "lucide-react"

export default function Reviews() {
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
    <section className="bg-black py-20 px-6 overflow-x-hidden w-full">
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
                <div className="w-10 h-10 bg-diverse-pink rounded-full" />
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
