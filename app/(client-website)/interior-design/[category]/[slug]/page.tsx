import ProjectDetails from "@/app/(client-website)/components/project-details"
import type { Metadata } from "next"

// This is a mock function to simulate fetching project data from an API or database
async function getProjectData(id: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    id: Number.parseInt(id),
    title: "شقة عصرية في القاهرة الجديدة",
    category: "شقق",
    location: "التجمع الخامس، القاهرة الجديدة",
    area: "150 متر مربع",
    completionDate: "2023",
    description:
      "هذا المشروع هو تجسيد للأناقة العصرية في قلب القاهرة الجديدة. قمنا بتصميم هذه الشقة لتلبي احتياجات عائلة حديثة تقدر الجمال والوظيفة على حد سواء. يجمع التصميم بين الألوان الهادئة والخطوط النظيفة لخلق مساحة معيشة مريحة وأنيقة.",
    specs: ["غرفة معيشة مفتوحة", "مطبخ حديث مجهز بالكامل", "3 غرف نوم", "2 حمام", "شرفة مع إطلالة على المدينة"],
    tags: ["عصري", "أنيق", "وظيفي", "مفتوح", "إضاءة طبيعية"],
    gallery: [
      "/images/interior/cafe.jpg",
      "/images/interior/commercial.jpg",
      "/images/interior/apartment.jpg",
      "/images/interior/chalet.jpg",
    ],
    similarProjects: [
      {
        id: 2,
        title: "شقة فاخرة بإطلالة على النيل",
        image: "/images/interior/projects/image copy 14.png",
      },
      {
        id: 3,
        title: "استوديو مدمج في المعادي",
        image: "/images/interior/projects/image copy 15.png",
      },
      {
        id: 4,
        title: "شقة عائلية في الشيخ زايد",
        image: "/images/interior/projects/image copy 16.png",
      },
    ],
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = await getProjectData(params.id)
  return {
    title: `${project.title} | معتز جابر للتصميم الداخلي`,
    description: `استعرض تفاصيل مشروع ${project.title} - تصميم داخلي مميز من معتز جابر للتصميم الداخلي`,
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projectData = await getProjectData(params.id)

  return <ProjectDetails project={projectData} />
}

