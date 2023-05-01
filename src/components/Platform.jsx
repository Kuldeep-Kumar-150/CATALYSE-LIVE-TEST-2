import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import diamondImg from '../assets/img/svg/diamond_img.svg'
import trainLine from '../assets/img/svg/train_line.svg'
import percentageInCircle from '../assets/img/svg/percentage_in_corcle.svg'
import dollarImg from '../assets/img/svg/dollar_img.svg'
import greenCard from '../assets/img/web/view_pricing_cards.webp'
import imageIcon from '../assets/img/svg/eye_img.svg'
import circle from '../assets/img/svg/circle_black_green.svg'
import notesIcon from '../assets/img/svg/notes.svg'
const Platform = () => {
    return (
        <section className='py-5 mt-5 mt-sm-2'>
            <Container className='custom_container'>
                <Row>
                    <Col md={3}>
                        <h3 className='fs_3xl fw-semibold mb-4 mb-mb-0'>Our Platform</h3>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={6} className='px-md-1' data-aos="zoom-in-up">
                                <div className="our_platform_cards h-100 bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between rounded-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className='fs_md fw-semibold mb-0'>Exclusive</p>
                                        <img height={50} width={50} src={diamondImg} alt="diamondImg" />
                                    </div>
                                    <p className='fs_sm fw-normal text_grey mt-sm-5 pt-5'>200 exclusive prospects pushed to your platfrom monthly.</p>
                                </div>
                            </Col>
                            <Col md={6} className='px-md-1 mt-3 mt-md-0' data-aos="zoom-in-left">
                                <div className="our_platform_cards h-100 bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between rounded-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className='fs_md fw-semibold mb-0'>In your <span className='d-block'>backyard</span></p>
                                        <img height={50} width={50} src={trainLine} alt="trainLine" />
                                    </div>
                                    <p className='fs_sm fw-normal text_grey pt-5'>Radius based leads within 50-miles from you, prioritizing those closer to you.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={6} className='px-md-1 py-2 mt-2 mt-md-0' data-aos="zoom-in-down">
                                <div className="our_platform_cards bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between h-100 rounded-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className='fs_md fw-semibold'>High <span className='d-block'>net worth</span></p>
                                        <img width={75} height={61} src={dollarImg} alt="images" />
                                    </div>
                                    <p className='fs_sm fw-normal text_grey mt-md-5 pt-4 pt-md-5'>Average investable assets of $1.5 <span className='d-md-block'>million.</span></p>
                                </div>
                            </Col>
                            <Col md={6} className='px-md-1 py-2' data-aos="zoom-in-right">
                                <div className="our_platform_cards bg_grey p-4 p-lg-5 d-flex flex-column justify-content-between h-100 rounded-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className='fs_md fw-semibold'>High <span className='d-block'>propensity</span></p>
                                        <img width={56} height={56} src={percentageInCircle} alt="images" />
                                    </div>
                                    <p className='fs_sm fw-normal text_grey mt-5 mt-sm-4'>Our combination of event-driven data, historical data, behavioral analytics, and real-time data results in the highest propensity <span className='d-md-block'>prospects.</span></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className='px-md-1' data-aos="zoom-out">
                        <img className='greencard pt-2' height={364} src={greenCard} alt="greenCard" />
                    </Col>
                </Row>

                {/************SECOND-ROW*****************/}
                <Row className='our_platform_second_row justify-content-center pt-md-5 mt-md-5'>
                    <Col sm={6} md={4} className='text-center' data-aos="zoom-out-up">
                        <img src={imageIcon} alt="images" />
                        <p className='fs_sm fw-normal'>Harness the power of 30 million data points to reach your highest converting target market</p>
                    </Col>
                    <Col sm={6} md={4} className='text-center mt-4 mt-sm-0'>
                        <img src={circle} alt="images" />
                        <p className='fs_sm fw-normal'>Increase your marketingdollars ROI</p>
                    </Col>
                    <Col sm={6} md={4} className='text-center mt-4 mt-md-0' data-aos="zoom-out-down">
                        <img src={notesIcon} alt="images" />
                        <p className='fs_sm fw-normal mt-2'>A top of funnel marketing solution to fill your prospect pipeline</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Platform