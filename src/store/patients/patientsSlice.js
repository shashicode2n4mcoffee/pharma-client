import { createSlice } from '@reduxjs/toolkit'
import { fetchPatients } from './patientsActions'

const initialState = {
  loading: false,
  data: [],
  error: null,
  success: false,
}

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  extraReducers: {
    [fetchPatients.pending]: (state) => {
      state.loading = true
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload.data
      state.error = action.payload.data?.message
      state.success = action.payload.data?.success
    },
    [fetchPatients.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },

    // [loginUser.pending]: (state) => {
    //   state.loading = true
    // },
    // [loginUser.fulfilled]: (state, action) => {
    //   state.loading = false
    //   state.data = action.payload.data
    //   state.success = action.payload.success
    //   state.accessToken = action.payload.data?.access_token
    //   localStorage.setItem('userAccessToken', action.payload.data?.access_token)
    //   state.error = action.payload.message
    // },
    // [loginUser.rejected]: (state, action) => {
    //   state.loading = false
    //   state.success = action.payload.success
    //   state.error = action.payload.message
    // },

    // [logoutUser.pending]: (state) => {
    //   state.loading = true
    // },
    // [logoutUser.fulfilled]: (state) => {
    //   state.loading = false
    //   state.data = null
    //   state.accessToken = null
    //   localStorage.removeItem('userAccessToken')
    //   state.success = true
    //   state.error = null
    // },
    // [logoutUser.rejected]: (state, action) => {
    //   state.loading = false
    //   state.error = action.payload.message
    // },
  },
})

export default patientsSlice.reducer
