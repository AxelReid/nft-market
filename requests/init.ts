import { showNotification } from '@mantine/notifications'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { getCookie, removeCookies } from 'cookies-next'
import { BASE_URL } from './constants'

const alert = (title: string, message?: string) =>
  showNotification({
    title,
    message,
  })
function Redirect(msg: string) {
  alert(msg)
  removeCookies('token')
  window.location.pathname = '/sign-in'
}

function ErrorHandler(error: AxiosError) {
  if (error.message.startsWith('timeout')) {
    alert('Time Out', 'Please check your internet!')
  }
  if (error.response) {
    // debugger
    let _error = error.response
    switch (_error.status) {
      case 400:
        alert('Bad request')
        break
      case 401:
        Redirect('Unauthorized')
        break
      case 403:
        alert('Forbidden')
        break
      case 404:
        alert('Not Found')
        break
      case 500:
        alert('Internal Server Error')
        break
      default:
        break
    }
  }
}

const init = {
  request(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    params?: {},
    data?: any
  ) {
    const token = getCookie('token')
    let config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000,
      url: url,
      method: method,
      onUploadProgress: function (e) {
        Math.round((e.loaded * 100) / e.total)
      },
    }
    if (token) {
      config.headers = {
        Authorization: token,
      }
    }
    if (data) config.data = data

    if (params) config.params = params

    let result = axios(config)

    return new Promise((resolve, reject) => {
      result
        .then((res) => {
          resolve(res.data)
        })
        .catch((error: AxiosError) => {
          ErrorHandler(error)
          reject(error)
        })
    })
  },
  get(url: string, params?: {}) {
    return this.request('GET', url, params, undefined)
  },
  post(url: string, params?: {}, data?: any) {
    return this.request('POST', url, params, data)
  },
  put(url: string, params?: {}, data?: any) {
    this.request('PUT', url, params, data)
  },
  delete(url: string, params?: {}) {
    this.request('DELETE', url, params, undefined)
  },
}

export default init
