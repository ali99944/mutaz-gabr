'use server'

import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"



export const getConsultations = async () => {
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