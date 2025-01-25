import Client from "./client";

interface ContactMessage {
    id: number
    client: Client
    message: string
    sent_at: string
}

export default ContactMessage