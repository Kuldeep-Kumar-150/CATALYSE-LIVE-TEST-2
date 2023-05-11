import React, { useState } from 'react'
import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap'
import bigData1 from '../assets/img/web/big_data_11.webp'
import bigData2 from '../assets/img/web/big_data_22.webp'
import bigData3 from '../assets/img/web/big_data_33.webp'
import bigData4 from '../assets/img/web/big_data_44.webp'
const DemoSlider = () => {
    const [first, setfirst] = useState(1)

    return (
        <section className='text-white mt-lg-5'>
            <div className="d-lg-flex m-md-1 m-lg-2 w-100">
                <div className='w_60_lg bg_darkblue rounded-3 p-2 pb-4 p-md-5 w-100' data-aos="zoom-out-right">
                    <div className="container_2_lg">
                        <Row className='pt-4'>
                            <Col xs={6} sm={3} className='pe-0'>
                                <div onClick={() => setfirst(1)} className={first === 1 ? "our_approach_slider mx-1 crusor_pointer rounded-3 p-3" : "p-3 rounded-3 mx-1 crusor_pointer bg-transparent"}>
                                    <p className={first == 1 ? "mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number_active d-inline-block rounded-2" : "rounded-2 mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number d-inline-block"}>1</p>
                                    <p className='fs_2xsm fw-semibold text-white p-0 mt-3 m-0'>Big <span className='d-block'>Data</span></p>
                                </div>
                            </Col>
                            <Col xs={6} sm={3} className='px-0'>
                                <div onClick={() => setfirst(2)} className={first === 2 ? "our_approach_slider mx-1 crusor_pointer rounded-3 p-3" : "p-3 rounded-3 mx-1 crusor_pointer bg-transparent"}>
                                    <p className={first == 2 ? "mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number_active d-inline-block rounded-2" : "rounded-2 mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number d-inline-block"}>2</p>
                                    <p className='fs_2xsm fw-semibold text-white p-0 mt-3 m-0'>Event- <span className='d-block'>Driven</span></p>
                                </div>
                            </Col>
                            <Col xs={6} sm={3} className='px-0'>
                                <div onClick={() => setfirst(3)} className={first === 3 ? "our_approach_slider mx-1 crusor_pointer rounded-3 p-3" : "p-3 rounded-3 mx-1 crusor_pointer bg-transparent"}>
                                    <p className={first == 3 ? "mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number_active d-inline-block rounded-2" : "rounded-2 mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number d-inline-block"}>3</p>
                                    <p className='fs_2xsm fw-semibold text-white p-0 mt-3 m-0'>Artificial <span className='d-block'>Intelligence</span></p>
                                </div>
                            </Col>
                            <Col xs={6} sm={3} className='ps-0'>
                                <div onClick={() => setfirst(4)} className={first === 4 ? "our_approach_slider mx-1 crusor_pointer rounded-3 p-3" : "p-3 rounded-3 mx-1 crusor_pointer bg-transparent"}>
                                    <p className={first == 4 ? "mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number_active d-inline-block rounded-2" : "rounded-2 mb-0 fs_sm fw-semibold text-white px-3 py-2 our_platform_number d-inline-block"}>4</p>
                                    <p className='fs_2xsm fw-semibold text-white p-0 mt-3 m-0'>Predictive <span className='d-block'>Analytics</span></p>
                                </div>
                            </Col>
                        </Row>
                        <div className='mt-lg-4 mt-xl-5 pt-xl-3'>
                            <Row className={first === 1 ? "bg_lightblue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ml_1" : "ml_1 w-100 mt-3 py-lg-3 bg_lightblue align-items-center rounded-3 d-none"}>
                                <Col sm={6}>
                                    <img className='w-100' src={bigData1} alt="bigData1" />
                                </Col>
                                <Col sm={6}>
                                    <p className='fs_md fw-semibold text-white'>Big Data</p>
                                    <p className='fs_xsm fw-semibold text-white opacity-75'>We gather hundreds of millions of data points in order to perform advanced analytics to identify the highest propensity prospects</p>
                                </Col>
                            </Row>
                            <Row className={first === 2 ? "bg_lightblue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ml_1" : "ml_1 w-100 mt-3 py-lg-3 bg_lightblue align-items-center rounded-3 d-none"}>
                                <Col sm={6}>
                                    <img className='w-100' src={bigData2} alt="bigData1" />
                                </Col>
                                <Col sm={6}>
                                    <p className='fs_md fw-semibold text-white'>Big Data</p>
                                    <p className='fs_xsm fw-semibold text-white opacity-75'>We gather hundreds of millions of data points in order to perform advanced analytics to identify the highest propensity prospects</p>
                                </Col>
                            </Row>
                            <Row className={first === 3 ? "bg_lightblue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ml_1" : "ml_1 w-100 mt-3 py-lg-3 bg_lightblue align-items-center rounded-3 d-none"}>
                                <Col sm={6}>
                                    <img className='w-100' src={bigData3} alt="bigData1" />
                                </Col>
                                <Col sm={6}>
                                    <p className='fs_md fw-semibold text-white'>Big Data</p>
                                    <p className='fs_xsm fw-semibold text-white opacity-75'>We gather hundreds of millions of data points in order to perform advanced analytics to identify the highest propensity prospects</p>
                                </Col>
                            </Row>
                            <Row className={first === 4 ? "bg_lightblue align-items-center rounded-3 d-flex py-lg-3 mt-3 w-100 ml_1" : "ml_1 w-100 mt-3 py-lg-3 bg_lightblue align-items-center rounded-3 d-none"}>
                                <Col sm={6}>
                                    <img className='w-100' src={bigData4} alt="bigData1" />
                                </Col>
                                <Col sm={6}>
                                    <p className='fs_md fw-semibold text-white'>Big Data</p>
                                    <p className='fs_xsm fw-semibold text-white opacity-75'>We gather hundreds of millions of data points in order to perform advanced analytics to identify the highest propensity prospects</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className='w_40_lg bg_darkblue rounded-3 ms-lg-2 me-lg-3 py-5 pt-5 ps-3 p-md-5 mt-4 mt-lg-0' data-aos="zoom-out-left">
                    <div className="d-flex flex-column justify-content-between h-100">
                        <p className='fs_2xl fw-semibold text-white'>Our <span className='d-block'>approach</span></p>
                        <div>
                            <p className='fs_2xl fw-normal text-white'>200k<span className='fs_lg'>Properties</span></p>
                            <p className='fs_sm fw-normal text-white opacity-75'>of wealth will be transitioned <span className='d-lg-block'>in the next 25 years.</span></p>
                            <button className='border-0 bg_green fs_sm fw-normal text-white approach_signup_btn'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default DemoSlider