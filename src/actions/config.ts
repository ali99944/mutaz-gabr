import axios from "axios"

export const getConfigs = async (key?: string) => {
    const config = await axios.get(`/api/configs?key=${key}`)

    return config
}