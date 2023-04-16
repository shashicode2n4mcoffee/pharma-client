import React, { useState } from 'react'
import { Card, Label, Textarea, Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import {
  addPatient,
  updatePatient,
} from '../../../store/currentPatient/currentPatientActions'
import { errorToast, successToast } from '../../../utils'

export const PatientHistory = ({ patientData, edit, id }) => {
  const [editValue, setEditValue] = useState(false)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    if (id !== -1) {
      dispatch(updatePatient({ data, id }))
        .then(() => {
          successToast('Updated Patient history')
        })
        .catch((errorData) => {
          errorToast(errorData.error)
        })
    } else {
      dispatch(addPatient(data))
        .then(() => {
          successToast('Added Patient history')
        })
        .catch((errorData) => {
          errorToast(errorData.error)
        })
    }
    setEditValue(false)
  }

  return (
    <div className='w-2/3'>
      <Toaster />
      <Card>
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
          <div className='mb-2 block'>
            <Label htmlFor='comment' value='Your message' />
          </div>
          <Textarea
            id='comment'
            placeholder='Enter history...'
            required={true}
            rows={15}
            disabled={!editValue}
            defaultValue={patientData?.history?.toUpperCase()}
            {...register('history', { required: true, maxLength: 50 })}
          />
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
