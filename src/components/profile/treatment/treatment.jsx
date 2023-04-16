import React from 'react'
import { Card, Label, Textarea, Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPatient } from '../../../store/currentPatient/currentPatientActions'
import { errorToast, successToast } from '../../../utils'

export const Treatment = ({ patientData, edit }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('DATA : ', data)
    dispatch(addPatient(data))
      .then(() => {
        navigate({
          pathname: `/profile/${-1}`,
          search: '?profile=history',
        })
        successToast('User Login Successfully')
      })
      .catch((errorData) => {
        errorToast(errorData.error)
      })
  }
  return (
    <div className='w-2/3'>
      <Card>
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            {patientData?.profile?.firstName}
          </h5>
          {patientData && edit && (
            <Button type='submit' className='mr-4'>
              Edit
            </Button>
          )}
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-wrap gap-2'>
            <Button.Group>
              <Button color='gray'>Jan 1</Button>
              <Button color='gray'>Feb 21</Button>
              <Button color='gray'>March 12</Button>
            </Button.Group>
          </div>

          <div className='mb-2 block'>
            <Label htmlFor='comment' value='Your message' />
          </div>
          <Textarea
            id='investigation'
            placeholder='Enter investigation...'
            required={true}
            rows={15}
            {...register('treatment', { required: false, maxLength: 50 })}
          />
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
