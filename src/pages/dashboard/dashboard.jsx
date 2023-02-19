import React from 'react';
import {
	Label, TextInput, Button, Dropdown, Card
} from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const patient = ['Bonnie Green', 'Bonnie Green'];
const patientDetails = [
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
	{
		fullName: 'Bonnie Green',
		desc: 'JoinPain',
		image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
	},
];
export const Dashboard = () => {
	const navigate = useNavigate();

	const handleAddPatient = () => {
		navigate({
			pathname: '/profile/1',
			search: '?profile=view',
		});
	};

	return (
		<section className='h-2/3 flex justify-start items-center p-8 flex-col'>
			<div className='mb-2 flex justify-center items-center'>
				<div className='pr-4'>
					<Label htmlFor='fullName' value='Your Full Name' />
				</div>
				<TextInput
					id='fullName'
					type='text'
					required={true}
					placeholder='Patient Name'
				/>
				<div className='pl-4'>
					<Button type='submit'>Go</Button>
				</div>
			</div>
			<div className='flex justify-center items-start flex-col pt-6 w-2/3'>
				<div className='flex justify-between items-center w-full px-2'>
					<Dropdown label='Recent Patients' dismissOnClick={false}>
						{patient.map((item, index) => (
							<Dropdown.Item key={index}>{item}</Dropdown.Item>
						))}
					</Dropdown>
					<Button type='submit' onClick={handleAddPatient}>
            Add Patient
					</Button>
				</div>
				<div className='flex justify-around items-start flex-wrap pt-8'>
					{patientDetails.map((item, index) => (
						<div className='max-w-sm m-2' key={index}>
							<Card>
								<div className='flex flex-col items-center pb-10'>
									<img
										className='mb-3 h-24 w-24 rounded-full shadow-lg'
										src={item.image}
										alt={item.fullName}
									/>
									<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
										{item.fullName}
									</h5>
									<span className='text-sm text-gray-500 dark:text-gray-400'>
										{item.desc}
									</span>
									<div className='mt-4 flex space-x-3 lg:mt-6'>
										<span>Edit</span>
										<span>View</span>
									</div>
								</div>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
