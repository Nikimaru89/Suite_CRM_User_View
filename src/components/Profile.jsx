import React, { useState, useEffect, Fragment }  from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Card, 
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CountrySelect from 'react-bootstrap-country-select'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker"
import { Formik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import * as AWS from 'aws-sdk'
import 'react-phone-number-input/style.css'
import "react-datepicker/dist/react-datepicker.css"
import './style/profile.css';
import { sidebar_check } from '../actions/sidebar'
import { progress_value } from '../actions/progress'

const configuration = {
  region:'eu-west-2',
  secretAccessKey:'qXNIQ+f5ocP1JTJZ+k+mNEROVU9DYHCzq6d0SeqU',
  accessKeyId:'AKIAWPEJKNXDNX4G7S4F'
}

AWS.config.update(configuration)
const docClient = new AWS.DynamoDB.DocumentClient()

export const putData = (tableName , data) => {
  var params = {
      TableName: tableName,
      Item: data
  }
  
  docClient.put(params, function (err, data) {
      if (err) {
          console.log('Error', err)
      } else {
          console.log('Success', data)
      }
  })
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please input firstName'),
  lastName: yup.string().required('Please input lastName'),
  email: yup.string().email('Invalid email format').required('Please input your email'),
  tel: yup.string().required('Please input your telephone number'),
  country: yup.string().required('Please select your country'),
  residency: yup.string().required('Please select your residency')
});
const Profile = ({
  firstName, 
  setFirstName, 
  lastName, 
  setLastName, 
  email, 
  setEmail, 
  tel, 
  setTel, 
  birthDate,
  setBirthDate,
  country, 
  setCountry, 
  residency, 
  setResidency,
  martial,
  setMartial,
}) => {
  const [currentEmail, setCurrentEmail] = useState('')
  const [currentPhone, setCurrentPhone] = useState('')
  const dispatch = useDispatch()
  console.log('birth', birthDate.getUTCMonth() + 1)
  const addDataToDynamoDB = async () => {
    const userData = {
      id:0,
      first_name:firstName,
      last_name:lastName,
      email:currentEmail ? currentEmail : email,
      phone_number:currentPhone ? currentPhone : tel,
      birth_date:birthDate.getUTCFullYear() + "/" + (birthDate.getUTCMonth() + 1) + "/" + birthDate.getUTCDate(),
      nationality:country.name,
      residency_status:residency,
      martial_status:martial
    }
    
    await putData('user_profile' , userData)
    console.log('ok')
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(data => {
      setCurrentEmail(data?.attributes?.email)
      {data.attributes.phone_number && 
      setCurrentPhone(data.attributes.phone_number)
      }
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <Container fluid>
      <div className='pb-5'>
        <h1 style={{
          fontFamily: 'AGaramond-regular',
          fontSize: '64px',
          letterSpacing: '-5px',
        }}
        >Your Profile</h1>
        <p>
          Complete some basic information about your identity and residency status. 
          Please fill in the details as it appears on your Emirates ID or passport.
        </p>
      <Card className='striped-tabled-with-hover mt-5 py-5 px-3' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px'}}>
        <h4 style={{
          fontFamily: 'AGaramond-regular',
          fontSize: '32px',
          letterSpacing: '-2px',
        }}
        >Your Details</h4>
        <p>Please fill in all the fields in order to ensure a complete application.</p>
        <Formik
          validationSchema={schema}
          onSubmit={console.log('')}
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            email: currentEmail ? currentEmail : email,
            tel: currentPhone ? currentPhone : tel,
            country:'',
            residency:''
          }}
        >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div style={{width:'100%'}}>
            <Form.Group className="d-flex justify-content-between mb-3 gap-2" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name='firstName' 
                  value={firstName}
                  onChange={
                    e => {handleChange(e)
                    setFirstName(e.target.value)
                    }}
                  isInvalid={!!touched && !!errors.firstName}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.firstName}
                </Form.Control.Feedback>
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name='lastName'  
                  value={values.lastName}
                  onChange={e => {handleChange(e)
                  setLastName(e.target.value)
                  }}
                  isInvalid={!!touched && !!errors.lastName}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.lastName}
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between mb-3 gap-2 mobile-class" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Email</Form.Label>
                {currentEmail &&
                  <Form.Control 
                    type="email" 
                    name='email' 
                    value={currentEmail}
                    disabled
                    onBlur={handleBlur}
                  />
                }
                {!currentEmail && 
                <Fragment>
                  <Form.Control 
                      type="email" 
                      name='email' 
                      value={email}
                      onChange={
                        e => {handleChange(e)
                        setEmail(e.target.value)
                      }}
                      isInvalid={!!touched && !!errors.email}
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Fragment>
                }
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Phone Number</Form.Label>
                { currentPhone &&
                <PhoneInput
                  type='tel'
                  placeholder="Enter phone number"
                  international
                  defaultCountry="US"
                  value={currentPhone}
                  disabled
                />
                }
                { !currentPhone &&
                  <PhoneInput
                    type='tel'
                    placeholder="Enter phone number"
                    international
                    name='tel'
                    defaultCountry="US"
                    value={tel}
                    onChange={setTel}
                    isInvalid={!!touched && !!errors.tel}
                  />
                }
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between mb-3 gap-2 mobile-class" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Date of birth</Form.Label>
                <DatePicker 
                  selected={birthDate} 
                  onChange={(date) => setBirthDate(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Nationality</Form.Label>
                  <CountrySelect
                    name='country'
                    value={country}
                    onChange={setCountry}
                    flags='flase'
                    throwInvalidValueError={true}
                  />
                <Form.Control.Feedback type='invalid'>
                  {errors.country}
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between mb-3 gap-2 mobile-class" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Residency status</Form.Label>
                <Form.Select 
                  value={residency} 
                  onChange={e => {setResidency(e.target.value)}} 
                  aria-label="Default select example" 
                  placeholder='Select an option'
                >
                  <option residency='UAE Resident'>UAE Resident</option>
                  <option residency='Non-Resident'>Non-Resident</option>
                </Form.Select>
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Martial status</Form.Label>
                <Form.Select 
                  aria-label="Default select example" 
                  placeholder='Select an opton'
                  value={martial}
                  onChange={e => {setMartial(e.target.value)}}
                >
                  <option martial='Single'>Single</option>
                  <option martial='Married'>Married</option>
                  <option martial='Divorced'>Divorced</option>
                  <option martial='Widowed'>Widowed</option>
                </Form.Select>
              </div>
            </Form.Group>
          </div>
       
        <div className='d-flex justify-content-end mt-4'>
            <Link to={(firstName !== '' && lastName !== '' && (email !== '' || currentEmail !== '') && (currentPhone !== '' || tel !== '')) ? '/income' : '/profile'}
              style={{
                textDecoration: 'none'
              }}
            >
              <Button
                className="d-flex justify-content-center align-items-center rounded-4"
                style={{minWidth:'150px'}}
                variant="outline-dark"
                type="submit"
                onClick={() => {
                  dispatch(sidebar_check('profile'));
                  dispatch(progress_value(18));
                  addDataToDynamoDB()
                }}
              >
                Next step
              </Button>
            </Link>
        </div>
        </Form>
         )}
         </Formik>
      </Card>
      </div>
    </Container>
  )
}

export default Profile
