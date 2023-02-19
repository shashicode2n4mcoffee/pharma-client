import './sidebar.scss';
import React, { useEffect, useState } from 'react';
import {
	Sidebar,
} from 'flowbite-react';
import { useSearchParams } from 'react-router-dom';

export const SidebarComponent = () => {
	const [searchParams] = useSearchParams();
	const [profileLink, setProfileLink] = useState(null);

	useEffect(() => {
		setProfileLink(searchParams.get('profile'));
	}, [searchParams]);

	return (
		<div className='w-fit'>
			<Sidebar aria-label='Default sidebar example'>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Item
							className={
								(profileLink === 'view' || profileLink === null) && 'active'
							}
						>
              Profile
						</Sidebar.Item>
						<Sidebar.Item
							className={
								(profileLink === 'history' || profileLink === null) && 'active'
							}
						>
              Patient History
						</Sidebar.Item>
						<Sidebar.Item
							className={
								(profileLink === 'investigation' || profileLink === null)
                && 'active'
							}
						>
              Investigation
						</Sidebar.Item>
						<Sidebar.Item
							className={
								(profileLink === 'treatment' || profileLink === null)
                && 'active'
							}
						>
              Treatment
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};
