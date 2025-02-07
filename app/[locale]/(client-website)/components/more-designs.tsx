import Link from 'next/link'
import Image from 'next/image'

interface Design {
  id: string
  title: string
  image: string
}

interface MoreDesignsProps {
  designs: Design[]
}

export function MoreDesigns({ designs }: MoreDesignsProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">تصفح المزيد من التصاميم</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {designs.map((design) => (
          <Link href={`/designs/${design.id}`} key={design.id} className="group rounded-lg overflow-hidden">
            <div className="relative rounded-lg shadow-sm h-52">
              <Image
                src={design.image || "/placeholder.svg"}
                alt={design.title}
                layout="fill"
                objectFit="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                <h3 className="text-sm font-semibold">{design.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

