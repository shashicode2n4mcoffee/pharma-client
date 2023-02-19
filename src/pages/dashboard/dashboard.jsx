import React from 'react';
import {
	Label, TextInput, Button, Dropdown, Card
} from 'flowbite-react';

const patient = ['Bonnie Green', 'Bonnie Green'];
export const Dashboard = () => {
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
			<div className='flex justify-center items-start flex-col pt-6'>
				<div className='flex justify-between items-center w-full px-2'>
					<Dropdown label='Recent Patients' dismissOnClick={false}>
						{patient.map((item, index) => (
							<Dropdown.Item key={index}>{item}</Dropdown.Item>
						))}
					</Dropdown>
					<Button type='submit'>Add Patient</Button>
				</div>
				<div className='flex justify-around items-start flex-wrap pt-8'>
					<div className='max-w-sm mr-2'>
						<Card>
							<div className='flex flex-col items-center pb-10'>
								<img
									className='mb-3 h-24 w-24 rounded-full shadow-lg'
									src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
									alt='Bonnie image'
								/>
								<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Bonnie Green
								</h5>
								<span className='text-sm text-gray-500 dark:text-gray-400'>
                  Joint Pain
								</span>
								<div className='mt-4 flex space-x-3 lg:mt-6'>
									<a
										href='#'
										className='inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
                    View
									</a>
									<a
										href='#'
										className='inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
									>
                    Edit
									</a>
								</div>
							</div>
						</Card>
					</div>
					<div className='max-w-sm mr-2'>
						<Card>
							<div className='flex flex-col items-center pb-10'>
								<img
									className='mb-3 h-24 w-24 rounded-full shadow-lg'
									src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
									alt='Bonnie image'
								/>
								<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Bonnie Green
								</h5>
								<span className='text-sm text-gray-500 dark:text-gray-400'>
                  Joint Pain
								</span>
								<div className='mt-4 flex space-x-3 lg:mt-6'>
									<a
										href='#'
										className='inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
                    View
									</a>
									<a
										href='#'
										className='inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
									>
                    Edit
									</a>
								</div>
							</div>
						</Card>
					</div>
					<div className='max-w-sm mr-2'>
						<Card>
							<div className='flex flex-col items-center pb-10'>
								<img
									className='mb-3 h-24 w-24 rounded-full shadow-lg'
									src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
									alt='Bonnie image'
								/>
								<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Bonnie Green
								</h5>
								<span className='text-sm text-gray-500 dark:text-gray-400'>
                  Joint Pain
								</span>
								<div className='mt-4 flex space-x-3 lg:mt-6'>
									<a
										href='#'
										className='inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
                    View
									</a>
									<a
										href='#'
										className='inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
									>
                    Edit
									</a>
								</div>
							</div>
						</Card>
					</div>
					<div className='max-w-sm mr-2'>
						<Card>
							<div className='flex flex-col items-center pb-10'>
								<img
									className='mb-3 h-24 w-24 rounded-full shadow-lg'
									src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
									alt='Bonnie image'
								/>
								<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                  Bonnie Green
								</h5>
								<span className='text-sm text-gray-500 dark:text-gray-400'>
                  Joint Pain
								</span>
								<div className='mt-4 flex space-x-3 lg:mt-6'>
									<a
										href='#'
										className='inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
                    View
									</a>
									<a
										href='#'
										className='inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
									>
                    Edit
									</a>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
