import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import card1 from '../assets/img/web/ac-1.webp'
import card2 from '../assets/img/web/ac-2.webp'
import card3 from '../assets/img/web/ac-3.webp'
import card4 from '../assets/img/web/ac-4.webp'
const HowStarted = () => {
    const [image, setImage] = useState(1);
    
    return (
        <section className='bg_darkblue m-3 py-5 rounded-4'>
            <Container className='custom_container'>
                <h4 className='text-white text-center fs_3xl fw-semibold'>How to get started?</h4>
                <Row className='py-5 justify-content-between'>
                    <Col sm={6}>
                        <Accordion>
                            <Accordion.Item className='rounded-2' eventKey="0">
                                <Accordion.Header onClick={() => setImage(1)}>
                                    <p className='fs_sm fw-semibold text-white'>01</p>
                                    <p className='ps-3 fs_md fw-semibold text-white'>Provide your information</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='ps-4 ms-2'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='rounded-2' eventKey="1">
                                <Accordion.Header onClick={() => setImage(2)}>
                                    <p className='fs_sm fw-semibold text-white'>02</p>
                                    <p className='ps-3 fs_md fw-semibold text-white'>Select your location</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='ps-4 ms-2'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='rounded-2' eventKey="3">
                                <Accordion.Header onClick={() => setImage(3)}>
                                    <p className='fs_sm fw-semibold text-white'>03</p>
                                    <p className='ps-3 fs_md fw-semibold text-white'>Purchase your subscription</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='ps-4 ms-2'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='rounded-2' eventKey="4">
                                <Accordion.Header onClick={() => setImage(4)}>
                                    <p className='fs_sm fw-semibold text-white'>04</p>
                                    <p className='ps-3 fs_md fw-semibold text-white'>Access your dashboard</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='ps-4 ms-2'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm={5} className=''>
                        <img className={image == 1 ? "d-block w-100" : "d-none w-100"} src={card1} alt="cards" />
                        <img className={image == 2 ? "d-block w-100" : "d-none w-100"} src={card2} alt="cards" />
                        <img className={image == 3 ? "d-block w-100" : "d-none w-100"} src={card3} alt="cards" />
                        <img className={image == 4 ? "d-block w-100" : "d-none w-100"} src={card4} alt="cards" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowStarted