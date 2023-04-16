import { createSlice } from '@reduxjs/toolkit'
import { addPatient, fetchPatientById } from './currentPatientActions'

const initialState = {
  loading: false,
  currentPatient: null,
  error: null,
  success: false,
}

const currentPatientSlice = createSlice({
  name: 'currentPatient',
  initialState,
  extraReducers: {
    [addPatient.pending]: (state) => {
      state.loading = true
    },
    [addPatient.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [addPatient.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [fetchPatientById.pending]: (state) => {
      state.loading = true
    },
    [fetchPatientById.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [fetchPatientById.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
  },
})

export default currentPatientSlice.reducer
