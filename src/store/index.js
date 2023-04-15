import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import patientsReducer from './patients/patientsSlice'
import { injectStore } from '../utils/axiosConfig'

const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientsReducer,
  },
})

injectStore(store)

export default store
