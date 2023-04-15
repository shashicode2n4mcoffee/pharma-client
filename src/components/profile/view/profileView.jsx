import React from 'react'
import { Card, Label, TextInput, Button } from 'flowbite-react'

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
  return (
    <div className='w-2/3'>
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
        <form className='flex flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='fullName' value='Full name' />
            </div>
            <TextInput
              id='fullName'
              type='text'
              placeholder='Full Name'
              required={true}
              value={patientData?.profile?.fullName}
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
              value={patientData?.profile?.age}
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
              id='countries'
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
