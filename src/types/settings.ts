export type StatisticItem = {
    id: string
    value: string
    label: string
  }
  
  export type ServiceItem = {
    id: string
    title: string
  }
  
  export type TeamMember = {
    id: string
    name: string
    title: string
    email: string
  }
  
  export type WorkingHours = {
    weekdays: {
      from: string
      to: string
    }
    weekend: {
      from: string
      to: string
    }
  }
  
  export type SocialMedia = {
    id: string
    platform: string
    url: string
  }
  
  export type WebsiteSettings = {
    statistics: StatisticItem[]
    services: ServiceItem[]
    team: TeamMember[]
    contact: {
      phone: string
      email: string
      address: string
      whatsapp: string
    }
    workingHours: WorkingHours
    socialMedia: SocialMedia[]
  }
  