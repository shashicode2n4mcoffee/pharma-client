import React, { useState, useEffect } from 'react'
import { Card, Label, Textarea, Button } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as moment from 'moment'
import { Toaster } from 'react-hot-toast'
import {
  addTreatment,
  updateTreatment,
} from '../../../store/currentPatient/currentPatientActions'
import { errorToast, successToast } from '../../../utils'

export const Treatment = ({ patientData, edit, id }) => {
  const dispatch = useDispatch()
  const { register, setValue, handleSubmit } = useForm()
  const [addTreatmentValue, setAddTreatmentValue] = useState(false)
  const [editValue, setEditValue] = useState(false)
  const [currentTab, setCurrentTab] = useState(
    patientData?.treatment[patientData.treatment.length - 1] || null
  )

  const onSubmit = (data) => {
    if (id !== -1) {
      if (currentTab?._id && !addTreatmentValue) {
        dispatch(
          updateTreatment({
            treatmentId: currentTab._id,
            patientId: id,
            data,
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              successToast('Updated Investigation Successfully')
            }
          })
          .catch(() => {
            errorToast('Something went wrong. please try again')
          })
      } else if (addTreatmentValue) {
        dispatch(addTreatment({ patientId: id, ...data }))
          .then((data) => {
            if (data?.payload?.success) {
              successToast('Added Investigation Successfully')
            }
            setAddTreatmentValue(false)
          })
          .catch(() => {
            errorToast('Something went wrong. please try again')
          })
      }
    }
    setEditValue(false)
  }

  useEffect(() => {
    setValue('desc', currentTab?.desc)
  }, [currentTab])

  const onHandleNewInvestigation = () => {
    setAddTreatmentValue(true)
    setCurrentTab(null)
  }

  const onTreatmentClick = (value) => {
    setCurrentTab(value)
    setValue('treatment', value?.desc)
  }

  useEffect(() => {
    const treatmentLength = patientData?.treatment?.length
    if (treatmentLength) {
      setCurrentTab(patientData?.treatment[treatmentLength - 1])
    }
  }, [patientData?.treatment])
  return (
    <div className='w-2/3'>
      <Toaster />
      <Card>
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            {patientData?.fullname}
          </h5>
          <div className='flex justify-start'>
            {patientData && edit && currentTab?._id && !addTreatmentValue && (
              <Button
                type='submit'
                className='mr-4'
                onClick={() => setEditValue(true)}
              >
                Edit
              </Button>
            )}
            {edit && (
              <Button
                color={!currentTab?._id ? 'info' : 'gray'}
                onClick={onHandleNewInvestigation}
              >
                +
              </Button>
            )}
          </div>
        </div>
        <Button.Group>
          {patientData?.treatment?.map((item) => (
            <Button
              color={item?._id === currentTab?._id ? 'info' : 'gray'}
              onClick={() => onTreatmentClick(item)}
            >
              {moment(item?.createdAt).format('MMM Do YY')}
            </Button>
          ))}
        </Button.Group>
        {patientData?.treatment?.map((item) => (
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
            key={item._id}
          >
            {item?._id === currentTab?._id && (
              <>
                <div className='mb-2 block'>
                  <Label htmlFor='comment' value='Patient treatment' />
                </div>
                <Textarea
                  id='investigation'
                  placeholder='Enter investigation...'
                  required={true}
                  rows={15}
                  disabled={!editValue}
                  defaultValue={currentTab?.desc?.toUpperCase()}
                  {...register('desc', { required: false, maxLength: 50 })}
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
        {addTreatmentValue && (
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='mb-2 block'>
              <Label htmlFor='comment' value='Patient Treatment' />
            </div>
            <Textarea
              id='treatment'
              placeholder='Enter Treatment...'
              required={true}
              rows={15}
              disabled={false}
              {...register('desc', { required: false, maxLength: 50 })}
            />
            {edit && (
              <div className='flex justify-between items-center'>
                <div>
                  <Button
                    type='submit'
                    color='gray'
                    onClick={() => setAddTreatmentValue(false)}
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
        )}
      </Card>
    </div>
  )
}
