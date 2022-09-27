import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { useToasts } from 'react-toast-notifications'
import SignupComponent from '../../components/Auth/Signup'
import { signup } from '../../actions/auth'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const onSignup = async () => {
    dispatch(signup(email, phone))
    setLoading(true)
    try {
      await Auth.signUp({
        username: email ? email : phone ,
        password: email ? email : phone ,
        attributes: {
          email: email,
          phone_number: phone,
        },
        autoSignIn: { 
          enabled: true,
      }
      });
      addToast('Account Registration Success!', {
        appearance: 'success',
        autoDismiss: true,
      })
      
      navigate('/confirmation')
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true,
      })
    }
    setLoading(false)
  }
  return <SignupComponent
    email={email}
    phone={phone}
    setEmail={setEmail}
    setPhone={setPhone}
    onSignup={onSignup}
    loading={loading}
  />
}

export default Signup