'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StatisticCounter from '../components/statistics-counter'
import Link from 'next/link'
import Dictionary from '@/src/types/dictionary'
import useGetServerData from '@/src/hooks/use-get-server-data'
import { getTeamMembers } from '@/src/actions/team-member-action'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}


export default function AboutPage({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.about_page

  const { data: teamMembers } = useGetServerData(getTeamMembers, [])

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-white">
      
      <main className=" pb-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] mb-16">
          <Image
            src="/images/interior/logo.png"
            alt="Moataz Gabr Design"
            fill
            className="object-fill object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div 
              className="text-center max-w-5xl mx-auto px-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-app-secondary mb-6">{t.hero.title}</h1>
              <p className="text-xl text-white/90">{t.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-app-secondary">{t.about.title}</h2>
            <div className="space-y-4 text-lg text-primary">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.section>

          {/* Vision & Mission */}
          <motion.section 
            className="mb-16 grid md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-primary p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-app-secondary">{t.vision.title}</h2>
              <p className="text-lg">{t.vision.description}</p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-app-secondary">{t.mission.title}</h2>
              <p className="text-lg">{t.mission.description}</p>
            </div>
          </motion.section>

          {/* Areas of Expertise */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-app-secondary">{t.expertise.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.expertise.areas.map((area, index) => (
                <motion.div
                  key={area}
                  className="bg-primary text-center p-4 rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-md">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Portfolio Philosophy */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative h-[480px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/interior/logo.png"
                alt="Portfolio Example"
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                <div className="p-8">
                  <h2 className="text-3xl font-semibold mb-4 text-app-secondary">{t.portfolio.title}</h2>
                  <p className="text-lg max-w-2xl">{t.portfolio.description}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-lg text-primary">
              {t.portfolio.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.section>

          <div className="py-12 px-4 w-full text-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-app-secondary">{t.achievements.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatisticCounter end={500} title={t.achievements.completedProjects} />
                <StatisticCounter end={50} title={t.achievements.designAwards} />
                <StatisticCounter end={15} title={t.achievements.yearsExperience} />
                <StatisticCounter end={1000} title={t.achievements.satisfiedClients} />
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 px-4">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-app-secondary">{t.getToKnowUs.title}</h2>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto text-primary">
              {t.getToKnowUs.description}
            </p>
                  {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-8 text-black">خدماتنا</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto text-primary">
            نحن شركة رائدة في مجال التصميم الداخلي، نقدم خدماتنا في مجال التصميم الداخلي والتصميم المعماري والديكورات الداخلية، بالإضافة إلى خدمات تصميم المطابخ والوحدات والديكورات الخارجية. مع سنوات من الخبرة وفريق من المصممين الموهوبين، نسعى دائمًا لتقديم أعلى مستويات الجودة والتميز في كل مشروع.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: dictionary.home_page.services.interior_design,
                image:
                  "/images/special/1.jpg",
                  link: '/interior'
              },
              {
                title: dictionary.home_page.services.kitchen_design,
                image:
                  "/images/special/4.jpg",
                  link: '/kitchen'
              },
              {
                title: dictionary.home_page.services.real_estate,
                image:
                  "/images/interior/tower.jpg",
                  link: '/real-estate'
              },
            ].map((service, index) => (
              <Link href={service.link} key={index} className="group relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={500}
                  className="w-full h-[300px] object-fill hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end justify-start p-4 opacity-100 transition-colors duration-300 group-hover:bg-black/70">
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
          </div>
        </section>
      </main>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-app-secondary mb-4">{t.team.title}</h2>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              {t.team.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-[#002233] rounded-lg p-4 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-[#FF0000] mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-3">{member.position}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-gray-400 hover:text-[#FF0000] transition-colors"
                >
                  {member.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
