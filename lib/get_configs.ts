import { axiosClient } from './axios_client'

export const getConfig = async (key?: string) => {
  const response = await axiosClient.get(`https://www.mgdesigns.pro/api/configs${key ? `?key=${key}` : ''}`)
  return response.data
}
