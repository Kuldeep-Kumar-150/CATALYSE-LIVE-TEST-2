import React from 'react'
import Slider from 'react-slick';
import { Col, Container, Row } from 'react-bootstrap'

const DemoSlider = () => {
    ('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    ('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    return (
        <section className='text-white'>
            {/* <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <Col sm={3}>
                                <p className='mb-0 fs_sm text-white fw-semibld'>01</p>
                                <p className='mb-0'>Big Data</p>
                            </Col>
                            <Col sm={3}>
                                <p className='mb-0 fs_sm text-white fw-semibld'>02</p>
                                <p className='mb-0'>Event-Driven</p>
                            </Col>
                            <Col sm={3}>
                                <p className='mb-0 fs_sm text-white fw-semibld'>03</p>
                                <p className='mb-0'>Artificial Intelligence</p>
                            </Col>
                            <Col sm={3}>
                                <p className='mb-0 fs_sm text-white fw-semibld'>04</p>
                                <p className='mb-0'>Predictive Analytics</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container> */}
            <div className="d-flex m-3">
                <div className='w_60 bg_darkblue container_2 p-5 w-100'>
                    {/* <Slider className='slider-nav'> */}
                        <div className=''>
                            <Row className='slide-nav'>
                                <Col sm={3}>
                                    <div className="bg_lightblue">
                                        <p className='mb-0 fs_sm fw-semibold text-white p-3'>1</p>
                                        <p className='fs_2xsm fw-semibold text-white ps-3 pb-3'>Big <span className='d-block'>Data</span></p>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="bg_lightblue">
                                        <p className='mb-0 fs_sm fw-semibold text-white p-3'>2</p>
                                        <p className='fs_2xsm fw-semibold text-white ps-3 pb-3'>Event- <span className='d-block'>Driven</span></p>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="bg_lightblue">
                                        <p className='mb-0 fs_sm fw-semibold text-white p-3'>3</p>
                                        <p className='fs_2xsm fw-semibold text-white ps-3 pb-3'>Artificial <span className='d-block'>Intelligence</span></p>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="bg_lightblue">
                                        <p className='mb-0 fs_sm fw-semibold text-white p-3'>4</p>
                                        <p className='fs_2xsm fw-semibold text-white ps-3 pb-3'>Predictive <span className='d-block'>Analytics</span></p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    {/* </Slider> */}
                </div>
                <div className='w_40 bg_darkblue ms-2 p-5'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fuga beatae dolorem vero praesentium, ipsum commodi consectetur hic sunt nisi necessitatibus veniam voluptas facere voluptatum rem, at, explicabo ipsam dolorum!</p>
                </div>
            </div>
        </section>
    )
}

export default DemoSlider