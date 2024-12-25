'use server'

import Dao from "@/lib/prisma"
import { getCurrentDate } from "@/lib/utils/date"

export async function createCategory(name: string) {
    try{
        const category = await Dao.instance.category.create({
            data: {
                name,
                created_at: getCurrentDate()
            }
        })


        return category
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCategory(id: number) {
    try {
        const category = await Dao.instance.category.delete({
            where: {
                id
            }
        })

        return category
    } catch (error) {
        console.log(error)
        throw error
    }
}


export async function updateCategory(id: number, name: string) {
    try {
        const category = await Dao.instance.category.update({
            where: {
                id
            },
            data: {
                name
            }
        })

        return category
    } catch (error) {
        console.log(error)
        throw error
    }
} 
        