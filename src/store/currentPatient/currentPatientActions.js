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