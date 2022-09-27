import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Row,
  Modal,
  Col,
  Form,
  InputGroup,
  Button,
  Card, 
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style/profile.css'

import { sidebar_check } from '../actions/sidebar'
import { progress_value } from '../actions/progress'

const Payment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  return (
    <Container fluid>
      <div className=' payment-container'>
        <h1 style={{
            fontFamily: 'AGaramond-regular',
            fontSize: '64px',
            letterSpacing: '-5px',
            lineHeight: '50px',
            textTransform: 'inherit',
            color: 'black'
          }}
        >Payments calculator</h1>
        <p style={{
          fontSize: '14px',
          color: 'rgb(102, 102, 102)',
        }}
        >Calculate your estimated monthly payments based on the loan amount.</p>
        <div className='sub-text-wrapper d-flex'>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: '11px'
          }}
          >
            Based on your profile, the maximum amount you could borrow is 
            <span style={{fontSize: '14px', fontWeight: '700'}}>&nbsp;1,152,000 AED</span>
          </div>
          <img style={{width: '15px'}} src='/assets/images/information-circle.72ccce5b.svg'/>
        </div>
        <Row className='d-flex'>
          <Col className='left-block'>
            <div className='calculate-title'
            >
              Calculate your estimated monthly payment
            </div>
            <div style={{
                maxWidth: '400px',
                fontSize: '12px',
              }}
            >
              <div style={{
                  margin: '1.4rem 0px 5px',
                  fontSize: '12px',
                }}
              >
                Property Price
                <img
                  style={{width: '15px', marginLeft: '5px'}}
                  src='/assets/images/information-circle.72ccce5b.svg'
                />
              </div>
              <InputGroup inline>
                <Form.Control
                  type='text'
                  className='input-box borderR-0'
                  value='200,000'
                  disabled
                />
                <InputGroup.Text
                  className='input-box borderL-0'
                  style={{background: 'white', color: 'rgb(102, 102, 102)'}}
                >AED</InputGroup.Text>
              </InputGroup>
              <div style={{
                  margin: '1.4rem 0px 5px',
                  fontSize: '12px',
                }}
              >
                Down Payment
                <img
                  style={{width: '15px', marginLeft: '5px'}}
                  src='/assets/images/information-circle.72ccce5b.svg'
                />
              </div>
              <div className='d-flex'>
                <InputGroup inline style={{
                    maxWidth: '300px',
                  }}
                >
                  <Form.Control
                    type='text'
                    className='input-box borderR-0'
                    value='120,000'
                    disabled
                  />
                  <InputGroup.Text
                    className='input-box borderL-0'
                    style={{background: 'white', color: 'rgb(102, 102, 102)'}}
                  >AED</InputGroup.Text>
                </InputGroup>
                <InputGroup inline style={{
                    maxWidth: '90px',
                    marginLeft: '13px'
                  }}
                >
                  <Form.Control
                    type='number'
                    className='input-box borderR-0'
                  />
                  <InputGroup.Text
                    className='input-box borderL-0'
                    style={{background: 'white', color: 'rgb(102, 102, 102)'}}
                    disbaled
                  >60%</InputGroup.Text>
                </InputGroup>
              </div>
              <div style={{
                  margin: '1.4rem 0px 5px',
                  fontSize: '12px',
                }}
              >
                Average interest rate
                <img
                  style={{width: '15px', marginLeft: '5px'}}
                  src='/assets/images/information-circle.72ccce5b.svg'
                />
              </div>
              <InputGroup inline>
                <Form.Control
                  type='number'
                  className='input-box borderR-0'
                />
                <InputGroup.Text
                  className='input-box borderL-0'
                  style={{
                    background: 'white',
                    maxWidth: '90px',
                  }}
                  disabled
                >3.25%</InputGroup.Text>
              </InputGroup>
              <Form.Label style={{
                  marginTop: '20px',
                  fontSize: '11px',
                  color: 'rgb(102, 102, 102)',
                }}
              >This is just an estimated value based on the average of the market, your final interest rate depends on what you choose in “Your offers” page</Form.Label>
              <div>
                Length of loan
                <img
                  style={{width: '15px', marginLeft: '5px'}}
                  src='/assets/images/information-circle.72ccce5b.svg'
                />
              </div>
            </div>
          </Col>
          <Col className='right-block'>
            <div className='card-wrapper' style={{flexWrap:'wrap'}}>
              <div className='block-img1'>
                <img src='/assets/images/cash-payment-bills-1.467f6a91.svg'/>
              </div>
              <Form.Label style={{
                margin: '2.4rem 0px 0.4rem',
                display: 'block',
                fontSize: '14px',
                color: 'rgb(102, 102, 102)',
                }}
              >
                Estimated monthly payment
              </Form.Label>
              <Form.Label style={{
                  fontSize: '48px',
                  lineHeight: '45px',
                  fontFamily: 'AGaramond',
                  letterSpacing: '-4px',
                  color: 'black',
                }}
              >
                AED 529</Form.Label>
              <Form.Label style={{
                  margin: '1rem 0px 0px',
                  fontSize: '14px',
                  color: 'rgb(102, 102, 102)',
                }}
              >This amount is based on a total
                <span style={{ color: 'black'}}>&nbsp;loan of AED</span>
              </Form.Label>
              <Form.Label style={{
                  fontSize: '14px',
                  lineHeight: '15px'
                }}
              > 80,000</Form.Label>
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-end mt-5'>
          <Button
            className="d-flex justify-content-center align-items-center rounded-4"
            variant="outline-dark"
            type="submit"
            style={{whiteSpace: 'nowrap'}}
            
            onClick={()=>{
              handleShow();
              dispatch(sidebar_check('payment'));
              dispatch(progress_value(60));
            }}
          >
            Next step
          </Button>
        </div>
        <Modal show={show} onHide={handleClose} centered>
          <Container fluid>
            <Modal.Header >
              <Modal.Title className='d-flex flex-column justify-content-center text-center text-align-center mt-1'>
                <div>⨀</div>
                <h4>You've changed the property price</h4>
                <p style={{fontSize:'15px'}}>
                  While calculating your monthly payment, 
                  you changed the property price for the mortgage you want to get.
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='d-grid gap-2'>
                <Link to='/'>
                  <Button variant='primary' bg='grey' size='lg' style={{width:'100%'}}>Go with updated value</Button>
                </Link>
                <Button variant='primary' size='lg' >Get back to calculator</Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Container>
      </Modal>
      </div>
    </Container>
  )
}

export default Payment