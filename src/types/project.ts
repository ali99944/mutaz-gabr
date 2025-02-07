import Design from "./design"

export enum ProjectCategory {
    interior = "interior",
    kitchen = "kitchen"
}

export interface ProjectImage {
    id: number
    name: string
    src: string
    project_id: number
    project: Project
}

export interface Project {
    id: number
    name: string
    client_name: string
    area_size: number
    budget: number
    description: string
    specifications: string
    execution_days: number
    image: string
    gallery: ProjectImage[]
    category: ProjectCategory
    sub_category: string
    design?: Design
}
