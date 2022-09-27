import React, { Fragment, useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Header = ({ user, logout }) => {
  const location = useLocation()
  const [path, setPath] = useState('')

  useEffect(() => {
    if(location.pathname === '/signup' || location.pathname === '/login') {
      setPath(location.pathname)
    } else {
      setPath('')
    }
  }, [location.pathname]);
  return (
    <Fragment>
      {path === '/login' || path === '/signup' ? <Navbar
        style={{
          position: 'absolute',
          width: '100%',
          height: '88px',
          top: '0px',
          padding: '16px 24px',
          background: '#F7F2E9',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div></div>
        {path === '/login' ?
          <Link to='/signup'>
            <Button
              className='border-0'
              style={{
                background: 'rgba(32, 94, 255, 0.08)',
                height: '47px',
                padding: '0 2rem',
                userSelect: 'none',
                cursor: 'pointer',
                color: 'black',
                borderRadius: '25px'
              }}
            >
              Create a new account
            </Button>
          </Link> : <></>
        }
        {path === '/signup' ?
          <Link to='/login'>
            <Button
              className='border-0'
              style={{
                background: 'rgba(32, 94, 255, 0.08)',
                height: '47px',
                padding: '0 2rem',
                userSelect: 'none',
                cursor: 'pointer',
                color: 'black',
                borderRadius: '25px'
              }}
            >
              Login
            </Button>
          </Link> : <></>
        }
        {/* <Container>
          <Navbar.Brand href="/">
            <h3 style={{ color: "#fff" }}>CRM</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-center" >
              <Nav.Link href="#home" style={{ margin: "0 20px ", color: "#fff" }}>Protocols</Nav.Link>
              <Nav.Link href="#link" style={{ margin: "0 20px ", color: "#fff" }}>Faucet</Nav.Link>
              <Nav.Link href="#home" style={{ margin: "0 20px ", color: "#fff" }}>Pricing</Nav.Link>
              <Nav.Link href="#link" style={{ margin: "0 20px ", color: "#fff" }}>Docs</Nav.Link>
              <Nav.Link href="/dashboard" style={{ margin: "0 20px ", color: "#fff" }}>Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end gap-2">
              { path === '/' &&
                <Nav className='justify-cotent-center'>
                  <Link to='/login'>
                    <Button variant="primary">Login</Button>
                  </Link>
                </Nav>
              }
              <Nav className='justify-cotent-center'>
                <Button variant="primary" onClick={logout}>Log Out</Button>
              </Nav>
            <Nav className="justify-content-center" >
                <Link to="/dashboard">
                  <Button variant="primary">Get Started</Button>{' '}
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container> */}
      </Navbar> : <></>}
    </Fragment>
  )
}

export default Header