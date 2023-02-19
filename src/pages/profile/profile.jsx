import React, { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { Investigation } from '../../components/profile/investigation';
import { ProfileView } from '../../components/profile/view';
import { SidebarComponent } from '../../components/profile/sidebar';
import { Treatment } from '../../components/profile/treatment';
import { PatientHistory } from '../../components/profile/patienthistory';

const patientDetails = {
	profile: {
		fullName: 'Bonnie Green',
		age: 26,
		gender: 'Female',
		ocupation: 'Agriculture',
	},
	history: {
		details: 'jahsdkjfnakjsjdflskdmlaks.d',
	},
	investigation: [
		{
			date: 'Jan 1',
			deatils: 'sadkjfjasdkf',
		},
		{
			date: 'Jan 1',
			deatils: 'sadkjfjasdkf',
		},
	],
	treatment: [
		{
			date: 'Jan 1',
			deatils: 'sadkjfjasdkf',
		},
		{
			date: 'Jan 1',
			deatils: 'sadkjfjasdkf',
		},
	],
};

export const Profile = () => {
	const [searchParams] = useSearchParams();
	const { id } = useParams();
	const [profileLink, setProfileLink] = useState(null);
	const [patientData, setPatientData] = useState(null);

	useEffect(() => {
		if (+id !== -1) {
			setPatientData(patientDetails);
		}
	}, [id]);

	useEffect(() => {
		setProfileLink(searchParams.get('profile'));
	}, [searchParams]);

	return (
		<section className='h-2/3 flex justify-center items-start min-h-max pt-8'>
			<SidebarComponent patientId={id} />
			{(profileLink === 'view' || profileLink === null) && (
				<ProfileView patientData={patientData} />
			)}
			{profileLink === 'history' && (
				<PatientHistory patientData={patientData} />
			)}
			{profileLink === 'investigation' && (
				<Investigation patientData={patientData} />
			)}
			{profileLink === 'treatment' && <Treatment patientData={patientData} />}
			{id}
		</section>
	);
};
