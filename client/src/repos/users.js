import axios from 'axios'
const URL = '/api/users'

// This sets headers to use token
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  error => Promise.reject(error)
)

export const me = (email) => {
  return axios.get(`${URL}/me`, {
    params: { email }
  })
}

export const getAll = (email) => {
  return axios.get(URL, {
    params: { email }
  })
}

export const createUser = (userData) => {
  return axios.post(URL, userData)
}
