import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { Auth } from 'aws-amplify'
import LoginComponent from '../../components/Auth/Login'

const Login = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()
  const [loading, setLoading] = useState(false)
  const onLogin = async () => {
    setLoading(true)
    try {
      await Auth.signIn(email ? email : phone, email ? email : phone);
      addToast('Sign in succeeded', {
        appearance:'success',
        autoDismiss: true
      });
      navigate('/overview');
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true
      })
    }
    setLoading(false)
  }
  return (
  <LoginComponent 
    email={email} 
    phone={phone}
    setEmail={setEmail}
    setPhone={setPhone}
    onLogin={onLogin} 
    loading={loading}
    />
  )
  }

export default Login