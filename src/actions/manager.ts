'use server'


import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"


export const getManagers = async () => {
    const managers = await Dao.instance.manager.findMany()

    return managers
}


interface CreateManagerPayload {
    name: string
    email: string
    password: string
}

export const createManager = async (data: CreateManagerPayload) => {
    const search_match = await Dao.instance.manager.findFirst({
        where: {
            email: data.email
        }
    })

    if (search_match) {
        throw new Error('Manager already exists')
    }

    const manager = await Dao.instance.manager.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            created_at: getCurrentDate(),
        }
    })

    return manager
}

export const deleteManager = async (id: number) => {

    const manager = await Dao.instance.manager.delete({
        where: {
            id: id
        }
    })

    return manager
}


export const updateManager = async (id: number, data: CreateManagerPayload) => {

    const manager = await Dao.instance.manager.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            created_at: getCurrentDate(),
        }
    })

    return manager
}