import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import prevArrow from '../assets/img/svg/prev_arrow.svg'
import nextArrow from '../assets/img/svg/next_arrow.svg'
import earthImg from '../assets/img/svg/earth_img.svg'
import worldMap from '../assets/img/web/world_map.webp'
import earthMap from '../assets/img/svg/earth_map_img.svg'
const UsersReview = () => {
    const mySlider = useRef("");
    console.log(mySlider)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='my-5 py-5'>
            <Container className='custom_container position-relative'>
                <div className='people_reviews_section_positon_box position-absolute'></div>
                <div className='people_reviews_section_positon_box2 position-absolute'></div>
                <img onClick={() => mySlider.current.slickPrev()} className='slider_prev_arrow position-absolute crusor_pointer' src={prevArrow} alt="prevArrow" />
                <img onClick={() => mySlider.current.slickNext()} className='slider_next_arrow position-absolute crusor_pointer' src={nextArrow} alt="nextArrow" />
                <h6 className='text-center fs_3xl fw-semibold mb-5'>See what our users say </h6>
                <Slider {...settings} ref={mySlider}>
                    <div className="px-2">
                        <div className="bg_white px-2 p-sm-5 py-2 h-100 rounded-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <p className='text_green fs_sm fw-semibold users_name_logo mb-0 d-flex justify-content-center align-items-center'>RC</p>
                                    <div className='ms-4'>
                                        <p className='fs_md fw-semibold mb-0 z_index_10'>Richard Chung</p>
                                        <p className='fs_xsm fw-normal text_lightdark mb-0'>Killer Williams</p>
                                    </div>
                                </div>
                                <div><svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M26.375 0.5C28.2881 0.499737 30.1247 1.25135 31.4887 2.59278C32.8527 3.93421 33.6349 5.75798 33.6667 7.67083C33.8542 9.47292 33.8271 12.1312 32.6083 15.2C31.3625 18.3375 28.9333 21.7583 24.5 25.0833C24.2811 25.2475 24.0321 25.3669 23.767 25.4348C23.502 25.5027 23.2262 25.5178 22.9554 25.4791C22.4084 25.4009 21.9148 25.1087 21.5833 24.6667C21.2518 24.2246 21.1095 23.669 21.1876 23.122C21.2657 22.5751 21.558 22.0815 22 21.75C25.2583 19.3063 27.125 16.9312 28.1937 14.8542C27.1917 15.1115 26.1464 15.1526 25.1273 14.9749C24.1082 14.7972 23.1385 14.4046 22.2828 13.8233C21.427 13.242 20.7048 12.4853 20.164 11.6033C19.6232 10.7214 19.2763 9.73454 19.1462 8.70823C19.0162 7.68192 19.106 6.63969 19.4098 5.65076C19.7135 4.66184 20.2242 3.74888 20.9079 2.97251C21.5916 2.19614 22.4327 1.57415 23.3753 1.14786C24.3179 0.721561 25.3405 0.500718 26.375 0.5ZM7.62499 0.5C9.5381 0.499737 11.3747 1.25135 12.7387 2.59278C14.1027 3.93421 14.8849 5.75798 14.9167 7.67083C15.1042 9.47292 15.0771 12.1312 13.8583 15.2C12.6146 18.3375 10.1833 21.7583 5.74999 25.0833C5.53112 25.2475 5.28206 25.3669 5.01703 25.4348C4.752 25.5027 4.4762 25.5178 4.20536 25.4791C3.65838 25.4009 3.16484 25.1087 2.83332 24.6667C2.5018 24.2246 2.35945 23.669 2.43759 23.122C2.51573 22.5751 2.80796 22.0815 3.24999 21.75C6.50832 19.3063 8.37499 16.9312 9.44374 14.8542C8.44173 15.1115 7.39644 15.1526 6.37731 14.9749C5.35818 14.7972 4.38853 14.4046 3.53278 13.8233C2.67703 13.242 1.95477 12.4853 1.41398 11.6033C0.873191 10.7214 0.526254 9.73454 0.396215 8.70823C0.266176 7.68192 0.356012 6.63969 0.659755 5.65076C0.963499 4.66184 1.4742 3.74888 2.15792 2.97251C2.84165 2.19614 3.68275 1.57415 4.62535 1.14786C5.56795 0.721561 6.59047 0.500718 7.62499 0.5Z" fill="#030403" />
                                </svg>
                                </div>
                            </div>
                            <p className='fs_sm fw-normal pt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The   'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                    <div className="px-2 z_index_10">
                        <div className="bg_white px-2 p-sm-5 py-2 h-100 rounded-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <p className='text_green fs_sm fw-semibold users_name_logo mb-0 d-flex justify-content-center align-items-center'>PM</p>
                                    <div className='ms-4'>
                                        <p className='fs_md fw-semibold mb-0'>Richard Chung</p>
                                        <p className='fs_xsm fw-normal text_lightdark mb-0'>Killer Williams</p>
                                    </div>
                                </div>
                                <div><svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M26.375 0.5C28.2881 0.499737 30.1247 1.25135 31.4887 2.59278C32.8527 3.93421 33.6349 5.75798 33.6667 7.67083C33.8542 9.47292 33.8271 12.1312 32.6083 15.2C31.3625 18.3375 28.9333 21.7583 24.5 25.0833C24.2811 25.2475 24.0321 25.3669 23.767 25.4348C23.502 25.5027 23.2262 25.5178 22.9554 25.4791C22.4084 25.4009 21.9148 25.1087 21.5833 24.6667C21.2518 24.2246 21.1095 23.669 21.1876 23.122C21.2657 22.5751 21.558 22.0815 22 21.75C25.2583 19.3063 27.125 16.9312 28.1937 14.8542C27.1917 15.1115 26.1464 15.1526 25.1273 14.9749C24.1082 14.7972 23.1385 14.4046 22.2828 13.8233C21.427 13.242 20.7048 12.4853 20.164 11.6033C19.6232 10.7214 19.2763 9.73454 19.1462 8.70823C19.0162 7.68192 19.106 6.63969 19.4098 5.65076C19.7135 4.66184 20.2242 3.74888 20.9079 2.97251C21.5916 2.19614 22.4327 1.57415 23.3753 1.14786C24.3179 0.721561 25.3405 0.500718 26.375 0.5ZM7.62499 0.5C9.5381 0.499737 11.3747 1.25135 12.7387 2.59278C14.1027 3.93421 14.8849 5.75798 14.9167 7.67083C15.1042 9.47292 15.0771 12.1312 13.8583 15.2C12.6146 18.3375 10.1833 21.7583 5.74999 25.0833C5.53112 25.2475 5.28206 25.3669 5.01703 25.4348C4.752 25.5027 4.4762 25.5178 4.20536 25.4791C3.65838 25.4009 3.16484 25.1087 2.83332 24.6667C2.5018 24.2246 2.35945 23.669 2.43759 23.122C2.51573 22.5751 2.80796 22.0815 3.24999 21.75C6.50832 19.3063 8.37499 16.9312 9.44374 14.8542C8.44173 15.1115 7.39644 15.1526 6.37731 14.9749C5.35818 14.7972 4.38853 14.4046 3.53278 13.8233C2.67703 13.242 1.95477 12.4853 1.41398 11.6033C0.873191 10.7214 0.526254 9.73454 0.396215 8.70823C0.266176 7.68192 0.356012 6.63969 0.659755 5.65076C0.963499 4.66184 1.4742 3.74888 2.15792 2.97251C2.84165 2.19614 3.68275 1.57415 4.62535 1.14786C5.56795 0.721561 6.59047 0.500718 7.62499 0.5Z" fill="#030403" />
                                </svg>
                                </div>
                            </div>
                            <p className='fs_sm fw-normal pt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The   'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                    <div className="px-2 z_index_10">
                        <div className="bg_white px-2 p-sm-5 py-2 h-100 rounded-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <p className='text_green fs_sm fw-semibold users_name_logo mb-0 d-flex justify-content-center align-items-center'>PM</p>
                                    <div className='ms-4'>
                                        <p className='fs_md fw-semibold mb-0'>Richard Chung</p>
                                        <p className='fs_xsm fw-normal text_lightdark mb-0'>Killer Williams</p>
                                    </div>
                                </div>
                                <div><svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M26.375 0.5C28.2881 0.499737 30.1247 1.25135 31.4887 2.59278C32.8527 3.93421 33.6349 5.75798 33.6667 7.67083C33.8542 9.47292 33.8271 12.1312 32.6083 15.2C31.3625 18.3375 28.9333 21.7583 24.5 25.0833C24.2811 25.2475 24.0321 25.3669 23.767 25.4348C23.502 25.5027 23.2262 25.5178 22.9554 25.4791C22.4084 25.4009 21.9148 25.1087 21.5833 24.6667C21.2518 24.2246 21.1095 23.669 21.1876 23.122C21.2657 22.5751 21.558 22.0815 22 21.75C25.2583 19.3063 27.125 16.9312 28.1937 14.8542C27.1917 15.1115 26.1464 15.1526 25.1273 14.9749C24.1082 14.7972 23.1385 14.4046 22.2828 13.8233C21.427 13.242 20.7048 12.4853 20.164 11.6033C19.6232 10.7214 19.2763 9.73454 19.1462 8.70823C19.0162 7.68192 19.106 6.63969 19.4098 5.65076C19.7135 4.66184 20.2242 3.74888 20.9079 2.97251C21.5916 2.19614 22.4327 1.57415 23.3753 1.14786C24.3179 0.721561 25.3405 0.500718 26.375 0.5ZM7.62499 0.5C9.5381 0.499737 11.3747 1.25135 12.7387 2.59278C14.1027 3.93421 14.8849 5.75798 14.9167 7.67083C15.1042 9.47292 15.0771 12.1312 13.8583 15.2C12.6146 18.3375 10.1833 21.7583 5.74999 25.0833C5.53112 25.2475 5.28206 25.3669 5.01703 25.4348C4.752 25.5027 4.4762 25.5178 4.20536 25.4791C3.65838 25.4009 3.16484 25.1087 2.83332 24.6667C2.5018 24.2246 2.35945 23.669 2.43759 23.122C2.51573 22.5751 2.80796 22.0815 3.24999 21.75C6.50832 19.3063 8.37499 16.9312 9.44374 14.8542C8.44173 15.1115 7.39644 15.1526 6.37731 14.9749C5.35818 14.7972 4.38853 14.4046 3.53278 13.8233C2.67703 13.242 1.95477 12.4853 1.41398 11.6033C0.873191 10.7214 0.526254 9.73454 0.396215 8.70823C0.266176 7.68192 0.356012 6.63969 0.659755 5.65076C0.963499 4.66184 1.4742 3.74888 2.15792 2.97251C2.84165 2.19614 3.68275 1.57415 4.62535 1.14786C5.56795 0.721561 6.59047 0.500718 7.62499 0.5Z" fill="#030403" />
                                </svg>
                                </div>
                            </div>
                            <p className='fs_sm fw-normal pt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The   'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </Slider>


                <Row className='py-5 my-5 flex-column-reverse flex-lg-row'>
                    <Col lg={6} className='mt-5 text-center d-flex align-items-center flex-column text-lg-start align-items-lg-start'>
                        <h2 className='fs_3xl fw-semibold'>Your Target Market</h2>
                        <p className='fs_sm fw-normal mb-0 d-flex align-items-center mt-3'><img className='pe-2' src={earthImg} alt="earthImg" />Nationwide coverageNationwide coverage</p>
                        <p className='fs_sm fw-normal text_dark mt-2'>It is a long established fact that a reader will be<span className='d-lg-block'> distracted by the readable content of a page when</span> <span className='d-lg-block'>looking at its layout. The point of using Lorem Ipsum is</span> that it has a more-or-less normal distribution of letters.</p>
                        <a href="#" className='fs_sm fw-normal getstarted_btn_slider text-white mt-3 d-inline-block'>Get started</a>
                    </Col>
                    <Col lg={6} className='d-lg-flex justify-content-lg-end mt-5 position-relative ps-lg-5'>
                        <img className='w-100 ps-lg-5' src={worldMap} alt="worldMap" />
                        <img className='position-absolute earth_map_img w-25' src={earthMap} alt="earthMap" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default UsersReview