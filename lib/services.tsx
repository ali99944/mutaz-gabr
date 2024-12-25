import { IServiceDetails } from '@/lib/types/service'
import { FaRuler, FaPaintBrush, FaTools, FaClock, FaAward } from 'react-icons/fa'

export const services: IServiceDetails[] = [
  {
    slug: 'luxury-kitchens',
    title: 'مطابخ فاخرة',
    description: 'نقدم تصاميم مطابخ فاخرة تجمع بين الأناقة والوظائفية، مع استخدام أفضل الخامات والتقنيات الحديثة.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80',
    features: [
      {
        icon: <FaRuler className="text-4xl" />,
        title: 'تصميم مخصص',
        description: 'نصمم كل مطبخ بشكل فريد ليناسب ذوقك واحتياجاتك'
      },
      {
        icon: <FaPaintBrush className="text-4xl" />,
        title: 'جودة عالية',
        description: 'نستخدم أفضل الخامات والتقنيات لضمان مطبخ يدوم طويلاً'
      },
      {
        icon: <FaTools className="text-4xl" />,
        title: 'تنفيذ احترافي',
        description: 'فريقنا من الحرفيين المهرة يضمن تنفيذاً دقيقاً لكل تفصيل'
      },
      {
        icon: <FaClock className="text-4xl" />,
        title: 'التسليم في الموعد',
        description: 'نلتزم بالجداول الزمنية المتفق عليها لضمان رضا العملاء'
      },
      {
        icon: <FaAward className="text-4xl" />,
        title: 'ضمان شامل',
        description: 'نقدم ضمانًا شاملاً على جميع أعمالنا لراحة بالك'
      },
    ],
    steps: [
      {
        title: 'استشارة أولية',
        description: 'نجتمع معك لفهم احتياجاتك وتفضيلاتك وميزانيتك للمطبخ الجديد.',
        image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1600&q=80'
      },
      {
        title: 'التصميم',
        description: 'نقوم بإنشاء تصميم مفصل لمطبخك، مع مراعاة كل التفاصيل الوظيفية والجمالية.',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80'
      },
      {
        title: 'اختيار المواد',
        description: 'نساعدك في اختيار أفضل الخامات والأجهزة التي تناسب تصميم مطبخك وميزانيتك.',
        image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1600&q=80'
      },
      {
        title: 'التصنيع',
        description: 'نقوم بتصنيع وحدات المطبخ في ورشتنا المتخصصة باستخدام أحدث التقنيات.',
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80'
      },
      {
        title: 'التركيب',
        description: 'يقوم فريقنا المحترف بتركيب المطبخ في منزلك بدقة وعناية فائقة.',
        image: 'https://images.unsplash.com/photo-1556185781-a47769abb7ee?auto=format&fit=crop&w=1600&q=80'
      },
    ],
    testimonials: [
      {
        name: 'أحمد محمود',
        role: 'عميل',
        comment: 'تجربة رائعة مع معتز جابر. تم تنفيذ المطبخ بدقة عالية وجودة ممتازة.',
        avatar: '/assets/images/avatar1.jpg',
        rating: 5,
      },
      {
        name: 'سارة علي',
        role: 'عميلة',
        comment: 'أسلوب عمل احترافي ونتائج مبهرة. أنصح بالتعامل مع معتز لكل من يبحث عن التميز.',
        avatar: '/assets/images/avatar2.jpg',
        rating: 5,
      },
      {
        name: 'محمد خالد',
        role: 'عميل',
        comment: 'تم تنفيذ مطبخي بشكل يفوق التوقعات. شكراً لفريق معتز جابر على الإبداع والاحترافية.',
        avatar: '/assets/images/avatar3.jpg',
        rating: 5,
      },
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // Add more services here...
]

export async function getServiceDetails(slug: string): Promise<IServiceDetails> {
  const service = services.find(s => s.slug === slug)
  if (!service) {
    throw new Error(`Service not found: ${slug}`)
  }
  return service
}

