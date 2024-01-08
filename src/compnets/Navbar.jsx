import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,Container,NavDropdown, Col} from 'react-bootstrap';
import logo from '../assets/zudio.png'
const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-black py-3 ">
      {/* <Container> */}
        <Navbar.Brand><Link to='/'><img src={logo} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ms-5" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/Zstories' className='text-white text-end'>Zstories</Link></Nav.Link>
            <Nav.Link><Link to='/Zudio' className='text-white text-end'>#Zudio</Link></Nav.Link>
            <Nav.Link><Link to='/zudio_near_you' className='text-white text-end'>Zudio_Near_Your</Link></Nav.Link>
            <Nav.Link><Link to='/Zworld' className='text-white text-end'>Zworld</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Col sm={1}>
          <Link to='/login' className='text-white text'>login</Link>
        </Col>
      {/* </Container> */}
    </Navbar>
    </>
  )
}

export default Header