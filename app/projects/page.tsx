import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsShowcase from './components/ProjectsShowcase'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <ProjectsShowcase />
      <Footer />
    </main>
  )
}

