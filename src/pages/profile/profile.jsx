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
	const [patientData, setPatientData] = useState();

	useEffect(() => {
		if (id !== 'null') {
			setPatientData(patientDetails);
		} else {
			setPatientData(null);
		}
	}, [id]);

	useEffect(() => {
		setProfileLink(searchParams.get('profile'));
	}, [searchParams]);

	return (
		<section className='h-2/3 flex justify-center items-start min-h-max pt-8'>
			<SidebarComponent />
			{(profileLink === 'view' || profileLink === null) && (
				<ProfileView profile={patientData?.profile} />
			)}
			{profileLink === 'history' && (
				<PatientHistory history={patientData?.history} />
			)}
			{profileLink === 'investigation' && (
				<Investigation investigation={patientData?.investigation} />
			)}
			{profileLink === 'treatment' && (
				<Treatment treatment={patientData?.treatment} />
			)}
		</section>
	);
};
