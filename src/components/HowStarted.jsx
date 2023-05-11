import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import card1 from '../assets/img/web/ac-1.webp'
import card2 from '../assets/img/web/ac-2.webp'
import card3 from '../assets/img/web/ac-3.webp'
import card4 from '../assets/img/web/ac-44.svg'
import paymentAccepted from '../assets/img/svg/payment_accepted.svg'
import greenPlusImg from '../assets/img/svg/green_plus_img.svg'
const HowStarted = () => {
    const [image, setImage] = useState(1);
    const [activeNumber, setActiveNumber] = useState(2);

    return (
        <section className='bg_darkblue m-3 my-5 py-5 rounded-4'>
            <Container className='custom_container'>
                <h4 className='text-white text-center fs_3xl fw-semibold'>How to get started?</h4>
                <Row className='py-3 py-sm-5 justify-content-between align-items-center'>
                    <Col md={6} data-aos="fade-right">
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item className='rounded-3' eventKey="0" onClick={() => setActiveNumber(1)}>
                                <Accordion.Header onClick={() => setImage(1)}>
                                    <p className={activeNumber === 1 ? "accordion_numbers_active" : "accordion_numbers"}>1</p>
                                    <p className='ps-3 ps-lg-5 fs_md fw-semibold text-white'>Provide your information</p>
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <p className='ps-3 ps-lg-5 ms-4 mb-0'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='rounded-3' eventKey="1" onClick={() => setActiveNumber(2)}>
                                <Accordion.Header onClick={() => setImage(2)}>
                                    <p className={activeNumber === 2 ? "accordion_numbers_active" : "accordion_numbers"}>2</p>
                                    <p className='ps-3 ps-lg-5 fs_md fw-semibold text-white'>Select your location</p>
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <p className='ps-3 ps-lg-5 ms-4 mb-0'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='rounded-3' eventKey="3" onClick={() => setActiveNumber(3)}>
                                <Accordion.Header onClick={() => setImage(3)}>
                                    <p className={activeNumber === 3 ? "accordion_numbers_active" : "accordion_numbers"}>3</p>
                                    <p className='ps-3 ps-lg-5 fs_md fw-semibold text-white'>Purchase your subscription</p>
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <p className='ps-3 ps-lg-5 ms-4 mb-0'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='rounded-3' eventKey="4" onClick={() => setActiveNumber(4)}>
                                <Accordion.Header onClick={() => setImage(4)}>
                                    <p className={activeNumber === 4 ? "accordion_numbers_active" : "accordion_numbers"}>4</p>
                                    <p className='ps-3 ps-lg-5 fs_md fw-semibold text-white'>Access your dashboard</p>
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <p className='ps-3 ps-lg-5 ms-4 mb-0'>Provide a zip code and we will provide you with the highest propensity prospects in a 50 mile radius.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={5} className='ps-md-0 mt-4 mt-md-0' data-aos="fade-left">
                        <div className={image == 1 ? "position-relative d-block" : "d-none position-relative"}>
                            <img className="w-100" src={card1} alt="cards" />
                            <img className='green_plus_img position-absolute' src={greenPlusImg} alt="greenPlusImg" />
                        </div>
                        <img className={image == 2 ? "d-block w-100" : "d-none w-100"} src={card2} alt="cards" />
                        <img className={image == 3 ? "d-block w-100" : "d-none w-100"} src={card3} alt="cards" />
                        <div className={image == 4 ? "d-block position-relative" : "position-relative d-none"}>
                            <img className='w-100' src={card4} alt="card4" />
                            <img className='payment_accepted_card position-absolute' src={paymentAccepted} alt="paymentAccepted" />
                        </div>
                        <div className="d-flex flex-column-reverse flex-sm-row align-items-sm-center justify-content-between mt-4">
                            <span className='position-relative'>
                                <a href="/" className='mt-3 z_index_10 mt-sm-0 sign_up_btn bg_green fs_sm fw-semibold text-white d-inline-block text-nowrap'>Sign up</a>
                            </span>
                            <a href="/" className='fs_sm fw-normal clr_light_dark d-block ps-md-3'>Register in under 5 minutes.</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowStarted