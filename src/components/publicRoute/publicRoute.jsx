import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Navbar } from '../navbar'
import { FooterComponent } from '../footer/footer'

export const PublicRoute = ({ component: Component, ...props }) => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className='h-screen relative'>
      <Navbar />
      {user && props.restricted ? (
        <Navigate
          to={{ pathname: '/login', state: { from: props.location } }}
          replace
        />
      ) : (
        <Component {...props} />
      )}
      <div className='absolute bottom-0 left-0'>
        <FooterComponent />
      </div>
    </div>
  )
}
