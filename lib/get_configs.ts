import { axiosClient } from './axios_client'

export const getConfig = async (key?: string) => {
  const response = await axiosClient.get(`https://mgdesigns.pro/api/configs${key ? `?key=${key}` : ''}`)
  return response.data
}
