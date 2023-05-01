import React from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/page_logo.svg'
const PreLoader = () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none"
        document.body.classList.remove("overflow-hidden")
    }, 3000);
    return (
        <section>
            <Container>
                <div className="preloader">
                    <div className="d-flex align-items-center justify-content-center preloader">
                        <p className='fs_2lg fw-bold text-dark preloader_animation'><img src={pageLogo} alt="pageLogo" /></p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PreLoader