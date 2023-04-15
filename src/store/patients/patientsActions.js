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
      // return rejectWithValue({
      //   error: error.response.data
      //     ? error.response.data.message
      //     : error.message,
      // })
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/auth/login', {
        email,
        password,
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

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.get('/auth/logout')

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
