import { axiosClient } from './axios_client'

export const getConfig = async (key?: string) => {
  const response = await axiosClient.get(`configs${key ? `?key=${key}` : ''}`)
  return response.data
}
