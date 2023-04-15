import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosConfig from '../../utils/axiosConfig'

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async () => {
    try {
      const response = await axiosConfig.get(
        '/patient?page=0&perPage=10&search='
      )
      return await response.data
    } catch (error) {
      return error
    }
  }
)
