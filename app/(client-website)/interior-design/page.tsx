"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import CTA from "../components/cta"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const categories = [
  {
    title: "سكني",
    subcategories: [
      { title: "شقق", image: "/images/interior/apartment.jpg" },
      { title: "فيلات", image: "/images/interior/villas.jpg" },
      { title: "أبراج ومباني", image: "/images/interior/tower.jpg" },
      { title: "شاليهات", image: "/images/interior/chalet.jpg" },
      { title: "محلات ومقاهي", image: "/images/interior/cafe.jpg" },
    ],
  },
  {
    title: "تجاري",
    image: "/images/interior/commercial.jpg",
  },
]

const galleryImages = [
  "/images/interior/projects/image copy 2.png",
  "/images/interior/projects/image copy 3.png",
  "/images/interior/projects/image copy 4.png",
  "/images/interior/projects/image copy 5.png",
  "/images/interior/projects/image copy 6.png",
  "/images/interior/projects/image copy 7.png",
  "/images/interior/projects/image copy 8.png",
  "/images/interior/projects/image copy 9.png",
  "/images/interior/projects/image copy 10.png",
  "/images/interior/projects/image copy 11.png",
]

export default function InteriorDesignPage() {
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image
            src="/images/interior/projects/image copy 11.png"
            alt="Interior Design"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div
              className="text-center max-w-4xl mx-auto px-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">التصميم الداخلي</h1>
              <p className="text-xl text-white/90">نحول مساحاتك إلى أعمال فنية تعكس شخصيتك</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <motion.section
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">خبراء في التصميم الداخلي</h2>
            <p className="text-lg max-w-3xl mx-auto">
              نقدم حلولاً إبداعية ومبتكرة في مجال التصميم الداخلي، سواء كان ذلك للمساحات السكنية أو التجارية. نحن نؤمن
              بأن كل مساحة لها قصة فريدة، ومهمتنا هي سرد هذه القصة من خلال التصميم.
            </p>
          </motion.section>

          {/* Categories Section */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.title} className="bg-black/30 rounded-lg overflow-hidden">
                  {/* <button
                    className="w-full p-4 flex justify-between items-center text-xl font-semibold"
                    onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                  >
                    {category.title}
                    <ChevronDown
                      className={`transition-transform ${
                        expandedCategory === category.title ? "transform rotate-180" : ""
                      }`}
                    />
                  </button> */}
                  <div className="p-4 text-xl">
                  {category.title}

                  </div>
                  { (
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.subcategories ? (
                        category.subcategories.map((subcat) => (
                          <Link href={'#'} className="relative h-48 rounded-lg overflow-hidden" key={subcat.title}>
                            <div>
                            <Image
                              src={subcat.image || "/placeholder.svg"}
                              alt={subcat.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <h3 className="text-xl font-semibold text-white">{subcat.title}</h3>
                            </div>
                          </div>
                          </Link>
                        ))
                      ) : (
                        <Link href={'#'} className="relative h-96 rounded-lg overflow-hidden md:col-span-2 lg:col-span-3">
                            <div>
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                          </div>
                        </div>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section
            className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            {["تصاميم مخصصة تعكس شخصيتك وأسلوب حياتك", "فريق من المصممين المحترفين ذوي الخبرة", "استخدام أحدث التقنيات والمواد في التصميم", "التزام بالمواعيد والميزانيات المحددة", "خدمة عملاء استثنائية طوال مراحل المشروع"].map((point, index) => (
              <div key={index} className="bg-black/30 rounded-lg px-4 py-8 text-center">
                <p className="text-white text-md font-semibold">{point}</p>
              </div>
            ))}
          </motion.section>

          {/* Creative Gallery */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <CTA />
        </div>
      </main>
    </div>
  )
}

