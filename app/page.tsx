

import { Metadata } from "next"
import Home from "./Home"




export const metadata: Metadata = {
  title: 'معتز جبر - تشطيبات المطابخ والديكور',
  description: 'تصميم وتنفيذ أفخم المطابخ والديكورات الداخلية بأعلى جودة',
}

export default function Page () {
  return <Home />
}