import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Investigation } from '../../components/profile/investigation';
import { ProfileView } from '../../components/profile/view';
import { SidebarComponent } from '../../components/profile/sidebar';
import { Treatment } from '../../components/profile/treatment';
import { PatientHistory } from '../../components/profile/patienthistory';

export const Profile = () => {
	const [searchParams] = useSearchParams();
	const [profileLink, setProfileLink] = useState(null);

	useEffect(() => {
		setProfileLink(searchParams.get('profile'));
	}, [searchParams]);

	return (
		<section className='h-2/3 flex justify-center items-start min-h-max pt-8'>
			<SidebarComponent />
			{(profileLink === 'view' || profileLink === null) && <ProfileView />}
			{profileLink === 'history' && <PatientHistory />}
			{profileLink === 'investigation' && <Investigation />}
			{profileLink === 'treatment' && <Treatment />}
		</section>
	);
};
