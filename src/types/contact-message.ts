
interface ContactMessage {
    id: number
    name: string
    email: string
    phone: string
    message: string
    sent_at: string
    status: 'pending' | 'closed'
}

export default ContactMessage