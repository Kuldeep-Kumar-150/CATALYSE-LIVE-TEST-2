import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/img/svg/header_img.svg'
import overViewImg from '../assets/img/svg/overview_img.svg'
import cardImg from '../assets/img/svg/card_1.svg'
import searchLeadCard from '../assets/img/svg/search-icon.svg'
const MyHeader = () => {
  return (
    <header className=''>
      <Container className=' custom_container py-md-5'>
        <div className="green_position_img"></div>
        <Row className=' flex-column-reverse flex-lg-row'>
          <Col lg={6} className='mt-4'>
            <h1 className='fs_5xl fw-semibold'>Event-Driven <span className='d-lg-block'> Listing Leads</span></h1>
            <p className='fs_sm fw-normal mt-2 mt-sm-3 mb-0'>Not your average smart farming, not statistical analysis, but <span className='d-lg-block'> actionable behaviors.</span></p>
            <div className='pt-md-5 pt-md-2'>
              <a href="#" className='fs_sm fw-normal text-white getstarted_btn_header d-inline-block mt-4'>Get started</a>
              <a href="#" className='fs_sm fw-semibold text_green bookdemo_btn'>Book a demo
                <svg className='ms-2 ms-sm-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_270_243)">
                    <path d="M8.5 7.53347V16.0665C8.49997 16.1614 8.52527 16.2546 8.57327 16.3365C8.62127 16.4183 8.69024 16.4859 8.77307 16.5322C8.8559 16.5785 8.94958 16.6019 9.04446 16.5999C9.13933 16.5979 9.23195 16.5707 9.31278 16.5209L16.2459 12.2544C16.3235 12.2067 16.3877 12.1399 16.4322 12.0603C16.4766 11.9808 16.5 11.8911 16.5 11.8C16.5 11.7089 16.4766 11.6192 16.4322 11.5397C16.3877 11.4602 16.3235 11.3933 16.2459 11.3456L9.31278 7.07908C9.23195 7.02936 9.13933 7.0021 9.04446 7.00012C8.94958 6.99813 8.8559 7.0215 8.77307 7.06781C8.69024 7.11411 8.62127 7.18168 8.57327 7.26354C8.52527 7.34539 8.49997 7.43857 8.5 7.53347Z" fill="#1AD079" />
                  </g>
                  <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#1AD079" />
                  <defs>
                    <clipPath id="clip0_270_243">
                      <rect width="24" height="24" rx="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </Col>
          <Col lg={6} className=' position-relative pt-lg-3'>
            <img className='bg-white p-1 rounded-4 w-100' src={headerImg} alt="headerImg" />
            <img className='position-absolute overview_img' src={overViewImg} alt="overViewImg" />
            <img className='header_card_img position-absolute' src={cardImg} alt="cardImg" />
            <img className='search_card_img position-absolute' src={searchLeadCard} alt="searchLeadCard" />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default MyHeader