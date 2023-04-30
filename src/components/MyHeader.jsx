import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/img/svg/header_img.svg'
import overViewImg from '../assets/img/svg/overview_img.svg'
import cardImg from '../assets/img/svg/card_1.svg'
import searchLeadCard from '../assets/img/svg/search-icon.svg'
import videoIcon from '../assets/img/svg/green_video_icon.svg'
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
              <a href="#" className='fs_sm fw-semibold text_green bookdemo_btn ms-4'>Book a demo
                <img className='ms-3 green_video_icon' src={videoIcon} alt="videoIcon" />
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