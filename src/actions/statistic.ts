'use server'

import Dao from "@/lib/prisma"


export const getStatistics = async () => {
    const statistics = await Dao.instance.statistic.findMany()

    return statistics
}

export const updateStatistics = async (data: { name: string, value: number }) => {
    const statistic = await Dao.instance.statistic.updateMany({
        where: {
            name: data.name
        },
        data: {
            value: data.value
        }
   })

    return statistic
}