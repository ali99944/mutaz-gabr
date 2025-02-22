'use server'

import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"
import { checkAuthorization } from "./security"
import permissions from "../constants/permissions"



export const getConsultations = async () => {
    const isAuthorized = await checkAuthorization(
        permissions.general_permissions.consultations.read.value
    )

    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقرائة الاستشارات")
    }

    const consultations = await Dao.instance.contactMessage.findMany({
        where: {
            type: 'consultation'
        }
    })

    return consultations
}


interface CreatConsultationPayload {
    name: string
    email: string
    phone_number: string
    message: string
}


export const createConsultation = async (data: CreatConsultationPayload) => {
    const contact = await Dao.instance.contactMessage.create({
        data: {
            name: data.name,
            phone: data.phone_number,
            email: data.email,
            message: data.message,
            sent_at: getCurrentDate(),
            type: 'consultation'
        }
    })

    return contact
}

interface CloseConsultationPayload {
    consultation_id: number
}

export const closeConsultation = async (data: CloseConsultationPayload) => {
    const isAuthorized= await checkAuthorization(permissions.general_permissions.consultations.close.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لاغلاق الاستشارة")
    }

    const closed_message = await Dao.instance.contactMessage.update({
        where: {
            id: data.consultation_id
        },

        data: {
            status: 'closed'
        }
    })

    return closed_message
}

interface DeleteContactMessagePayload {
    consultation_id: number
}

export const deleteConsultation = async (data: DeleteContactMessagePayload) => {
    const isAuthorized= await checkAuthorization(permissions.general_permissions.consultations.delete.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لحذف الاستشارة")
    }

    await Dao.instance.contactMessage.delete({
        where: {
            id: data.consultation_id
        }
    })

    return true
}