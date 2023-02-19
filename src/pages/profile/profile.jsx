import React from 'react';
import { ProfileView } from '../../components/profile/view';
import { SidebarComponent } from '../../components/profile/sidebar';

export const Profile = () => {
	return (
		<section className='h-2/3 flex justify-center items-start min-h-max pt-8'>
			<SidebarComponent/>
			<ProfileView/>
		</section>
	);
};
