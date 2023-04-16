import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-tailwind/react'
import store from './store'
import { App } from './components/app'
import reportWebVitals from './reportWebVitals'
// import Test from './components/Test';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>

      {/* <Test/> */}
    </Router>
  </Provider>
)

reportWebVitals()
