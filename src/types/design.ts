
export enum DesignCategory {
    interior = "interior",
    kitchen = "kitchen",
    real_estate = "real_estate"
}

export enum Privacy {
    public = "public",
    private = "private"
}

export interface DesignImage {
    id: number
    src: string
    name: string
    design_id: number
    design: Design
}

export interface Design {
    id: number
    name: string
    category: 'interior' | 'kitchen' | 'real_estate'
    description: string
    connected_project_id?: number
    connected_project
    privacy: Privacy
    area_size: number
    budget: number
    amount_of_time: string
    used_materials_content: string
    specifications: string
    cover_image: string
    gallery: DesignImage[]
    created_at: string
}

export default Design
