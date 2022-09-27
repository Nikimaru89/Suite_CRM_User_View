import React, { useState } from 'react'
import ProfileComponent from '../components/Profile';

const Profile = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [country, setCountry] = useState(null)
  const [residency, setResidency] = useState('UAE Resident')
  const [martial, setMartial] = useState('single')
  const [birthDate, setBirthDate] = useState(new Date())
  return (
    <ProfileComponent 
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      tel={tel}
      setTel={setTel}
      country={country}
      setCountry={setCountry}
      residency={residency}
      setResidency={setResidency}
      martial={martial}
      setMartial={setMartial}
      birthDate={birthDate}
      setBirthDate={setBirthDate}
    />
  )
}

export default Profile