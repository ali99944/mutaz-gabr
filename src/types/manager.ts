export interface ManagerPermission {
    id: number,
    name: string
    value: string
    manager_id: number
    // manager: Manager
}

interface Manager {
    id: number,
    name: string,
    email: string,
    password: string,
    role: 'admin' | 'supervisor',
    created_at: string
    permissions: ManagerPermission[]
}

export default Manager