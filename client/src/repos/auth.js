import axios from 'axios'

const URL = '/api/auth'

export const authorize = (loginData) => {
  return axios.post(URL, loginData)
}

export const logoutUser = (email) => {
  return axios.post(`${URL}/logout`, { email })
}

export const validateToken = (email, token) => {
  return axios.post(`${URL}/token`, { email, token })
}