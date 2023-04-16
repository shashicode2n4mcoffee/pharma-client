/* eslint-disable no-underscore-dangle */
import axios from 'axios'
// import { setCredentials } from '../store/auth/authSlice'

let store

// Recommended approach to avoid circular import dependency error
export const injectStore = (_store) => {
  store = _store
}

export const apiErrorResponse = (error) => {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
}

const instance = axios.create({
  baseURL: 'https://bored-gold-flip-flops.cyclic.app/api/v1',
  withCredentials: false,
})

instance.interceptors.request.use(
  (config) => {
    const { accessToken } = store.getState().auth

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        Cookie: `accessToken=${accessToken}`,
      }
    }

    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use((response) => {
  return response
})

export default instance
