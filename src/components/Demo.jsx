import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import layerImg from '../assets/img/web/layer_img.webp'
import videoIcon from '../assets/img/svg/video_icon.svg'
import VidyardPlayer from 'react-player/vidyard';
const Demo = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className='py-1 position-relative'>
            <Container className='custom_container'>
                <div className="horizontel_blueline w-100 mb-5"></div>
                <div className="demo_section_green_img position-absolute"></div>
                <div className="demo_section_blue_img position-absolute"></div>
                <div className="demo_section_bgimg py-5">
                    <div className="py-lg-5 text-center d-flex flex-column align-items-center justify-content-center h-100">
                        <p className='fs_4xl fw-semibold text-white'>Watch a demo</p>
                        <img onClick={handleShow} variant="primary" className='crusor_pointer' height={65} width={65} src={videoIcon} alt="videoIcon" />
                        <p className='fs_2sm fw-semibold text-white pt-4'>Catalyze AI is a predictive analytics business development platform</p>
                    </div>
                </div>
            </Container>
            <Container>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/nqye02H_H6I" title="4K Relaxing Nature Sounds - Short Video Clips of Nature" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                    </Modal.Body>
                </Modal>
            </Container>
        </section>
    )
}

export default Demo;