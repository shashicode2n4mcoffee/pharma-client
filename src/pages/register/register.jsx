// import { useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { errorToast, successToast } from '../../utils';
// import { registerUser } from '../../store/auth/authActions';
import { Link } from 'react-router-dom';
import {
	Label, TextInput, Button, Card
} from 'flowbite-react';
import { Typography } from '@material-tailwind/react';

export const Register = () => {
	// const dispatch = useDispatch();
	// const { loading } = useSelector((state) => state.auth);
	// const [validationError, setValidationError] = useState('');
	// let fullName = useRef('');
	// let email = useRef('');
	// let password = useRef('');

	// const signUpUser = (e) => {
	// 	e.preventDefault();
	// 	e.stopPropagation();

	// 	// validation for all fields
	// 	if (
	// 		!fullName.value.trim()
	// 		|| !email.value.trim()
	// 		|| !password.value.trim()
	// 	) {
	// 		setValidationError('All fields are required');
	// 	} else {
	// 		dispatch(registerUser({
	// 			fullName: fullName.value,
	// 			email: email.value,
	// 			password: password.value,
	// 		}))
	// 			.unwrap()
	// 			.then(() => {
	// 				e.target.reset();
	// 				successToast('User Registered Successfully');
	// 			})
	// 			.catch((errorData) => {
	// 				errorToast(errorData.error);
	// 			});
	// 	}
	// };

	return (
		<section className='h-2/3 flex justify-center items-center'>
			{/* <Toaster />
			<form onSubmit={signUpUser}>
				<div>
					<h1>Sign Up</h1>
					<p className="mt-4 mb-8">If you already have an account registered <br/>
						You can <Link to='/login' className="link">Login here !</Link>
					</p>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Full Name</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="fullName"
							placeholder="Enter your full name"
							id="fullName"
							onChange={() => setValidationError('')}
							ref={(e) => { fullName = e; } }
							type="text"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Email</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="email"
							placeholder="Enter your email"
							id="email"
							onChange={() => setValidationError('')}
							ref={(e) => { email = e; } }
							type="email"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Password</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="password"
							placeholder="Enter your password"
							id="password"
							onChange={() => setValidationError('')}
							ref={(e) => { password = e; } }
							type="password"
							required />
					</div>
				</div>
				{validationError && <p className="text-left text-red-500">{validationError}</p>}
				<button type="submit" className="primaryButton">
					{loading ? 'Loading...' : 'Register'}
				</button>
			</form> */}
			<div className='max-w-sm'>
				<Card>
					<form className='flex flex-col gap-4'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='fullName' value='Your Full Name' />
							</div>
							<TextInput
								id='fullName'
								type='text'
								required={true}
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email1' value='Your email' />
							</div>
							<TextInput
								id='email1'
								type='email'
								placeholder='name@flowbite.com'
								required={true}
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='password1' value='Your password' />
							</div>
							<TextInput id='password1' type='password' required={true} />
						</div>
						<Button type='submit'>Submit</Button>
						<Typography variant='small' className='mt-6 flex justify-center'>
              Do have an account?
							<Typography
								as='a'
								href='#signup'
								variant='small'
								color='blue'
								className='ml-1 font-bold'
							>
								<Link to='/login'>Sign in</Link>
							</Typography>
						</Typography>
					</form>
				</Card>
			</div>
		</section>
	);
};
