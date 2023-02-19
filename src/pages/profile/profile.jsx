import React from 'react';
import {
	Sidebar,
	Card,
	Label,
	TextInput,
	Button,
} from 'flowbite-react';

const gender = ['Male', 'Female', 'Others'];
const ocupation = [
	'Agriculture',
	'Engineer',
	'Doctor',
	'Bussiness',
	'Housewife',
];

export const Profile = () => {
	return (
		<section className='h-2/3 flex justify-center items-start min-h-max pt-8'>
			<div className='w-fit'>
				<Sidebar aria-label='Default sidebar example'>
					<Sidebar.Items>
						<Sidebar.ItemGroup>
							<Sidebar.Item href='#'>Dashboard</Sidebar.Item>
							<Sidebar.Item href='#'>Inbox</Sidebar.Item>
							<Sidebar.Item href='#'>Users</Sidebar.Item>
							<Sidebar.Item href='#'>Products</Sidebar.Item>
							<Sidebar.Item href='#'>Sign In</Sidebar.Item>
							<Sidebar.Item href='#'>Sign Up</Sidebar.Item>
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</Sidebar>
			</div>
			<div className='w-2/3'>
				<Card>
					<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            Bonnie Green
					</h5>
					<form className='flex flex-col gap-4'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='fullName' value='Full name' />
							</div>
							<TextInput
								id='fullName'
								type='text'
								placeholder='Full Name'
								required={true}
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='age' value='Age' />
							</div>
							<TextInput id='age' type='number' required={true} />
						</div>
						<div>
							<label
								for='countries'
								class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
                Select an gender
							</label>
							<select
								id='countries'
								class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							>
								{gender.map((item, index) => (
									<option selected key={index}>
										{item}
									</option>
								))}
								<option selected>Choose a gender</option>
							</select>
						</div>
						<div>
							<label
								for='countries'
								class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
                Select an ocupation
							</label>
							<select
								id='countries'
								class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							>
								{ocupation.map((item, index) => (
									<option selected key={index}>
										{item}
									</option>
								))}
								<option selected>Choose a ocupation</option>
							</select>
						</div>
						<div className='flex items-center gap-2'></div>
						<Button type='submit'>Submit</Button>
					</form>
				</Card>
			</div>
		</section>
	);
};
