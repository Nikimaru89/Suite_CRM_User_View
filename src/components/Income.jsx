import React, {useState}  from 'react'
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
import DatePicker from "react-datepicker"
import { Formik } from 'formik'
import * as yup from 'yup'
import 'react-phone-number-input/style.css'
import "react-datepicker/dist/react-datepicker.css"
import './style/profile.css';

import { sidebar_check } from '../actions/sidebar'
import { progress_value } from '../actions/progress'

const schema = yup.object().shape({
  job: yup.string().required('Please input your job title'),
  companyName: yup.string().required('Please input your company name'),
  share: yup.string().required('Please your share of company'),
  salary: yup.string().required('Please input your salary'),
  addIncomeMonthly: yup.string().required('Please input your monthly additional income amount'),
  monthlyAmount: yup.string().required('Please input your monthly amount'),
  outstandingAmount: yup.string().required('Please input your outstanding amount'),
  notification: yup.string().required('Please input your notification'),
  cardLimit: yup.string().required('Please input your card limit')
});

const Profile = ({
  job,
  setJob,
  joinDate,
  setJoinDate,
  companyName,
  setCompanyName,
  industry,
  setIndustry,
  employmentStatus,
  setEmploymentStatus,
  duration,
  setDuration,
  share,
  setShare,
  salary,
  setSalary,
  addIncomeType,
  setAddIncomeType,
  addIncomeMonthly,
  setAddIncomeMonthly,
  bank,
  setBank,
  monthlyAmount,
  setMonthlyAmount,
  outstandingAmount,
  setOutstandingAmount,
  notification,
  setNotification,
  cardLimit,
  setCardLimit
}) => {

  const dispatch = useDispatch()

  return (
    <Container fluid>
      <div className='pb-5'>
        <h1 style={{
          fontFamily: 'AGaramond-regular',
          fontSize: '64px',
          letterSpacing: '-5px',
        }}
        >Income</h1>
        <p>
        Share details about your financial situation to help the bank 
        calculate the best suited loan amount for you.
        </p>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            job: '',
            companyName:''
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
          <Card className='striped-tabled-with-hover mt-5 py-5 px-3 ' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px'}}>
            <h4 style={{
              fontFamily: 'AGaramond-regular',
              fontSize: '32px',
              letterSpacing: '-2px',
            }}
            >Employment status</h4>
            <div key='inline-radio' style={{width:'100%'}}>
            <Form.Check 
              inline
              type='radio'
              label='Employee at a company'
              value='Employee at a company'
              name='group'
              id='radio_1'
              onChange={(e) => setEmploymentStatus(e.target.value)}
            />
            <Form.Check 
              inline
              type='radio'
              label='Self-employed'
              name='group'
              value='Self-employed'
              id='radio_2'
              onChange={(e) => setEmploymentStatus(e.target.value)}
            />
           
            <Form.Group className="d-flex justify-content-between align-items-center mt-3 gap-2 income-mobile" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Job title</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="E.g.Lawyer, Teacher, Engineer" 
                  name='job'
                  value={job}
                  onChange={e => {
                    handleChange(e)
                    setJob(e.target.value)
                  }}
                  isInvalid={!!touched && !!errors.job}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.job}
                </Form.Control.Feedback>
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>{employmentStatus == 'Self-employed' ? 'Date of establishing the company' : 'Date of joining'}</Form.Label>
                <DatePicker 
                  selected={joinDate} 
                  onChange={(date) => setJoinDate(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between align-items-center mt-3 gap-2" controlId="formBasicEmail">
              <div style={{width:'100%'}}>
                <Form.Label>Company name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="IT Web Service" 
                  name='companyName'
                  value={companyName}
                  onChange={e => {
                    handleChange(e)
                    setCompanyName(e.target.value)
                  }}
                isInvalid={!!touched && !!errors.companyName}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.companyName}
                </Form.Control.Feedback>
              </div>
              <div style={{width:'100%'}}> 
                <Form.Label>Industry</Form.Label>
                <Form.Select 
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}  
                >
                  <option industry='Finance'>Finance</option>
                  <option industry='Healthcare'>Healthcare</option>
                  <option industry='Technology'>Technology</option>
                  <option industry='FinReal Estateance'>Real Estate</option>
                  <option industry='Food Industry'>Food Industry</option>
                  <option industry='FiTransportnance'>Transport</option>
                  <option industry='Other'>Other</option>
                </Form.Select>
              </div>
            </Form.Group>

          { employmentStatus === 'Self-employed' && 
            <Form.Group className="d-flex justify-content-between align-items-center mt-3 gap-2" controlId="formBasicEmail">
             <div style={{width:'100%'}}> 
              <Form.Label>How long have you been working there?</Form.Label>
              <Form.Select
                value={duration}
                onChange={e => setDuration(e.target.value)}
              >
                <option duration='0 to 5 years'>0 to 5 years</option>
                <option duration='5 to 10 years'>5 to 10 years</option>
                <option duration='10 to 20 years'>10 to 20 years</option>
                <option duration='+20 years'>+20 years</option>
              </Form.Select>
            </div>
            <div style={{width:'100%'}}>
              <Form.Label>You share of the company</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Your shares percentage" 
                value={share}
                onChange={e => {
                  handleChange(e)
                  setShare(e.target.value)
                }}
                isInvalid={!!touched && !!errors.job}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.share}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          }
            </div>
          </Card>
          <Card className='striped-tabled-with-hover mt-5 py-5 px-3' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px'}}>
            <h4 style={{
              fontFamily: 'AGaramond-regular',
              fontSize: '32px',
              letterSpacing: '-2px',
            }}
            >Income</h4>
            <p>Share all earnings that are currently coming into your bank account.</p>
              <Form.Group>
                <Form.Label>Fixed monthly salary</Form.Label>
                <InputGroup>
                  <Form.Control 
                    type='number' 
                    placeholder='E.g 25,000' 
                    value={salary} 
                    style={{width:'30%'}} 
                    onChange={e => {
                      handleChange(e)
                      setSalary(e.target.value)
                    }} 
                    isInvalid={!!touched && !!errors.salary}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.salary}
                    </Form.Control.Feedback>
                  <InputGroup.Text>AED</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className='mt-3'>
                <div className='d-flex justify-content-between'>
                  <h5 style={{
                    fontFamily: 'AGaramond-regular',
                    fontSize: '24px',
                    letterSpacing: '-2px',
                  }}
                  >Additional Income</h5>
                  <Form.Check
                    type='checkbox'
                    name='income'
                    id='income'
                    label='No additional income to declare'
                  />
                </div>
                <Row>
                  <Col>
                    <Form.Label>Type</Form.Label>
                    <Form.Select 
                      value={addIncomeType}
                      onChange={e => setAddIncomeType(e.target.value)}
                    >
                      <option addIncomeType='Other'>Other</option>
                      <option addIncomeType='Rental'>Rental</option>
                      <option addIncomeType='Bonus'>Bonus</option>
                      <option addIncomeType='Commission'>Commission</option>
                      <option addIncomeType='Allowance'>Allowance</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Monthly amount</Form.Label>
                    <InputGroup>
                      <Form.Control 
                        type='number' 
                        placeholder='E.g.5000'
                        value={addIncomeMonthly}
                        onChange={e => {
                          handleChange(e)
                          setAddIncomeMonthly(e.target.value)
                        }}
                        isInvalid={!!touched && !!errors.addIncomeMonthly}
                      />
                      <InputGroup.Text>AED</InputGroup.Text>
                    </InputGroup>
                    
                  </Col>
                </Row>
              </Form.Group>
          </Card>
          <Card className='striped-tabled-with-hover mt-5 py-5 px-3' style={{borderRadius:'20px',boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px'}}>
            <h4 style={{
              fontFamily: 'AGaramond-regular',
              fontSize: '32px',
              letterSpacing: '-2px',
            }}
            >Liabilities</h4>
            <p>Declare any outgoing payments or debts that are currently being deducted from your bank account.</p>
              <div className='d-flex justify-content-between mt-3'>
                <h5 style={{
                  fontFamily: 'AGaramond-regular',
                  fontSize: '24px',
                  letterSpacing: '-2px',
                }}
                >Credit Cards</h5>
                <Form.Check
                  type='checkbox'
                  name='income'
                  id='income'
                  label='No credit cards to declare'
                />
              </div>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Bank</Form.Label>
                    <Form.Select
                      value={bank}
                      onChange={e => setBank(e.target.value)}
                    >
                      <option bank='Abu Dhabi Commercial Bank'>Abu Dhabi Commercial Bank</option>
                      <option bank='Abu Dhabi Islamic Bank'>Abu Dhabi Islamic Bank</option>
                      <option bank='ADF'>ADF</option>
                      <option bank='Ajman Bank'>Ajman Bank</option>
                      <option bank='AI Masraf Bank'>AI Masraf Bank</option>
                      <option bank='ARAB Bank'>ARAB Bank</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Card limit</Form.Label>
                    <InputGroup inline>
                      <Form.Control 
                        type='number'
                        value={cardLimit}
                        onChange={e => {
                          handleChange(e)
                          setCardLimit(e.target.value)
                        }}
                        isInvalid={!!touched && !!errors.cardLimit}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.cardLimit}
                      </Form.Control.Feedback>
                      <InputGroup.Text>AED</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <hr></hr>
            <h5 className='mt-3' style={{
              fontFamily: 'AGaramond-regular',
              fontSize: '24px',
              letterSpacing: '-2px',
            }}
            >Current loans and mortgages</h5>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                    >
                      <option>Personal loan</option>
                      <option>Mortgate loan</option>
                      <option>Auto loan</option>
                      <option>Other</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Monthly amount</Form.Label>
                    <InputGroup inline>
                      <Form.Control 
                        type='number'
                        value={monthlyAmount}
                        onChange={e => {
                          handleChange(e)
                          setMonthlyAmount(e.target.value)
                        }}
                        isInvalid={!!touched && !!errors.monthlyAmount}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.monthlyAmount}
                        </Form.Control.Feedback>
                      <InputGroup.Text>AED</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col>
                  <Form.Label>Bank</Form.Label>
                    <Form.Select>
                      <option>Abu Dhabi Commercial Bank</option>
                      <option>Abu Dhabi Islamic Bank</option>
                      <option>ADF</option>
                      <option>Ajman Bank</option>
                      <option>AI Masraf Bank</option>
                      <option>ARAB Bank</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Outstanding amount</Form.Label>
                    <InputGroup inline>
                      <Form.Control 
                        type='number'
                        value={outstandingAmount}
                        onChange={e => {
                          handleChange(e)
                          setOutstandingAmount(e.target.value)
                        }}
                        isInvalid={!!touched && !!errors.outstandingAmount}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.outstandingAmount}
                      </Form.Control.Feedback>
                      <InputGroup.Text>AED</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>
              <hr></hr>
              <h5 className='mt-3' style={{
                fontFamily: 'AGaramond-regular',
                fontSize: '24px',
                letterSpacing: '-2px',
              }}
              >Anything else we should know?</h5>
              <p>
                Please share any additional info or plans regarding your financial situation. 
                The more details we have upfront, the faster we can get your application processed successfully.
              </p>
              <Form.Control
                type='text'
                placeholder='Tell us here anything that can affect your case'
                value={notification}
                onChange={e => {
                  handleChange(e)
                  setNotification(e.target.value)
                }}
                isInvalid={!!touched && !!errors.notification}
              />
               <Form.Control.Feedback type='invalid'>
                {errors.notification}
              </Form.Control.Feedback>
          </Card>
          <div className='w-100 d-flex justify-content-end mt-5'>
            <Link to={(job !== '' && companyName !== '' && salary !== '' && addIncomeMonthly !== '' && cardLimit !== '' && monthlyAmount) ? '/property' : '/income'}
              style={{
                textDecoration: 'none',
              }}
            >
              <Button
                className="w-100 d-flex justify-content-center align-items-center rounded-4"
                variant="outline-dark"
                type="submit"
                style={{minWidth:'150px', whiteSpace: 'nowrap',}}
                onClick={()=>{
                  dispatch(sidebar_check('income'));
                  dispatch(progress_value(35));
                }}
              >
                Next step
              </Button>
            </Link>
          </div>
        </Form>
      )}
      </Formik>
      </div>
    </Container>
  )
}

export default Profile
