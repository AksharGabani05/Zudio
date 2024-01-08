import React from 'react'
import { Col, Container } from 'react-bootstrap'

const Zwork = () => {
    return (
        <>
            <Container className='py-5'>
                <Col sm={12} md={8} className='mx-auto'>
                    <p className='fs-large text-center fw-semibold m-0'>WHO WE ARE</p>
                    <p className='fs-2 text-center fw-semibold text-muted mb-4'>A FASHION BRAND FROM - THE HOUSE OF TATA TRENT LTD</p>

                    <p className='fs-large text-center fw-semibold m-0'>WHAT WE DO?</p>
                    <p className='fs-2 text-center fw-semibold text-muted mb-4'>OFFER IRRESISTIBLE FASHION AT IRRESISTIBLE PRICES CONSTANT NEWNESS IN STORE</p>
                    
                    <p className='fs-large text-center fw-semibold m-0'>WHERE WE ARE?</p>
                    <p className='fs-2 text-center fw-semibold text-muted mb-4'>CURRENTLY IN 42 CITIES IN INDIA, COMING TO YOUR CITY VERY SOON</p>
                </Col>
            </Container>
        </>
    )
}

export default Zwork