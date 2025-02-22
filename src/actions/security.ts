'use server'

import Dao from "@/lib/prisma"
import permissions from "../constants/permissions"
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth-options"


export const getSessionManager = async () => {

    const session = await getServerSession()

    const manager = await Dao.instance.manager.findUnique({
        where: {
            email: session?.user.email
        }
    })

    return manager
}

export const checkAuthorization = async (permission: string) => {
    const session = await getServerSession(authOptions)
    console.log(session);
    
    if(!session){
        return false
    }

    const manager_email: string = session.user.email

    const manager = await Dao.instance.manager.findUnique({
        where: {
            email: manager_email
        },

        include: {
            permissions: true
        }
    })

    if(!manager){
        return false
    }

    const isAdmin = manager.permissions.find(p => p.value === permissions.full_access.value) || manager.role == 'admin'
    const hasPermission = manager.permissions.some(p => p.value === permission)

    if(isAdmin || hasPermission){
        return true
    }

    return false
}


export const addPermission = async (data:{
    manager_id: number, 
    permission: {
        name: string
        value: string
    }
}) => {
    console.log(data);
    
    const manager = await Dao.instance.manager.findUnique({
        where: {
            id: data.manager_id
        }
    })

    if(!manager){
        throw new Error('Manager not found')
    }

    if(!await checkAuthorization(permissions.general_permissions.permissions.add.value)){
        throw new Error('ليس لديك الصلاحية لاضافة هذا الصلاحية')
    }

    await Dao.instance.managerPermission.create({
        data: {
            name: data.permission.name,
            value: data.permission.value,
            manager_id: manager.id
        }
    })

    const updated_manager = await Dao.instance.manager.findUnique({
        where: {
            id: data.manager_id
        },

        include: {
            permissions: true
        }
    })

    return updated_manager
}


export const removePermission = async (data: {
    manager_id: number, permission_value: string
}) => {
    const manager = await Dao.instance.manager.findUnique({
        where: {
            id: data.manager_id
        }
    })

    if(!manager){
        throw new Error('Manager not found')
    }

    if(!await checkAuthorization(permissions.general_permissions.permissions.remove.value)){
        throw new Error('ليس لديك الصلاحية لحذف هذا الصلاحية')
    }

    await Dao.instance.managerPermission.deleteMany({
        where: {
            value: data.permission_value,
            manager_id: data.manager_id
        }
    })

    const updated_manager = await Dao.instance.manager.findUnique({
        where: {
            id: data.manager_id
        },

        include: {
            permissions: true
        }
    })

    return updated_manager

}