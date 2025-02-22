'use server'

import Dao from "@/lib/prisma"
import { uploadToCloudinary } from "../utils/functions/cloudinary-upload"
import { checkAuthorization } from "./security"
import permissions from "../constants/permissions"




export const createDesignAttachment = async (data: FormData) => {
    const cover_image = data.get('cover_image') as File
    const images = data.getAll('images') as File[]
    const { title,sub_category, category, description, connected_project_id, privacy, area_size, budget, amount_of_time, materials, specifications } = Object.fromEntries(
        Array.from(data).filter(([key]) => !['cover_image', 'images'].includes(key))
    )

    const cover_image_url = await uploadToCloudinary(cover_image)
    const images_url = await Promise.all(images.map((image) => uploadToCloudinary(image)))


    await Dao.instance.design.create({
        data: {
            name: title as string,
            category: category as 'interior' | 'kitchen' | 'real_estate',
            description: description as string,
            connected_project_id: connected_project_id != null ? +(connected_project_id as string) : null,
            privacy: privacy as 'public' | 'private',
            area_size: Number(area_size),
            budget: Number(budget),
            amount_of_time: amount_of_time as string,
            used_materials_content: materials as string,
            specifications: specifications as string,
            cover_image: cover_image_url,
            sub_category: sub_category as string,
            gallery: {
                createMany: {
                    data: images_url.map((image_url) => ({
                        src: image_url,
                        name: cover_image.name ,
                        
                    }))
                }
            },
            created_at: new Date().toISOString()
        }
    })
    

    return true
}

export const getDesigns = async (category?: string | null, sub_category?: string | null) => {
    const isAuthorized = await checkAuthorization(
        permissions.general_permissions.designs.read.value
    )
    
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقراءة التصميمات")
    }

    const designs = await Dao.instance.design.findMany({
        include: {
            connected_project: true,
            gallery: true
        },

        where: {
            category: category as unknown,
            sub_category: sub_category
        }
    })

    return designs
}



export const getInteriorDesigns = async () => {
    const designs = await Dao.instance.design.findMany({
        include: {
            connected_project: true,
            gallery: true
        },

        where: {
            category: 'interior'
        }
    })

    return designs
}

export const getKitchenDesignsByCategory = async (sub_category: string) => {
    const designs = await Dao.instance.design.findMany({
        include: {
            connected_project: true
        },

        where: {
            category: 'kitchen',
            sub_category: sub_category
        }
    })

    return designs
}

export const getRealEstateDesigns = async () => {
    const designs = await Dao.instance.design.findMany({
        include: {
            connected_project: true
        },

        where: {
            category: 'real_estate'
        }
    })

    return designs
}


export const getDesignById = async (id: number) => {
    const design = await Dao.instance.design.findFirst({
        where: {
            id: id
        },

        include: {
            connected_project: true,
            gallery: true
        }
    })

    console.log(design);
    

    return design
}