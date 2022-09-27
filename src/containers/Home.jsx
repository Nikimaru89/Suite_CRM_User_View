import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import HomeComponent from '../components/Home'

import { logout } from '../actions/auth'

const Home = () => {
  return <HomeComponent />
}

export default Home