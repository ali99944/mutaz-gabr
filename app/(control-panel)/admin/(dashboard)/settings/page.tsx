"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {TeamSection} from "./components/team-section"
import {StatisticsSection} from "./components/statistics-section"

export default function SettingsPage() {


  return (
    <div className="p-4">
      <Card className="relative overflow-hidden shadow-sm rounded">

        <Tabs defaultValue="team" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-11">
            {/* <TabsTrigger
              value="contact"
              className="rounded-none border-b-2 border-transparent px-4 py-3 hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              معلومات الاتصال
            </TabsTrigger> */}
            <TabsTrigger
              value="team"
              className="rounded-none border-b-2 border-transparent px-4 py-3 hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              الفريق
            </TabsTrigger>
            <TabsTrigger
              value="statistics"
              className="rounded-none border-b-2 border-transparent px-4 py-3 hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              الإحصائيات
            </TabsTrigger>
            {/* <TabsTrigger
              value="services"
              className="rounded-none border-b-2 border-transparent px-4 py-3 hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              الخدمات
            </TabsTrigger> */}
          </TabsList>

          <div className="p-4 sm:p-6">
            {/* <TabsContent value="contact" className="m-0">
              <ContactSection
                contact={settings.contact}
                workingHours={settings.workingHours}
                socialMedia={settings.socialMedia}
                onChange={(newData) => setSettings({ ...settings, ...newData })}
              />
            </TabsContent> */}

            <TabsContent value="team" className="m-0">
              <TeamSection />
            </TabsContent>

            <TabsContent value="statistics" className="m-0">
              <StatisticsSection />
            </TabsContent>

            {/* <TabsContent value="services" className="m-0">
              <ServicesSection
                services={settings.services}
                onChange={(services) => setSettings({ ...settings, services })}
              />
            </TabsContent> */}
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
