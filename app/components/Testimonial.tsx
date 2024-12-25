import Testimonial from '@/lib/types/Testimonial'
import Image from 'next/image'
import { FaStar, FaQuoteRight } from 'react-icons/fa'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#004851] p-4">
        <FaQuoteRight className="text-3xl text-[#DF2935]" />
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.comment}&rdquo;</p>
        <div className="flex items-center">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full ml-4 border-2 border-[#004851]"
          />
          <div>
            <h4 className="font-bold text-lg text-[#004851]">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
        <div className="mt-4 flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} ml-1`} />
          ))}
        </div>
      </div>
    </div>
  )
}

