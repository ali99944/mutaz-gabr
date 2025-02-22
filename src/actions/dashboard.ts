'use server'

import Dao from "@/lib/prisma"
import { checkAuthorization } from "./security"
import permissions from "../constants/permissions"

export const getDashboardStatistics = async () => {
    const isAuthorized = await checkAuthorization(
        permissions.general_permissions.statistics.read.value
    )

    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لرؤية الاحصائيات")
    }

    const total_projects = await Dao.instance.project.count()
    const total_contact_messages = await Dao.instance.contactMessage.count({
        where: {
            type: 'contact'
        }
    })

    const total_consultation = await Dao.instance.contactMessage.count({
        where: {
            type: 'consultation'
        }
    })

    const total_designs = await Dao.instance.design.count()
    

    return {
        total_consultation, total_contact_messages, total_designs, total_projects
    }
}