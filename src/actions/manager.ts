'use server'


import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"
import { checkAuthorization, getSessionManager } from "./security"
import permissions from "../constants/permissions"

export const getManagers = async () => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.managers.read.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقراءة المدراء")
    }
    const managers = await Dao.instance.manager.findMany({
        include: {
            permissions: true
        }
    })

    return managers
}

export const getManagerById = async (id: number) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.managers.read.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقراءة المدراء")
    }
    const manager = await Dao.instance.manager.findUnique({
        where: {
            id: id
        },
        include: {
            permissions: true
        }
    })

    return manager
}

interface CreateManagerPayload {
    name: string
    email: string
    password: string,
    permissions: Array<{
        name: string
        value: string
    }>
}

export const createManager = async (data: CreateManagerPayload) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.managers.create.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لاضافة مدير")
    }
  
    const search_match = await Dao.instance.manager.findFirst({
        where: {
            email: data.email
        }
    })

    if (search_match) {
        throw new Error('Manager already exists')
    }

    await Dao.instance.$transaction(async (tx) => {
        const manager = await tx.manager.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: 'supervisor',
                created_at: getCurrentDate(),
            }
        })

        await tx.managerPermission.createMany({
            data: data.permissions.map((permission) => ({
                name: permission.name,
                value: permission.value,
                manager_id: manager.id
            }))
        })
    })
}


export const deleteManager = async (id: number) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.managers.delete.value)
    const session_manager = await getSessionManager()

    const isCurrentManager = session_manager?.id === id

    if(!isAuthorized && !isCurrentManager) {
        throw new Error('ليس لديك الصلاحية لحذف المدير')
    }



    await Dao.instance.$transaction(async (tx) => {
        await tx.managerPermission.deleteMany({
            where: {
                manager_id: id
            }
        })

        await tx.manager.delete({
            where: {
                id: id
            }
        })
    })

    return { isCurrentManager }
}

interface UpdateManagerPayload {
    manager_id: number
    data: {
        name: string
        email: string
        password: string
    }
}

export const updateManager = async (payload: UpdateManagerPayload) => {
    const isAuthorized = await checkAuthorization(
        permissions.general_permissions.managers.update.value
    )

    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لتحديث المدير")
    }

    const manager = await Dao.instance.manager.update({
        where: {
            id: payload.manager_id
        },
        data: {
            name: payload.data.name,
            email: payload.data.email,
            password: payload.data.password,
            created_at: getCurrentDate(),
        }
    })

    return manager
}