import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import NewServicesContent from "./components/ServicesContent";

export default function NewServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <NavbarComponent website_name={'Moataz gabr'}/>
      <NewServicesContent />
      <Footer />
    </main>
  )
}

