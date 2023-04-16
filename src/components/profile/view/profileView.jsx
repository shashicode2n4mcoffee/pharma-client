import React, { useEffect } from 'react'
import { Card, Label, TextInput, Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { addPatient } from '../../../store/currentPatient/currentPatientActions'
import { errorToast, successToast } from '../../../utils'

const gender = ['Male', 'Female', 'Others']
const ocupation = [
  'Agriculture',
  'Engineer',
  'Doctor',
  'Bussiness',
  'Housewife',
]

export const ProfileView = ({ patientData, edit }) => {
  console.log('PATIENT DATA : ', patientData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const insertedPatientData = useSelector((state) => state.currentPatient)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log('DATA : ', data)
    dispatch(addPatient(data))
      .then(() => {
        navigate({
          pathname: `/profile/${-1}`,
          // eslint-disable-next-line no-underscore-dangle
          search: `?profile=history&patientId=${insertedPatientData?.currentPatient?._id}`,
        })
        successToast('User Login Successfully')
      })
      .catch((errorData) => {
        errorToast(errorData.error)
      })
  }

  useEffect(() => {
  }, [insertedPatientData?.currentPatient])

  return (
    <div className='w-2/3'>
      <Toaster />
      <Card>
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            Bonnie Green
          </h5>
          {patientData && edit && (
            <Button type='submit' className='mr-4'>
              Edit
            </Button>
          )}
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='fullName' value='Full name' />
            </div>
            <TextInput
              id='fullName'
              type='text'
              placeholder='Full Name'
              required={true}
              // value={patientData?.profile?.fullName}
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
              // value={patientData?.profile?.age}
              error={errors.email?.type === 'required'}
              {...register('age', { required: true, maxLength: 50 })}
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
              {...register('gender', { required: true, maxLength: 50 })}
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
              {...register('occupation', { required: true, maxLength: 50 })}
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
                <Button type='submit' color='gray'>
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
