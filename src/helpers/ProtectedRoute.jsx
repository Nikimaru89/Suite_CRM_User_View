import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { Auth } from 'aws-amplify'
import Preloader from '../components/Preloader'

import { login } from '../actions/auth'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

const ProtectedRoute = props => {
  const dispatch = useDispatch()
  const [loginState, setLoginState] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    Auth.currentSession()
    .then(data => {
      setLoginState(data.accessToken.jwtToken)
      setLoaded(true)
    }
    )
    .catch(err => {
      console.log(err)
      setLoaded(true)
    });
  },[])

    if (!loaded) {
      return <Preloader />
    }
    if (loginState) {
      return <React.Fragment>{props.children}</React.Fragment>
    }
    return <Navigate to='/login' />
}

export default ProtectedRoute