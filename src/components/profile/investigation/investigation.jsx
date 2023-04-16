import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Card, Label, Textarea, Button } from 'flowbite-react'
import * as moment from 'moment'
import {
  addInvestigation,
  updateInvestigation,
} from '../../../store/currentPatient/currentPatientActions'
// import { errorToast, successToast } from '../../../utils'

export const Investigation = ({ patientData, edit, id }) => {
  const dispatch = useDispatch()
  const [editValue, setEditValue] = useState(false)
  const [currentTab, setCurrentTab] = useState(
    patientData?.investigation[0] || null
  )
  // const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('DATA : ', data, register, Label, Textarea, editValue)
    if (id !== -1) {
      if (currentTab?._id) {
        dispatch(
          updateInvestigation({
            investigationId: currentTab._id,
            patientId: id,
            data,
          })
        )
      } else {
        dispatch(addInvestigation({ patientId: id, ...data }))
      }
    } else {
      dispatch(addInvestigation())
    }
    setEditValue(false)
    // dispatch(addPatient(data))
    //   .then(() => {
    //     navigate({
    //       pathname: `/profile/${-1}`,
    //       search: '?profile=history',
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
            {patientData?.fullname}
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
        <Button.Group>
          {patientData?.investigation?.map((item) => (
            <Button
              color={item?._id === currentTab?._id ? 'info' : 'gray'}
              onClick={() => setCurrentTab(item)}
            >
              {moment(item?.createdAt).format('MMM Do YY')}
            </Button>
          ))}
        </Button.Group>
        {patientData?.investigation?.map((item) => (
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
            key={item._id}
          >
            {item?._id === currentTab?._id && (
              <>
                <div className='mb-2 block'>
                  <Label htmlFor='comment' value='Your message' />
                </div>
                <Textarea
                  id='investigation'
                  placeholder='Enter investigation...'
                  required={true}
                  rows={15}
                  disabled={!editValue}
                  defaultValue={item?.desc?.toUpperCase()}
                  {...register('desc', {
                    required: true,
                    maxLength: 50,
                  })}
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
              </>
            )}
          </form>
        ))}
      </Card>
    </div>
  )
}
