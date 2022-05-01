import axios, { AxiosInstance } from 'axios'

const BACKEND_URL = 'http://localhost:8000'
const REQUEST_TIMEOUT = 5000

export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  })
}
