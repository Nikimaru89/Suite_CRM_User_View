import React, { useState } from 'react';
import { Auth } from 'aws-amplify'
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications'
import { useNavigate } from 'react-router-dom';
import ConfirmationComponent from '../../components/Auth/Confirmation';

const Confirmation = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(false)
  const email = useSelector(state => state.auth.currentUser.email )
  const phone = useSelector(state => state.auth.currentUser.phone )
  const onConfirmation = async() => {
    setLoading(true)
    try {
      await Auth.confirmSignUp(email ? email : phone, code);
      addToast('Confirming your account success', {
        appearance:'success',
        autoDismiss: true
      })
      navigate('/overview')
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true
      })
    }
    setLoading(false)
  }

  const handleResend = async() => {
    setLoad(true)
    try {
      await Auth.resendSignUp(email ? email : phone);
      addToast('Re-send verification code success', {
        appearance: 'success',
        autoDismiss: true
      })
    } catch (error) {
        addToast('Re-send verification code failed', {
          appearance:'error',
          autoDismiss: true
        })
    }
    setLoad(false)
  }

  return (
    <ConfirmationComponent 
      code={code}
      setCode={setCode}
      onConfirmation={onConfirmation}
      handleResend={handleResend}
      loading={loading}
      load={load}
    />
  )
}

export default Confirmation