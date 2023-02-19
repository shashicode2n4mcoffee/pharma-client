import React from 'react';
import {
	Card, Label, Textarea, Button
} from 'flowbite-react';

const percentage = [10, 20, 30];

export const Treatment = ({ patientData }) => {
	return (
		<div className='w-2/3'>
			<Card>
				<div className='flex justify-between items-center'>
					<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
						{patientData?.profile?.firstName}
					</h5>
					{patientData && (
						<Button type='submit' className='mr-4'>
              Edit
						</Button>
					)}
				</div>
				<div className='flex flex-wrap gap-2'>
					<Button.Group>
						<Button color='gray'>Jan 1</Button>
						<Button color='gray'>Feb 21</Button>
						<Button color='gray'>March 12</Button>
					</Button.Group>
				</div>
				<div className='mb-2 block'>
					<Label htmlFor='comment' value='Your message' />
				</div>
				<div className='flex justify-between items-start'>
					<Card className='w-1/2 mr-1 h-full'>
						<div className='mb-4 flex items-center justify-between'>
							<h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                Parameters
							</h5>
						</div>
						<div className='flow-root'>
							<ul className='divide-y divide-gray-200 dark:divide-gray-700'>
								<li className='py-3 sm:py-4'>
									<div className='flex items-center space-x-4'>
										<div className='shrink-0'></div>
										<div className='min-w-0 flex justify-between items-center w-full'>
											<p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Percentage of Joint pain
											</p>
											<select id='joinPain'>
												{percentage.map((item, index) => (
													<option selected key={index}>
														{item}
													</option>
												))}
												<option selected>Choose a percentage</option>
											</select>
										</div>
									</div>
								</li>
								<li className='py-3 sm:py-4'>
									<div className='flex items-center space-x-4'>
										<div className='shrink-0'></div>
										<div className='min-w-0 flex justify-between items-center w-full'>
											<p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Percentage of Vital Stable
											</p>
											<select id='joinPain'>
												{percentage.map((item, index) => (
													<option selected key={index}>
														{item}
													</option>
												))}
												<option selected>Choose a percentage</option>
											</select>
										</div>
									</div>
								</li>
								<li className='py-3 sm:py-4'>
									<div className='flex items-center space-x-4'>
										<div className='shrink-0'></div>
										<div className='min-w-0 flex justify-between items-center w-full'>
											<p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Percentage of Joint pain
											</p>
											<select id='joinPain'>
												{percentage.map((item, index) => (
													<option selected key={index}>
														{item}
													</option>
												))}
												<option selected>Choose a percentage</option>
											</select>
										</div>
									</div>
								</li>
								<li className='py-3 sm:py-4'>
									<div className='flex items-center space-x-4'>
										<div className='shrink-0'></div>
										<div className='min-w-0 flex justify-between items-center w-full'>
											<p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                        Percentage of Vital Stable
											</p>
											<select id='joinPain'>
												{percentage.map((item, index) => (
													<option selected key={index}>
														{item}
													</option>
												))}
												<option selected>Choose a percentage</option>
											</select>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</Card>

					<Card className='w-1/2 ml-1'>
						<Textarea
							id='comment'
							placeholder='Enter treatment...'
							required={true}
							rows={14}
							value={patientData && 'jsdhfkjalskd'}
						/>
					</Card>
				</div>
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
