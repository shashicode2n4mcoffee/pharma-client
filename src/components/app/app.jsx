import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../../pages/dashboard'
import { Home } from '../../pages/home'
import { Login } from '../../pages/login'
import { Profile } from '../../pages/profile'
import { Register } from '../../pages/register'
import { PrivateRoute } from '../privateRoute'
import { PublicRoute } from '../publicRoute'
// import Styles from './app.module.scss';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<PrivateRoute component={Home} />} />
          <Route
            path='/login'
            element={<PublicRoute restricted={true} component={Login} />}
          />
          <Route
            path='/register'
            element={<PublicRoute restricted={true} component={Register} />}
          />
          <Route
            path='/dashboard'
            element={<PublicRoute restricted={true} component={Dashboard} />}
          />
          <Route
            path='/profile/:id'
            element={<PublicRoute restricted={true} component={Profile} />}
          />
        </Routes>
      </Layout>
    </div>
  )
}

const Layout = ({ children }) => (
  <div className=' h-screen '>
    <div className='h-full'>{children}</div>
  </div>
)

export { App }
