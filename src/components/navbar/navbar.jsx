// import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
// import { NavLink } from 'react-router-dom';
// import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';
import { Button, Navbar as NavbarComponent } from 'flowbite-react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { logoutUser } from '../../store/auth/authActions'
import { errorToast, successToast } from '../../utils'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location && !(location.pathname === '/login')) {
      setShowLogout(true)
    } else {
      setShowLogout(false)
    }
  }, [location])

  const logoutHandler = () => {
    dispatch(logoutUser())
      .then((data) => {
        if (data?.payload?.success) {
          navigate('/login', { successLogin: true })
          successToast('Logout Successful')
        }
      })
      .catch(() => {
        errorToast('Something went wrong. please try again')
      })
  }

  return (
    <NavbarComponent fluid={true} rounded={true}>
      <NavbarComponent.Brand
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/dashboard')}
      >
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
        {showLogout && (
          <Link to='/login'>
            <Button onClick={logoutHandler}>Logout</Button>
          </Link>
        )}

        <NavbarComponent.Toggle />
      </div>
      <NavbarComponent.Collapse>
        {showLogout && <Link to='/dashboard'>Dashboard</Link>}
      </NavbarComponent.Collapse>
    </NavbarComponent>
  )
}

export { Navbar }
