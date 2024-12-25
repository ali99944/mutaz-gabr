import TestimonialCard from './Testimonial'
import Testimonial from '@/lib/types/Testimonial'

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'عميل 1',
      role: 'مدير شركة',
      comment: 'ممتاز',
      avatar: '/assets/images/testimonial-1.jpg',
      rating: 4,
    },
    {
      name: 'عميل 2',
      role: 'مدير شركة',
      comment: 'ممتاز جداً',
      avatar: '/assets/images/testimonial-2.jpg',
      rating: 5,
    },
    {
      name: 'عميل 3',
      role: 'مدير شركة',
      comment: 'ممتاز',
      avatar: '/assets/images/testimonial-3.jpg',
      rating: 3,
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

