'use server'

import Dao from "@/lib/prisma"

export const getDashboardStatistics = async () => {
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