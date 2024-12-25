import { ReactNode } from 'react'
import Testimonial from './Testimonial'

export interface ServiceFeature {
  icon: ReactNode
  title: string
  description: string
}

export interface ServiceStep {
  title: string
  description: string
  image: string
}

export interface IServiceDetails {
  slug: string
  title: string
  description: string
  heroImage: string
  features: ServiceFeature[]
  steps: ServiceStep[]
//   gallery: string[]
  testimonials: Testimonial[]
  videoUrl: string
}

