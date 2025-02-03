import type { Metadata } from "next"
import CategoryProjects from "../../components/category-projects"
import { getProjects } from "@/src/actions/project"

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `مشاريع ${params.category} | معتز جابر للتصميم الداخلي`,
    description: `استعرض مشاريعنا المميزة في فئة ${params.category} - تصاميم إبداعية وحلول مبتكرة من معتز جابر للتصميم الداخلي`,
  }
}

export default async function CategoryProjectsPage({ params }: { params: { category: string } }) {
  const projects = await getProjects('interior', params.category)

  return <CategoryProjects 
            category={params.category} 
            projects={projects} 
            hero_image="/images/interior/apartment.jpg"
        />
}

