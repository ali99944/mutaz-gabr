'use server'

import Dao from "@/lib/prisma"
import { uploadToCloudinary } from "../utils/functions/cloudinary-upload"
import { checkAuthorization } from "./security"
import permissions from "../constants/permissions"



export const getProjects = async (type?: 'interior' | 'kitchen', sub_category?: string) => {
    if(type && sub_category) {
        const projects = await Dao.instance.project.findMany({
            where: {
                category: type,
                sub_category: sub_category
            },

            include: {
                gallery: true,
                design: true
            }
        })
        
        return projects
    }

    const isAuthorized = await checkAuthorization(permissions.general_permissions.projects.read.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقراءة المشاريع")
    }

    const projects = await Dao.instance.project.findMany({
        include: {
            gallery: true
        }
    })

    return projects
}

export const getProjectById = async (id: number) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.projects.read.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقراءة المشاريع")
    }

    const project = await Dao.instance.project.findFirst({
        where: {
            id: id
        },
        include: {
            gallery: true,
            design: true
        }
    })

    return project
}




export const createProject = async (data: FormData) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.projects.create.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لاضافة مشروع")
    }

    const galleries = data.getAll('gallery')
    const main_image = data.get('main_image')
    
    const main_image_url = await uploadToCloudinary(main_image as File)

    const project = await Dao.instance.project.create({
        data: {
            name: data.get('name') as string,
            client_name: data.get('client_name') as string,
            area_size: Number(data.get('area_size')),
            budget: Number(data.get('budget')),
            description: data.get('description') as string,
            specifications: data.get('specifications') as string,
            execution_days: Number(data.get('execution_days')),
            image: main_image_url,
            category: data.get('category') as 'interior' | 'kitchen',
            sub_category: data.get('sub_category') as string
        }
    })

    for(let i = 0; i < galleries.length; i++) {
        const gallery_image_url = await uploadToCloudinary(galleries[i] as File)

        await Dao.instance.projectImage.create({
            data: {
                src: gallery_image_url,
                name: (galleries[i] as File).name,
                project_id: project.id
            }
        })
    }

    return project
}

export const updateProject = async (id: number, data: FormData) => {
    const main_image = data.get('main_image')
    
    const main_image_url = await uploadToCloudinary(main_image as File)

    await Dao.instance.project.update({
        where: {
            id: id
        },
        data: {
            name: data.get('name') as string,
            client_name: data.get('client_name') as string,
            area_size: Number(data.get('area_size')),
            budget: Number(data.get('budget')),
            description: data.get('description') as string,
            specifications: data.get('specifications') as string,
            execution_days: Number(data.get('execution_days')),
            image: main_image_url,
            category: data.get('category') as 'interior' | 'kitchen',
            sub_category: data.get('sub_category') as string
        }
    })

    // for(let i = 0; i < galleries.length; i++) {
    //     const gallery_image_url = await uploadToCloudinary(galleries[i] as File)

    //     await Dao.instance.projectImage.update({
    //         where: {
    //             id: galleries[i]
    //         },
    //         data: {
    //             src: gallery_image_url,
    //             name: (galleries[i] as File).name,
    //             project_id: project.id
    //         }
    //     })
    // }
}

export const deleteProject = async (id: number) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.projects.delete.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لحذف المشروع")
    }

    await Dao.instance.project.delete({
        where: {
            id: id
        }
    })
}


export const getProjectsByTitle = async (title: string) => {
    const projects = await Dao.instance.project.findMany({
        where: {
            name: title
        }
    })

    return projects
}