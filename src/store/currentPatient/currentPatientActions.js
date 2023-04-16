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
      const response = await axiosConfig.patch(`/patient/${id}`, {
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
