import React, { useState, useEffect } from 'react'
import { Card, Label, TextInput, Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import {
  addPatient,
  updatePatient,
} from '../../../store/currentPatient/currentPatientActions'
import { errorToast, successToast } from '../../../utils'

const gender = ['Male', 'Female', 'Others']
const ocupation = [
  'Agriculture',
  'Engineer',
  'Doctor',
  'Bussiness',
  'Housewife',
]

export const ProfileView = ({ patientData, edit, id }) => {
  const [editValue, setEditValue] = useState(false)
  const dispatch = useDispatch()

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    setEditValue(false)
    if (id !== -1) {
      dispatch(addPatient(data))
        .then((data) => {
          if (data?.payload?.success) {
            successToast('Added the new patient')
          }
        })
        .catch(() => {
          errorToast('Something went wrong. please try again')
        })
    } else {
      dispatch(updatePatient(data))
        .then((data) => {
          if (data?.payload?.success) {
            successToast('Updated the Patient')
          }
        })
        .catch(() => {
          errorToast('Something went wrong. please try again')
        })
    }
  }

  useEffect(() => {
    if (parseInt(id, 10) === -1) {
      setEditValue(true)
      reset({
        fullname: patientData?.fullname || '',
        age: patientData?.age || '',
        gender: patientData?.gender || 'Male',
        occupation: patientData?.occupation || 'Agriculture',
      })
    }
  }, [patientData, id])

  return (
    <div className='w-2/3'>
      <Card>
        <Toaster />
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            {patientData?.fullname?.toUpperCase()}
          </h5>
          {patientData && edit && (
            <Button
              type='submit'
              className='mr-4'
              onClick={() => setEditValue(true)}
            >
              Edit
            </Button>
          )}
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='fullname' value='Full name' />
            </div>
            <TextInput
              id='fullname'
              type='text'
              placeholder='Full Name'
              required={true}
              disabled={!editValue}
              defaultValue={patientData?.fullname.toUpperCase()}
              error={errors.email?.type === 'required'}
              {...register('fullname', { required: true, maxLength: 50 })}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='age' value='Age' />
            </div>
            <TextInput
              id='age'
              type='number'
              required={true}
              disabled={!editValue}
              defaultValue={patientData?.age.toUpperCase()}
              error={errors.email?.type === 'required'}
              {...register('age', { maxLength: 50 })}
            />
          </div>
          <div>
            <label
              htmlFor='gender'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Select an gender
            </label>
            <select
              id='gender'
              {...register('gender', { maxLength: 50 })}
              defaultValue={patientData?.gender}
              disabled={!editValue}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              {gender.map((item, index) => (
                <option
                  defaultValue={item === patientData?.profile?.gender}
                  key={index}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor='ocupation'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Select an ocupation
            </label>
            <select
              id='occupation'
              disabled={!editValue}
              {...register('occupation', { maxLength: 50 })}
              defaultValue={patientData?.occupation}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              {ocupation.map((item, index) => (
                <option
                  defaultValue={item === patientData?.profile?.ocupation}
                  key={index}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center gap-2'></div>
          {edit && (
            <div className='flex justify-between items-center'>
              <div>
                <Button
                  type='submit'
                  color='gray'
                  onClick={() => setEditValue(false)}
                >
                  Cancel
                </Button>
              </div>
              <div className='flex justify-between items-center'>
                <Button type='submit'>Submit</Button>
              </div>
            </div>
          )}
        </form>
      </Card>
    </div>
  )
}
