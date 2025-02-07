import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/src/i18n/dictionaries"

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `مشاريع ${params.category} | معتز جبر للتصميم الداخلي`,
    description: `استعرض مشاريعنا المميزة في فئة ${params.category} - تصاميم إبداعية وحلول مبتكرة من معتز جبر للتصميم الداخلي`,
  }
}

export default async function CategoryProjectsPage({
  params
}: { params: Promise<{ category: string, locale: 'en' | 'ar' }> }) {

  const meta = await params
  const dict = await getDictionary(meta.locale)

  const t = dict.common

  return (
    <div className="bg-white">
      <div className="relative h-[20vh] bg-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">{meta.category.charAt(0).toUpperCase() + meta.category.slice(1)}</h1>
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link
                          href={`/interior/${meta.category}/designs`}
                          className="relative h-72 rounded-lg overflow-hidden"
                        >
                          <div>
                            <Image
                              src={"/images/interior/logo.png"}
                              alt={t.designs}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <h3 className="text-xl font-semibold text-white">
                                {t.designs}
                              </h3>
                            </div>
                          </div>
                        </Link>


                        <Link
                          href={`/interior/${meta.category}/site`}
                          className="relative h-72 rounded-lg overflow-hidden"
                        >
                          <div>
                            <Image
                              src={"/images/interior/logo.png"}
                              alt={t.designs}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <h3 className="text-xl font-semibold text-white">
                                {t.site}
                              </h3>
                            </div>
                          </div>
                        </Link>
                  </div>
    </div>
  )
}


