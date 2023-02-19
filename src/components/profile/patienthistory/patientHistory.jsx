import React from 'react';
import {
	Card, Label, Textarea, Button
} from 'flowbite-react';

export const PatientHistory = () => {
	return (
		<div className='w-2/3'>
			<Card>
				<div className='flex justify-between items-center'>
					<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
            Bonnie Green
					</h5>
					<Button type='submit' className='mr-4'>
            Edit
					</Button>
				</div>
				<div className='mb-2 block'>
					<Label htmlFor='comment' value='Your message' />
				</div>
				<Textarea
					id='comment'
					placeholder='Enter history...'
					required={true}
					rows={15}
				/>
				<div className='flex justify-between items-center'>
					<div>
						<Button type='submit' color='gray'>
              Cancel
						</Button>
					</div>
					<div className='flex justify-between items-center'>
						<Button type='submit'>Submit</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};
