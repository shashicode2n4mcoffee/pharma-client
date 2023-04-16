import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosConfig from '../../utils/axiosConfig'

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async ({ search }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.get(
        `/patient?page=0&perPage=10&search=${search || ''}`
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
