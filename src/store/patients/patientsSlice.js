import { createSlice } from '@reduxjs/toolkit'
import { fetchPatients } from './patientsActions'

const initialState = {
  loading: false,
  data: [],
  updatedPatient: null,
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
  },
})

export default patientsSlice.reducer
