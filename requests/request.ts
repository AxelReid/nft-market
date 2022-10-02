import axios from 'axios'
import { OPENSEA_URL } from './constants'

export const request = axios.create({
  baseURL: OPENSEA_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
