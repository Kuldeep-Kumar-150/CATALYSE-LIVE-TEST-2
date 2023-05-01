import React from 'react'
import { useState } from 'react';
import footer_logo from "../assets/img/svg/footer_logo.svg";
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    const initialvalue = {
        name: "",
        email: "",
        message: "",
        radiobtn: "",
    }
    const [formValue, setformValue] = useState(initialvalue);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setformValue({ ...formValue, [name]: value });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
        setformValue(initialvalue)
    }

    return (
        <>
            <footer className='py-5 bg_darkblue m-1 m-md-3 rounded-3 position-relative'>
                <Container className=' custom_container mt-lg-4'>
                    <div className="footer_position_img position-absolute"></div>
                    <Row className='pb-2 pb-md-5 align-items-center align-items-lg-start'>
                        <Col md={7}>
                            <form onSubmit={formSubmit}>
                                <Row data-aos="zoom-in">
                                    <Col md={7} className='pe-2'>

                                        <input required name='name' value={formValue.name} onChange={handleInputChange} className='w-100 footer_input' type="text" placeholder='Name' />
                                        <input required name='email' value={formValue.email} onChange={handleInputChange} className='w-100 footer_input mt-2' type="email" placeholder='Email' />

                                        <div className="d-lg-flex mt-2">
                                            <div className='text-center financial_service_radio_btn text-nowrap'>
                                                <input name="form" type="radio" id='srvices' />
                                                <label htmlFor="srvices" className='text_green fs_sm fw-semibold ps-3'>Financial Services</label>
                                            </div>
                                            <div className='text-center ral_estate_radio_btn ms-lg-2 mt-2 text-nowrap mt-lg-0'>
                                                <input name="form" type="radio" id='srvicess' />
                                                <label htmlFor="srvicess" className='text-white opacity-75 fs_sm fw-semibold ps-3 ps-md-1'>Real Estate</label>
                                            </div>
                                        </div>


                                    </Col>
                                    <Col md={5} className='ps-2 mt-2 mt-md-0'>
                                        <textarea required name='message' value={formValue.message} onChange={handleInputChange} className='footer_input w-100' cols="35" rows="3" placeholder='Message..'></textarea>
                                        <button className='w-100 submit_btn_footer fs_sm fw-semibold text-white'>Submit</button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col md={5} className='ps-md-5 mt-3 mt-md-0' data-aos="zoom-in-up">
                            <h6 className='ps-md-5 fs_xl fw-semibold text-white'>Contact us</h6>
                            <p className='ps-md-5 fs_sm fw-normal opacity-75 text-white'>Our Predictive Analytics utilize a combination of event-driven data, historical data.</p>
                        </Col>
                    </Row>
                    <div className="hr_footer my-2 my-xl-5"></div>
                    <Row className='py-5'>
                        <Col md={4}>
                            <a href="#">
                                <img src={footer_logo} alt="footer_logo" />
                            </a>
                            <a className=" fs_sm fw-semibold text-white d-block mt-3" href="mailto:info@catalyzeai.com">info@catalyzeai.com</a>
                            <a className=" fs_sm fw-semibold text-white" href="tel:+(941) 867-1761">(941) 867-1761</a>
                        </Col>
                        <Col md={8} className='mt-sm-4 mt-md-0'>
                            <Row>
                                <Col sm={4}>
                                    <ul className='p-0 m-0'>
                                        <li className='fs_sm fw-semibold text-white'>Financial Services</li>
                                        <li className='mt-3'><a className='fs_sm fw-semibold text-white' href="/">Pricing</a></li>
                                        <li className='mt-2 pt-1'><a className='position-relative fs_sm fw-semibold text-white' href="/">Blog</a></li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <ul className='p-0 m-0'>
                                        <li className='fs_sm fw-semibold text-white'>Real Estate</li>
                                        <li className='mt-3'><a className='position-relative fs_sm fw-semibold text-white' href="/">Pricing</a></li>
                                        <li className='mt-2 pt-1'><a className='fs_sm fw-semibold text-white' href="/">Blog</a></li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <ul className='p-0 m-0'>
                                        <li className='position-relative fs_sm fw-semibold text-white'>LinkedIn</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='mt-sm-4'>
                        <Col md={6} className='d-flex flex-column flex-lg-row align-items-start justify-content-between'>
                            <div>
                                <p className='fs_xsm fw-normal text-white opacity-75 footer_links position-relative crusor_pointer text-nowrap'>All rights reserved.©20022 Catalyze AI</p>
                            </div>
                            <div>
                                <p className='fs_xsm fw-normal text-white opacity-75 footer_links position-relative crusor_pointer text-nowrap'>Do not sell my data</p>
                            </div>
                        </Col>
                        <Col md={6} className='d-flex flex-column flex-lg-row align-items-start justify-content-between justify-content-md-end'>
                            <div className='me-sm-5'>
                                <p className='fs_xsm fw-normal text-white opacity-75 footer_links position-relative crusor_pointer'>Terms & Conditions</p>
                            </div>
                            <div>
                                <p className='fs_xsm fw-normal text-white opacity-75 footer_links position-relative crusor_pointer'>Privacy Policy</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer >
        </>
    )
}

export default Footer