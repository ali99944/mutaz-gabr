import type { Metadata } from "next"
import ContactPage from "../components/contact-page"

export const metadata: Metadata = {
  title: "اتصل بنا | معتز جابر للتصميم الداخلي",
  description:
    "تواصل مع معتز جابر للتصميم الداخلي للاستفسارات وحجز الاستشارات - نحن هنا لمساعدتك في تحويل مساحتك إلى عمل فني",
}

export default function Contact() {
  return <ContactPage />
}

