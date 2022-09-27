import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import { useToasts } from 'react-toast-notifications';
import SidebarComponent from '../components/Sidebar'

const Sidebar = ({setSidebarShow}) => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const logOut = async() => {
    // localStorage.removeItem('token')
    // dispatch(logout())
    try {
      await Auth.signOut();
      console.log('logout')
      addToast('You have logged out successfully', {
        appearance: 'success',
        autoDismiss: true
      })
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true
      })
    }
    navigate('/login')
  }

  const [pathname, setPathname] = useState(true);
  const path = useLocation()
  useEffect(() => {
    if(path.pathname === '/login' || path.pathname === '/' || path.pathname === '/confirmation' || path.pathname === '/signup') {
      setPathname(false)
      setSidebarShow(false)
    } else {
      setPathname(true)
      setSidebarShow(true)
    }
  }, [path.pathname]);


  return (
    <Fragment>
      {pathname ? <SidebarComponent logout={logOut}/> : <></>}
    </Fragment>
  )
}

export default Sidebar;