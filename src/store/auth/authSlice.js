import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logoutUser, registerUser } from './authActions'

const userAccessToken = localStorage.getItem('userAccessToken')
  ? localStorage.getItem('userAccessToken')
  : null
const userData = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

const initialState = {
  loading: false,
  user: userData,
  accessToken: userAccessToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.data
      state.accessToken = action.payload.data?.access_token
      localStorage.setItem('userAccessToken', action.payload.data?.access_token)
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false
      state.user = action.payload.data
      state.error = action.payload.data?.message
      state.success = action.payload.data?.success
      state.accessToken = action.payload.data?.accessToken
      localStorage.setItem('userAccessToken', action.payload.data?.accessToken)
      localStorage.setItem('user', JSON.stringify(action.payload.data))
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },

    [loginUser.pending]: (state) => {
      state.loading = true
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false
      state.user = action.payload.data
      state.success = action.payload.success
      state.accessToken = action.payload.data.accessToken
      localStorage.setItem('userAccessToken', action.payload.data.accessToken)
      state.error = action.payload.data.message
      localStorage.setItem('user', JSON.stringify(action.payload.data))
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },

    [logoutUser.pending]: (state) => {
      state.loading = true
    },
    [logoutUser.fulfilled]: (state) => {
      state.loading = false
      state.user = null
      state.accessToken = null
      localStorage.removeItem('userAccessToken')
      localStorage.removeItem('user')
      state.success = true
      state.error = null
    },
    [logoutUser.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export default authSlice.reducer

export const { setCredentials } = authSlice.actions
