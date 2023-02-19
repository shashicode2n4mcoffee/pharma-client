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
						<Sidebar.Item >Profile</Sidebar.Item>
						<Sidebar.Item >Patient History</Sidebar.Item>
						<Sidebar.Item >Investigation</Sidebar.Item>
						<Sidebar.Item >Treatment</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};
