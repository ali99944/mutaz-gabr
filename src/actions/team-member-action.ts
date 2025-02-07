'use server'

import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"


export const getTeamMembers = async () => {
    const members = await Dao.instance.teamMember.findMany()

    return members
}

interface CreateTeamMemberPayload {
    name: string
    position: string
    email: string
}

export const createTeamMember = async (data: CreateTeamMemberPayload) => {
    const member = await Dao.instance.teamMember.create({
        data: {
            name: data.name,
            position: data.position,
            email: data.email,
            created_at: getCurrentDate()
        }
    })

    return member
}


export const updateTeamMember = async (id: number, data: CreateTeamMemberPayload) => {
    const member = await Dao.instance.teamMember.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            position: data.position,
            email: data.email
        }
    })

    return member
}


export const deleteTeamMember = async (id: number) => {
    const member = await Dao.instance.teamMember.delete({
        where: {
            id: id
        }
    })

    return member
}