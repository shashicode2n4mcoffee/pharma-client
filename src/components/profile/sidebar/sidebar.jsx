import React from 'react';
import {
	Sidebar,
} from 'flowbite-react';

export const SidebarComponent = () => {
	return (
		<div className='w-fit'>
			<Sidebar aria-label='Default sidebar example'>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Item href='#'>Profile</Sidebar.Item>
						<Sidebar.Item href='#'>Patient History</Sidebar.Item>
						<Sidebar.Item href='#'>Investigation</Sidebar.Item>
						<Sidebar.Item href='#'>Treatment</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};
