// import { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast';
// import { loginUser } from '../../store/auth/authActions';
// import { errorToast } from '../../utils';
import {
	Label, TextInput, Button, Checkbox, Card
} from 'flowbite-react';
import {
	Typography,
} from '@material-tailwind/react';

export const Login = () => {
	// const { user, loading } = useSelector((state) => state.auth);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const email = useRef('');
	// const password = useRef('');

	// useEffect(() => {
	// 	if (user) {
	// 		navigate('/', { successLogin: true });
	// 	}
	// }, [navigate, user]);

	// const signinUser = async (e) => {
	// 	e.preventDefault();

	// 	dispatch(loginUser({
	// 		email: email.value,
	// 		password: password.value
	// 	}))
	// 		.unwrap()
	// 		.catch((errorData) => {
	// 			errorToast(errorData.error);
	// 		});
	// };

	return (
		<section className='h-2/3 flex justify-center items-center'>
			{/* <Toaster />
			<form onSubmit={signinUser}>
				<div>
					<h1>Sign In</h1>
					<p className="mt-4 mb-8">If you don't have an account <br/>
						You can <Link to='/register' className="link">Register here !</Link>
					</p>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Email</label>
					<div className="relative">
						<input
							className="inputField w-full mb-8"
							name="email"
							placeholder="Enter your email"
							id="email"
							ref={(e) => { email = e; } }
							type="email"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Password</label>
					<div className="relative">
						<input
							className="inputField w-full mb-8"
							name="password"
							placeholder="Enter your password"
							id="password"
							ref={(e) => { password = e; } }
							type="password"
							required />
					</div>
				</div>
				<button type="submit" className="primaryButton mt-4">
					{loading ? 'Loading...' : 'Login'}
				</button>
			</form> */}
			<div className='max-w-sm'>
				<Card>
					<form className='flex flex-col gap-4'>
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
						<div className='flex items-center gap-2'>
							<Checkbox id='remember' />
							<Label htmlFor='remember'>Remember me</Label>
						</div>
						<Button type='submit'>Submit</Button>
						<Typography variant='small' className='mt-6 flex justify-center'>
              Don't have an account?
							<Typography
								as='a'
								href='#signup'
								variant='small'
								color='blue'
								className='ml-1 font-bold'
							>
								<Link to='/register'>Sign up</Link>
							</Typography>
						</Typography>
					</form>
				</Card>
			</div>
		</section>
	);
};
