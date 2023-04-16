import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import patientsReducer from './patients/patientsSlice'
import currentPatientReducer from './currentPatient/currentPatientSlice'
import { injectStore } from '../utils/axiosConfig'

const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientsReducer,
    currentPatient: currentPatientReducer,
  },
})

injectStore(store)

export default store
