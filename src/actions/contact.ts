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
    const newClient = await Dao.instance.client.create({
        data: {
            name: data.name,
            phone_number: data.phone_number,
            email: data.email
        }
    })


    const contact = await Dao.instance.contactMessage.create({
        data: {
            client_id: newClient.id,
            message: data.message,
            sent_at: getCurrentDate()
        }
    })

    return contact
}

export const getContactMessages = async () => {
    await Promise.resolve(
        setTimeout(() => {}, 2000)
    )
    const contactMessages = await Dao.instance.contactMessage.findMany({
        include: {
            client: true
        }
    })

    return contactMessages
}