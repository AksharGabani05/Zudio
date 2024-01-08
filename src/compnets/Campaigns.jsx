import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Campaigns = () => {
  return (
    <>
    <Container className='py-5'>
        <h1 className='text-center text-uppercase fw-light font-monospace'>Campaigns</h1>
        <Row>
            <Col xs={12} md={4} className='p-0 py-2'>
                <img src="https://www.zudio.com/cdn/shop/files/Zudio-love-denim_1024x1024.jpg?v=1613523931" alt="" />
            </Col>
            
            <Col xs={12} md={4} className='p-0 py-2'>
                <img src="https://www.zudio.com/cdn/shop/files/AROUND-KIDDING-ZUDIO-01_1024x1024.jpg?v=1613537634" alt="" />
            </Col>
            
            <Col xs={12} md={4} className='p-0 py-2'>
                <img src="https://www.zudio.com/cdn/shop/files/AROUND-KIDDING-ZUDIO_1024x1024.jpg?v=1613537634" alt="" />
            </Col>
            
            <Col xs={12} md={4} className='p-0 py-2'>
                <img src="https://www.zudio.com/cdn/shop/files/Z-Story-Denim_1024x1024.jpg?v=1664349186" alt="" />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Campaigns