import axios from 'axios'
import { BASE_URL } from './constants'

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})
