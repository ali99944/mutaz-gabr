'use server'

import Dao from "@/lib/prisma"
import { getCurrentDate } from "../utils/functions/date-helper"
import { checkAuthorization } from "./security"
import permissions from "../constants/permissions"

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
    const isAuthorized = await checkAuthorization(
        permissions.general_permissions.contact_messages.read.value
    )
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لقرائة رسائل التواصل")
    }


    const contactMessages = await Dao.instance.contactMessage.findMany({
        where: {
            type: 'contact'
        }
    })

    return contactMessages
}

interface CloseContactMessagePayload {
    contact_message_id: number
}

export const closeContactMessage = async (data: CloseContactMessagePayload) => {
    const isAuthorized= await checkAuthorization(permissions.general_permissions.contact_messages.close.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لاغلاق رسائل التواصل")
    }

    const closed_message = await Dao.instance.contactMessage.update({
        where: {
            id: data.contact_message_id
        },

        data: {
            status: 'closed'
        }
    })

    return closed_message
}

interface DeleteContactMessagePayload {
    contact_message_id: number
}

export const deleteContactMessage = async (data: DeleteContactMessagePayload) => {
    const isAuthorized= await checkAuthorization(permissions.general_permissions.contact_messages.delete.value)
    if(!isAuthorized) {
        throw new Error("ليس لديك الصلاحية لحذف رسائل التواصل")
    }

    await Dao.instance.contactMessage.delete({
        where: {
            id: data.contact_message_id
        }
    })

    return true
}