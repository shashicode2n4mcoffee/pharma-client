import React, { useEffect, useState } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ReactLoading from 'react-loading'
import { useSelector, useDispatch } from 'react-redux'
import { Investigation } from '../../components/profile/investigation'
import { ProfileView } from '../../components/profile/view'
import { SidebarComponent } from '../../components/profile/sidebar'
import { Treatment } from '../../components/profile/treatment'
import { PatientHistory } from '../../components/profile/patienthistory'
import { errorToast, successToast } from '../../utils'

import {
  fetchPatientById,
  removeCurrentPatient,
} from '../../store/currentPatient/currentPatientActions'

export const Profile = () => {
  const [searchParams] = useSearchParams()
  const { id } = useParams()
  const [profileLink, setProfileLink] = useState(null)
  const [edit, setEdit] = useState(false)
  const patientData = useSelector((state) => state.currentPatient)
  const dispatch = useDispatch()

  useEffect(() => {
    if (+id !== -1) {
      dispatch(fetchPatientById(id))
        .then((data) => {
          if (data?.payload?.success) {
            successToast('Fetched Paitent')
          }
        })
        .catch(() => {
          errorToast('Something went wrong. please try again')
        })
    } else {
      dispatch(removeCurrentPatient())
    }
  }, [id])

  useEffect(() => {
    setProfileLink(searchParams.get('profile'))
    setEdit(searchParams.get('edit') !== 'false')
  }, [searchParams])

  return (
    <section className='h-2/3 flex justify-center items-start min-h-max pt-8 flex-wrap'>
      <Toaster />
      {patientData?.loading && (
        <div className='absolute inset-2/4'>
          <ReactLoading type='bars' color='#1A56DB' />
        </div>
      )}
      <SidebarComponent patientId={id} edit={edit} />
      {(profileLink === 'view' || profileLink === null) && (
        <ProfileView
          patientData={patientData?.currentPatient}
          edit={edit}
          id={id}
        />
      )}
      {profileLink === 'history' && (
        <PatientHistory
          patientData={patientData?.currentPatient}
          edit={edit}
          id={id}
        />
      )}
      {profileLink === 'investigation' && (
        <Investigation
          patientData={patientData?.currentPatient}
          edit={edit}
          id={id}
        />
      )}
      {profileLink === 'treatment' && (
        <Treatment
          patientData={patientData?.currentPatient}
          edit={edit}
          id={id}
        />
      )}
    </section>
  )
}
