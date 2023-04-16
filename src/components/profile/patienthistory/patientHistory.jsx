import React, { useState } from 'react'
import { Card, Label, Textarea, Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import {
  addPatient,
  updatePatient,
} from '../../../store/currentPatient/currentPatientActions'
// import { errorToast, successToast } from '../../../utils'

export const PatientHistory = ({ patientData, edit, id }) => {
  const [editValue, setEditValue] = useState(false)
  const dispatch = useDispatch()
  const insertedPatientData = useSelector((state) => state.currentPatient)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('DATA : ', data, insertedPatientData)
    if (id !== -1) {
      dispatch(updatePatient({ data, id }))
    } else {
      dispatch(addPatient(data))
    }
    setEditValue(false)
    // dispatch(addPatient(data))
    //   .then(() => {
    //     navigate({
    //       pathname: `/profile/${-1}`,
    //       // eslint-disable-next-line no-underscore-dangle
    //       search: `?profile=history&patientId=${insertedPatientData?.currentPatient?._id}`,
    //     })
    //     successToast('User Login Successfully')
    //   })
    //   .catch((errorData) => {
    //     errorToast(errorData.error)
    //   })
  }

  return (
    <div className='w-2/3'>
      <Toaster />
      <Card>
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            Bonnie Green
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
