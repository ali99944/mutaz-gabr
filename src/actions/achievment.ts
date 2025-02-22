'use server'

import Dao from "@/lib/prisma"
import permissions from "../constants/permissions"
import { checkAuthorization } from "./security"


export const getAchievments = async () => {
    const achievments = await Dao.instance.achievment.findMany()

    return achievments
}

export const updateAchievment = async (data: { name: string, value: number }) => {
    const isAuthorized = await checkAuthorization(permissions.general_permissions.achievements.update.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لتحديث الأنجازات")
    }
    const achievment = await Dao.instance.achievment.updateMany({
        where: {
            name: data.name
        },
        data: {
            value: data.value.toString()
        }
   })

    return achievment
}