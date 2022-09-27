import React, { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Amplify } from 'aws-amplify'
import * as AWS from 'aws-sdk'
import { ToastProvider } from 'react-toast-notifications'
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import { Fragment } from 'react'
import Dashboard from './pages/Dashboard'
import FirstView from './containers/firstview'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Confirmation from './pages/Auth/Confirmation'
import Profile from './pages/Profile'
import Income from './pages/Income'
import Property from './pages/Property'
import Payment from './pages/Payment'
import Preloader from './containers/Preloader'
import Toast from './containers/Toast'
import { awsConfig } from './constants/aws-exports'
import ProtectedRoute from './helpers/ProtectedRoute'
import NonProtectedRoute from './helpers/NonProtectedRoute'

import './App.css'

Amplify.configure(awsConfig)

function App() {

  const [sidebarShow, setSidebarShow] = useState(false)
  return (
    <Fragment>
      {/* <Header /> */}
        <ToastProvider>
          <Sidebar setSidebarShow={setSidebarShow}/>
          <Container className='app-container' style={{ marginTop: "70px"}}>
            <Routes>
              <Route path='/' element={<React.Fragment><Home /></React.Fragment>} />
              <Route path='/overview' element={<React.Fragment><FirstView /></React.Fragment>} />
              <Route path='/dashboard' element={<React.Fragment><ProtectedRoute><Dashboard /></ProtectedRoute></React.Fragment>} />
              <Route path='/login' element={<React.Fragment><Login /></React.Fragment>} />
              <Route path='/signup' element={<React.Fragment><Signup /></React.Fragment>} />
              <Route path='/confirmation' element={<React.Fragment><Confirmation /></React.Fragment>} />
              <Route path='/profile' element={<React.Fragment><ProtectedRoute><Profile /></ProtectedRoute></React.Fragment>} />
              <Route path='/income' element={<React.Fragment><ProtectedRoute><Income /></ProtectedRoute></React.Fragment>} />
              <Route path='/property' element={<React.Fragment><ProtectedRoute><Property /></ProtectedRoute></React.Fragment>} />
              <Route path='/payment' element={<React.Fragment><ProtectedRoute><Payment /></ProtectedRoute></React.Fragment>} />
            </Routes>
            <Preloader />
            {/* <Toast /> */}
          </Container>
        </ToastProvider>
    </Fragment>

  )
}

export default App
