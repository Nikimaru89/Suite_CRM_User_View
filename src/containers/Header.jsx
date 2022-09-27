import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Auth } from 'aws-amplify'
import HeaderComponent from '../components/Header'
import { logout } from '../actions/auth'

const Header = () => {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const logOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
    navigate('/login')
  }

  return <HeaderComponent user={auth.currentUser} logout={logOut} />
}

export default Header