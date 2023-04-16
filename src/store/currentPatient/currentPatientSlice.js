import { createSlice } from '@reduxjs/toolkit'
import {
  addPatient,
  fetchPatientById,
  updatePatient,
  addInvestigation,
  updateInvestigation,
  removeCurrentPatient,
  addTreatment,
  updateTreatment,
} from './currentPatientActions'

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
    [updatePatient.pending]: (state) => {
      state.loading = true
    },
    [updatePatient.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [updatePatient.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [addInvestigation.pending]: (state) => {
      state.loading = true
    },
    [addInvestigation.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [addInvestigation.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [updateInvestigation.pending]: (state) => {
      state.loading = true
    },
    [updateInvestigation.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [updateInvestigation.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [removeCurrentPatient.pending]: (state) => {
      state.loading = true
    },
    [removeCurrentPatient.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [removeCurrentPatient.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [addTreatment.pending]: (state) => {
      state.loading = true
    },
    [addTreatment.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [addTreatment.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [updateTreatment.pending]: (state) => {
      state.loading = true
    },
    [updateTreatment.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPatient = action.payload.data
      state.success = action.payload.success
      state.error = action.payload.message
    },
    [updateTreatment.rejected]: (state, action) => {
      state.loading = false
      state.success = action.payload.success
      state.error = action.payload.message
    },
  },
})

export default currentPatientSlice.reducer
