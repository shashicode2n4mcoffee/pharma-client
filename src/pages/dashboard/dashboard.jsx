import React, { useEffect, useState } from 'react'
import { Label, TextInput, Button, Dropdown, Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from 'react-avatar'
import { fetchPatients } from '../../store/patients/patientsActions'
import { errorToast, successToast } from '../../utils'

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const patientDetails = useSelector((state) => state.patients)

  const onHandleSearch = () => {
    dispatch(fetchPatients({ search: searchValue }))
      .then(() => {
        successToast('Fetching the searched users')
      })
      .catch((errorData) => {
        errorToast(errorData.error)
      })
  }

  const handleAddPatient = () => {
    navigate({
      pathname: `/profile/${-1}`,
      search: '?profile=view',
    })
  }

  const handleViewPatient = (id) => {
    navigate({
      pathname: `/profile/${id}`,
      search: '?profile=history&edit=false',
    })
  }
  const handleEditPatient = (id) => {
    navigate({
      pathname: `/profile/${id}`,
      search: '?profile=history&edit=true',
    })
  }

  useEffect(() => {
    dispatch(fetchPatients({ search: '' }))
  }, [])

  return (
    <section className='h-2/3 flex justify-start items-center p-8 flex-col'>
      <div className='mb-2 flex justify-center items-center'>
        <div className='pr-4'>
          <Label htmlFor='fullName' value='Your Full Name' />
        </div>
        <TextInput
          id='fullName'
          type='text'
          required={true}
          placeholder='Patient Name'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className='pl-4'>
          <Button onClick={onHandleSearch}>Go</Button>
        </div>
      </div>
      <div className='flex justify-center items-start flex-col pt-6 w-2/3'>
        <div className='flex justify-between items-center w-full px-2'>
          <Dropdown label='Recent Patients' dismissOnClick={false}>
            {patientDetails?.data?.data?.map((item, index) => (
              <Dropdown.Item key={index} onClick={() => handleViewPatient(1)}>
                {item.fullname?.toUpperCase()}
              </Dropdown.Item>
            ))}
          </Dropdown>
          <Button
            type='submit'
            onClick={handleAddPatient}
            style={{ marginLeft: '.5rem' }}
          >
            Add Patient
          </Button>
        </div>
        <div className='flex justify-around items-start flex-wrap pt-8'>
          {patientDetails?.data?.data?.map((item, index) => (
            <div className='max-w-sm m-2' key={index}>
              <Card>
                <div className='flex flex-col items-center pb-10'>
                  <Avatar name={item.fullname} round={true} />
                  <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white pt-4'>
                    {item.fullname?.toUpperCase()}
                  </h5>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    {item.desc}
                  </span>
                  <div className='mt-4 flex space-x-3 lg:mt-6'>
                    <Button onClick={() => handleViewPatient(1)}>View</Button>
                    <Button onClick={() => handleEditPatient(1)}>Edit</Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
