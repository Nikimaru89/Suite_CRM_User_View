import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'
import './style/profile.css';

import { sidebar_check } from '../actions/sidebar'
import { progress_value } from '../actions/progress'

const Property = () => {
  const [propertyRadio, setPropertyRadio] = useState(null);
  const [mortgageRadio, setMortgageRadio] = useState(null);
  const [property, setProperty] = useState(null);
  const [lending, setLending] = useState(null);

  const dispatch = useDispatch()
  console.log('radio', mortgageRadio)
  return (
    <Container fluid>
      <div className='pb-5'>
        <div style={{
            fontFamily: 'AGaramond-regular',
            fontSize: '64px',
            letterSpacing: '-5px',
          }}
        >
          Property & mortgage
        </div>
        <div style={{
          color: 'rgb(102, 102, 102)',
          fontSize: '14px',
          lineHeight: '15px',
          letterSpacing: '0.2px',
        }}
        >
          Provide us with information about the property you’re buying and the type of financing you need.
        </div>
        <Card
          className='striped-tabled-with-hover mt-5 py-5 px-3'
          style={{
            borderRadius:'20px',
            boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px',
            border: '0px',
          }}
        >
          <h1 style={{
              fontFamily: 'AGaramond-regular',
              letterSpacing: '-3px'
            }}
          >About the property</h1>
          <p>
            Do you already have a particular property in mind?
          </p>
          <div className='d-flex'>
            <Form.Check 
              inline
              type='radio'
              label='Yes'
              value='yes'
              name='propertyRadio'
              id='radio_1'
              onChange={(e) => setPropertyRadio(e.target.value)}
            />
            <Form.Check 
              inline
              type='radio'
              label='No'
              name='propertyRadio'
              value='no'
              id='radio_2'
              onChange={(e) => setPropertyRadio(e.target.value)}
            />
          </div>
          <Form>
            <div key='inline-radio' style={{width:'80%'}}>
              <Form.Group className="d-flex justify-content-between align-items-center mt-3 gap-2 mobile-class" controlId="formBasicEmail">
                <div style={{width:'100%'}}>
                  <Form.Label>Approxymate property price</Form.Label>
                  <Form.Control type="number" placeholder="E.g.100,000" required/>
                </div>
                <div style={{width:'100%'}}> 
                  <Form.Label>Property type</Form.Label>
                  <Form.Select onChange={e => setProperty(e.target.value)}>
                    <option vlaue='completed'>Completed</option>
                    <option value='off-plain'>Off-plain</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Card>
        <Card
          className='striped-tabled-with-hover mt-5 py-5 px-3'
          style={{
            borderRadius:'20px',
            boxShadow: 'rgb(127 133 148 / 12%) 0px -4px 16px',
            border: '0px',
            }}
          >
          <h1 style={{
              fontFamily: 'AGaramond-regular',
              letterSpacing: '-3px'
            }}
          >About the mortgage</h1>
          <Form>
            <div key='inline-radio' style={{width:'80%'}}>
              <Form.Group className="d-flex justify-content-between align-items-center mt-3 gap-2 property-mobile" controlId="formBasicEmail">
                <div style={{width:'100%'}}>
                  <Form.Label>What kind of mortgage do you need?</Form.Label>
                  <Form.Select>
                    <option>Buy a property</option>
                    <option>Final handover payment</option>
                    <option>Transfer existing mortgate</option>
                    <option>Cash out property</option>
                    <option>Under construction property</option>
                  </Form.Select>
                </div>
                <div style={{width:'100%'}}> 
                  <Form.Label>Lending type</Form.Label>
                  <Form.Select onChange={e => setLending(e.target.value)}>
                    <option vlaue='conventional'>Conventional</option>
                    <option value='islamic'>Islamic</option>
                    <option value='best possible rate'>Best possible rate</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <div className='mt-3'>
                <p>Do you want to add fee financing?</p>
                <div className='d-flex'>
                  <Form.Check 
                    inline
                    type='radio'
                    label='Yes'
                    value='yes'
                    name='mortgageRadio'
                    id='radio_1'
                    onChange={(e) => setMortgageRadio(e.target.value)}
                  />
                  <Form.Check 
                    inline
                    type='radio'
                    label='No'
                    name='mortgageRadio'
                    value='no'
                    id='radio_2'
                    onChange={(e) => setMortgageRadio(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </Form>
        </Card>
        <div className='d-flex justify-content-end mt-5'>
          <Link to='/payment' style={{
            textDecoration: 'none'
          }}>
            <Button
              className="d-flex justify-content-center align-items-center rounded-4"
              style={{minWidth:'150px'}}
              variant="outline-dark"
              type="submit"
              onClick={()=> {
                dispatch(sidebar_check('property'));
                dispatch(progress_value(45));
              }}
            >
              Next step
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Property