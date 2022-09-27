import {
  Container,
  Row,
  Col,
  Button,
  Card
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container fluid>
      <Row className='d-flex flex-column justify-content-center align-items-center' style={{marginTop:'150px'}}>
        <Row>
          <h2
            className='d-flex flex-column justify-content-center align-items-center'
            style={{
              fontFamily: 'AGaramond'
            }}
          >
            What are you looking for?
          </h2>
        </Row>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col lg={3}>
            <Link to='/login'
             style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
            }}
            >
              <Card
                className='card-hover d-flex justify-content-center align-items-center border-0'
                style={{
                  maxWidth: '150px',
                  width: '100%',
                  height: '150px',
                }}
              >
                <img style={{width: '35%', marginBottom: '5px'}} src='/assets/images/home.png'/>
                Mortgate
              </Card>
            </Link>
          </Col>
          <Col lg={3}>
            <Link to='/#' style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
            }}>
              <Card
                className='card-hover d-flex justify-content-center align-items-center border-0'
                style={{
                  maxWidth: '150px',
                  width: '100%',
                  height: '150px',
                }}
              >
                <img style={{width: '40%'}} src='/assets/images/property2.png'/>
                Property
              </Card>
            </Link>
          </Col>
          <Col lg={3}>
            <Link to='/#' style={{
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
            }}>
              <Card
                className='card-hover d-flex justify-content-center align-items-center border-0'
                style={{
                  maxWidth: '150px',
                  width: '100%',
                  height: '150px',
                }}
              >
                <img style={{width: '40%'}} src='/assets/images/finance.jpg'/>
                Trading Finance
              </Card>
            </Link>
          </Col>
        </Row>
      </Row>
    </Container>  
  )
}

export default Home