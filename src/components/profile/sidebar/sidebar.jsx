import './sidebar.scss';
import React, { useEffect, useState } from 'react';
import {
	Sidebar,
} from 'flowbite-react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const SidebarComponent = () => {
	const [searchParams] = useSearchParams();
	const [profileLink, setProfileLink] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		setProfileLink(searchParams.get('profile'));
	}, [searchParams]);

	const handleProfileNavigation = (subRoute) => {
		navigate({
			pathname: '/profile/null',
			search: `?profile=${subRoute}`,
		});
	};

	return (
		<div className='w-fit'>
			<Sidebar aria-label='Default sidebar example'>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Item
							className={
								profileLink === 'view' || profileLink === null
									? 'active'
									: 'inactive'
							}
							onClick={() => handleProfileNavigation('view')}
						>
              Profile
						</Sidebar.Item>
						<Sidebar.Item
							className={
								profileLink === 'history' || profileLink === null
									? 'active'
									: 'inactive'
							}
							onClick={() => handleProfileNavigation('history')}
						>
              Patient History
						</Sidebar.Item>
						<Sidebar.Item
							className={
								profileLink === 'investigation' || profileLink === null
									? 'active'
									: 'inactive'
							}
							onClick={() => handleProfileNavigation('investigation')}
						>
              Investigation
						</Sidebar.Item>
						<Sidebar.Item
							className={
								profileLink === 'treatment' || profileLink === null
									? 'active'
									: 'inactive'
							}
							onClick={() => handleProfileNavigation('treatment')}
						>
              Treatment
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};
