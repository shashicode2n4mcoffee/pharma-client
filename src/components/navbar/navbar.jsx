// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';
import { Button, Navbar as NavbarComponent } from 'flowbite-react'

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
        <Button>Login</Button>
        <NavbarComponent.Toggle />
      </div>
      <NavbarComponent.Collapse>
        <NavbarComponent.Link href='/navbars' active={true}>
          Home
        </NavbarComponent.Link>
        <NavbarComponent.Link href='/navbars'>About</NavbarComponent.Link>
        <NavbarComponent.Link href='/navbars'>Services</NavbarComponent.Link>
        <NavbarComponent.Link href='/navbars'>Pricing</NavbarComponent.Link>
        <NavbarComponent.Link href='/navbars'>Contact</NavbarComponent.Link>
      </NavbarComponent.Collapse>
    </NavbarComponent>
  )
};

export { Navbar };
