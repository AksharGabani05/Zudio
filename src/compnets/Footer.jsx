import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer className='bg-black py-3'>
        <Container>
            <Row className='justify-content-between'>
                <Col xs={12} md={8} className='text-md-start text-center'>
                    <p className='text-white m-0'>COPYRIGHT © 2023 ZUDIO</p>
                    <p className='text-white m-0'>DON’T MISS OUT ON THE LATEST IN FASHION. <i class="bi bi-instagram"></i> FOLLOW US @MYZUDIO</p>
                </Col>
                
                <Col xs={12} md={4} className='text-md-start text-center'>
                    <a href='mailto: Zudiohelp@trent-tata.com' className='text-white m-0'>Contact us- Zudiohelp@trent-tata.com</a>
                </Col>
            </Row>
        </Container>
    </footer>
    </>
  )
}

export default Footer