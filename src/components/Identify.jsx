import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import carsImg1 from '../assets/img/svg/cards_img_1.svg'
import carsImg2 from '../assets/img/svg/cards_img_2.svg'
import carsImg3 from '../assets/img/svg/cards_img_3.svg'
const Identify = () => {
    return (
        <section className='py-5 position-relative'>
            <Container className=' custom_container'>
                <div className="lightblue_bg_box position-absolute"></div>
                <div className="light_green_position_box position-absolute"></div>
                <div className="horizontel_blueline w-100"></div>
                <h3 className='fs_3xl fw-semibold text-center z_index_10 pt-sm-5 mt-5'>Identify Inherited Properties in your <span className='d-lg-block'>local area that will sell</span></h3>
                <p className='fs_md fw-normal pt-2 pt-sm-5 z_index_10 industry_text_width text-center'>Industry High Prediction Rate</p>
                <Row className=' justify-content-center'>
                    <Col sm={6} lg={4} className='text-center mt-5 mt-sm-0' data-aos="fade-up-right">
                        <p className='fw-semibold fs_xl'>40%</p>
                        <img className='mt-2' width={191} height={143} src={carsImg1} alt="carsImg1" />
                        <p className='fs_sm mb-0 fw-normal mt-4 mt-lg-5'>Roughly 4 out of 10 property <span className='d-lg-block'>leads sell within 12 months.</span></p>
                    </Col>
                    <Col sm={6} lg={4} className='text-center mt-5 mt-sm-0 pt-sm-0' data-aos="fade-up-left">
                        <p className='fw-semibold fs_xl'>$77<span className='fw-normal fs_2lg'>Bn</span></p>
                        <img className='mt-2' width={192} height={149} src={carsImg2} alt="carsImg2" />
                        <p className='fs_sm mb-0 fw-normal mt-4 mt-lg-5'>Predicted total property value <span className='d-lg-block'>that will sell per year.</span></p>
                    </Col>
                    <Col sm={6} lg={4} className='text-center mt-5 mt-lg-0' data-aos="fade-down-right">
                        <p className='fw-semibold fs_xl'>77%</p>
                        <img className='mt-2' width={187} height={164} src={carsImg3} alt="carsImg3" />
                        <p className='fs_sm mb-0 fw-normal mt-4 pt-2'>Of recent seller contacted only one <span className='d-lg-block'>agent before finding the right agent</span> <span className='d-lg-block'>they worked with to sell their home.</span></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Identify