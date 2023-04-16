import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosConfig from '../../utils/axiosConfig'

export const addPatient = createAsyncThunk(
  'patients/addPatient',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/patient', {
        ...data,
      })

      return await response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)

export const fetchPatientById = createAsyncThunk(
  'patients/fetchPatientById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.get(`/patient/${id}`)

      return response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)

export const updatePatient = createAsyncThunk(
  'patients/updatePatient',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      console.log('UPDATE DATA : ', data)
      const response = await axiosConfig.patch(`/patient/${id}`, {
        data,
      })

      return await response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)

export const addInvestigation = createAsyncThunk(
  'patients/addInvestigation',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/investigation', {
        ...data,
      })

      return await response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)

export const updateInvestigation = createAsyncThunk(
  'patients/updateInvestigation',
  async ({ investigationId, data, patientId }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.patch(
        `/investigation/${investigationId}/${patientId}`,
        {
          ...data,
        }
      )

      return await response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)

export const removeCurrentPatient = createAsyncThunk(
  'patients/removeCurrentPatient',
  async () => {
    return {
      success: true,
      data: null,
      message: 'Cleared current patient',
      error: null,
    }
  }
)

export const addTreatment = createAsyncThunk(
  'patients/addTreatment',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/treatment', {
        ...data,
      })

      return await response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)

export const updateTreatment = createAsyncThunk(
  'patients/updateTreatment',
  async ({ treatmentId, data, patientId }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.patch(
        `/treatment/${treatmentId}/${patientId}`,
        {
          ...data,
        }
      )

      return await response.data
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      })
    }
  }
)
