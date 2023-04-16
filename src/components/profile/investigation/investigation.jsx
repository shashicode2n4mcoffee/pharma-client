/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { Card, Label, Textarea, Button } from 'flowbite-react'
import * as moment from 'moment'
import {
  addInvestigation,
  updateInvestigation,
} from '../../../store/currentPatient/currentPatientActions'
import { errorToast, successToast } from '../../../utils'

export const Investigation = ({ patientData, edit, id }) => {
  const dispatch = useDispatch()
  const [editValue, setEditValue] = useState(false)
  const [addInvestigationValue, setAddInvestigationValue] = useState(false)
  const [currentTab, setCurrentTab] = useState(
    patientData?.investigation[patientData.investigation.length - 1] || null
  )

  const { register, setValue, handleSubmit } = useForm()

  const onInvestigationClick = (value) => {
    setCurrentTab(value)
    setValue('investigation', value?.desc)
  }

  const onSubmit = (data) => {
    console.log('DATA : ', data, patientData, currentTab)
    if (id !== -1) {
      if (currentTab?._id && !addInvestigationValue) {
        dispatch(
          updateInvestigation({
            investigationId: currentTab._id,
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
      } else if (addInvestigationValue) {
        dispatch(addInvestigation({ patientId: id, ...data }))
          .then((data) => {
            if (data?.payload?.success) {
              successToast('Added Investigation Successfully')
              setAddInvestigationValue(false)
            }
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
    setAddInvestigationValue(true)
    setCurrentTab(null)
  }

  useEffect(() => {
    const investigationLength = patientData?.investigation?.length
    if (investigationLength) {
      setCurrentTab(patientData?.investigation[investigationLength - 1])
    }
  }, [patientData?.investigation])

  return (
    <div className='w-2/3'>
      <Toaster />
      <Card>
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            {patientData?.fullname}
          </h5>
          <div className='flex justify-start'>
            {patientData &&
              edit &&
              currentTab?._id &&
              !addInvestigationValue && (
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
          {patientData?.investigation?.map((item) => (
            <Button
              color={item?._id === currentTab?._id ? 'info' : 'gray'}
              onClick={() => onInvestigationClick(item)}
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
                  <Label htmlFor='comment' value='Patient investigation' />
                </div>
                <Textarea
                  id='investigation'
                  placeholder='Enter investigation...'
                  required={true}
                  rows={15}
                  disabled={!editValue}
                  defaultValue={currentTab?.desc?.toUpperCase()}
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
        {addInvestigationValue && (
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <>
              <div className='mb-2 block'>
                <Label htmlFor='comment' value='Patient investigation' />
              </div>
              <Textarea
                id='investigation'
                placeholder='Enter investigation...'
                required={true}
                rows={15}
                disabled={false}
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
                      onClick={() => setAddInvestigationValue(false)}
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
          </form>
        )}
      </Card>
    </div>
  )
}
