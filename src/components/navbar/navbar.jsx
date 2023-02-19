// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';
import { Button, Navbar as NavbarComponent } from 'flowbite-react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
	// const dispatch = useDispatch();
	// const { user, accessToken } = useSelector((state) => state.auth);

	// useEffect(() => {
	// 	if (accessToken) {
	// 		dispatch(verifyUserDetails());
	// 	}

	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	// const logoutHandler = () => {
	// 	dispatch(logoutUser());
	// };

	const location = useLocation();

	useEffect(() => {
		console.log('LOCATION : ', location);
	}, [location]);

	return (
		<NavbarComponent fluid={true} rounded={true}>
			<NavbarComponent.Brand href=''>
				<img
					src='https://flowbite.com/docs/images/logo.svg'
					className='mr-3 h-6 sm:h-9'
					alt='Flowbite Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Patted Clinic
				</span>
			</NavbarComponent.Brand>
			<div className='flex md:order-2'>
				{location && !location?.pathname === '/login' && (
					<Link to='/login'>
						<Button>Logout</Button>
					</Link>
				)}

				<NavbarComponent.Toggle />
			</div>
			<NavbarComponent.Collapse>
				<NavbarComponent.Link active={true}>
					<Link to='/dashboard'>Dashboard</Link>
				</NavbarComponent.Link>
			</NavbarComponent.Collapse>
		</NavbarComponent>
	);
};

export { Navbar };
