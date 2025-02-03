import type { Metadata } from "next"
import CategoryProjects from "../../components/category-projects"

// This is a mock function to simulate fetching projects from an API or database
async function getProjects(category: string) {
  // In a real application, you would fetch this data from an API or database
  console.log(category);
  
  const projects = [
    {
      id: 1,
      title: "شقة عصرية في القاهرة الجديدة",
      description: "تصميم داخلي أنيق لشقة في حي التجمع الخامس",
      image: "/images/interior/projects/image copy 2.png",
    },
    {
      id: 2,
      title: "شقة فاخرة بإطلالة على النيل",
      description: "تصميم داخلي فاخر لشقة تطل على نهر النيل في وسط القاهرة",
      image: "/images/interior/projects/image copy 3.png",
    },
    {
      id: 3,
      title: "استوديو مcompact في المعادي",
      description: "تصميم ذكي لاستوديو صغير يستغل المساحة بشكل مثالي",
      image: "/images/interior/projects/image copy 4.png",
    },
    {
      id: 4,
      title: "شقة عائلية في الشيخ زايد",
      description: "تصميم داخلي دافئ وعملي لشقة عائلية كبيرة",
      image: "/images/interior/projects/image copy 5.png",
    },
  ]
  return projects
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `مشاريع ${params.category} | معتز جابر للتصميم الداخلي`,
    description: `استعرض مشاريعنا المميزة في فئة ${params.category} - تصاميم إبداعية وحلول مبتكرة من معتز جابر للتصميم الداخلي`,
  }
}

export default async function CategoryProjectsPage({ params }: { params: { category: string } }) {
  const projects = await getProjects(params.category)

  return <CategoryProjects 
            category={params.category} 
            projects={projects} 
            hero_image="/images/interior/apartment.jpg"
        />
}

