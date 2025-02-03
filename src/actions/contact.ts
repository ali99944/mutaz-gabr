'use server'

import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"

interface CreateContactPayload {
    name: string
    email: string
    phone_number: string
    message: string
}

export const createContactMessage = async (data: CreateContactPayload) => {

    const contact = await Dao.instance.contactMessage.create({
        data: {
            name: data.name,
            phone: data.phone_number,
            email: data.email,
            message: data.message,
            sent_at: getCurrentDate(),
            type: 'contact'
        }
    })

    return contact
}

export const getContactMessages = async () => {
    const contactMessages = await Dao.instance.contactMessage.findMany({
        where: {
            type: 'contact'
        }
    })

    return contactMessages
}