import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ProjectDetails from '@/app/components/ProjectDetails'

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  return (
    <>
        <Navbar />
        <ProjectDetails />
        <Footer />
    </>
  )
}

