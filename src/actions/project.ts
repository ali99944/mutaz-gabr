'use server'

import Dao from "@/lib/prisma"



export const getProjects = async (type?: 'interior' | 'kitchen', sub_category?: string) => {
    if(type && sub_category) {
        const projects = await Dao.instance.project.findMany({
            where: {
                category: type,
                sub_category: sub_category
            },

            include: {
                gallery: true
            }
        })
        
        return projects
    }

    const projects = await Dao.instance.project.findMany({
        include: {
            gallery: true
        }
    })

    return projects
}

// const getProjectById = async (id: number) => {
//         const project = await Dao.instance.project.findFirst({
//             where: {
//                 id: id
//             },
//             include: {
//                 gallery: true
//             }
//         })

//     return project
// }



interface CreatProjectPayload {
    name: string
    client_name: string
    area_size: number
    budget: number
    description: string
    specifications: string
    execution_days: number
    category: 'interior' | 'kitchen',
    sub_category: string
    // image: File
    // gallery: File[]
}


export const createProject = async (data: CreatProjectPayload) => {

    const project = await Dao.instance.project.create({
        data: {
            name: data.name,
            client_name: data.client_name,
            area_size: data.area_size,
            budget: data.budget,
            description: data.description,
            specifications: data.specifications,
            execution_days: data.execution_days,
            image: "https://res.cloudinary.com/di4kdo5sv/image/upload/v1734226934/eposts/1734226931930.jpg",
            category: data.category,
            sub_category: data.sub_category
        }
    })

    return project
}
