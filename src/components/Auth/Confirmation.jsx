import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
  Spinner
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import * as yup from 'yup'
import { Formik } from 'formik'

const schema = yup.object().shape({
  code: yup.string().required('Please input verification code'),
});

const Confirmation = ({ 
  code, 
  setCode, 
  onConfirmation, 
  handleResend, 
  loading,
  load
}) => {
  const email = useSelector(state => state.auth.currentUser.email )
  const phone = useSelector(state => state.auth.currentUser.phone )
  return  (
  <Container fluid>
    <Row className='d-flex flex-column justify-content-between align-items-center' style={{paddingTop:'100px'}}>
      <Col xs={0} sm={2} md={3} lg={6} />
      <Col xs={12} sm={8} md={6} lg={6}>
        <Formik
          validationSchema={schema}
          onSubmit={e => 
            onConfirmation()
          }
          initialValues={{
            code: code
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
              <h1 className='text-center' style={{fontSize:'35px'}}>Verify to sign up</h1>
              <p className='my-4'>We have sent an verification code to {email ? email : phone}. Check your spam folder and the spelling of your email address.</p>
              <Form.Label htmlFor='basic-url'>Please Enter Verification Code</Form.Label>
              <InputGroup className='mb-5'>
                <FormControl type='text' name='code' value={code} onChange={e => {
                  handleChange(e)
                  setCode(e.target.value)
                }} isInvalid={!!touched && !!errors.code} onBlur={handleBlur} />
                <Button type='submit' variant='primary'>
                  {loading && <Spinner animation='border' />}
                    Verify
                </Button>
                <Form.Control.Feedback type='invalid'>
                  {errors.code}
                </Form.Control.Feedback>

              </InputGroup>
           
              <div className='d-flex justify-content-center align-items-center'>
                <Button variant='primary' onClick={handleResend}>
                  {load && <Spinner animation='border' />}
                    Resend code
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  </Container>
  )
}

export default Confirmation