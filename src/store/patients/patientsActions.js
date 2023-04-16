import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosConfig from '../../utils/axiosConfig'

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async ({ search, page, perPage }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.get(
        `/patient?page=${page}&perPage=${perPage}&search=${search || ''}`
      )

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
