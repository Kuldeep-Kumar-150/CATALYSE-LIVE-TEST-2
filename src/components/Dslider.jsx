import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import { Container } from 'react-bootstrap'

const Dslider = () => {

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [background, setBackground] = useState('#ffffff');

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 5000, // set autoplay interval in milliseconds
    beforeChange: (current, next) => {
      slider2.slickGoTo(next);
    },
    beforeChange: (current, next) => {
      setBackground('red'); // change background color when second slider changes
      slider1.slickGoTo(next);
    },
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

  };

  return (
    <section>
      <Container>
        <div>
          <h2>Sync Slider</h2>
          <Slider {...settings1} ref={(slider) => setSlider1(slider)}>
            <div style={{ backgroundColor: background }}>
              <h3>Slide 11</h3>
            </div>
            <div>
              <h3>Slide 22</h3>
            </div>
            <div>
              <h3>Slide 33</h3>
            </div>
            <div>
              <h3>Slide 44</h3>
            </div>
            <div>
              <h3>Slide 55</h3>
            </div>
          </Slider>
          <Slider {...settings2} ref={(slider) => setSlider2(slider)}>
            <div>
              <h3>Slide 1</h3>
            </div>
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 4</h3>
            </div>
            <div>
              <h3>Slide 5</h3>
            </div>
            <div>
              <h3>Slide 6</h3>
            </div>
            <div>
              <h3>Slide 7</h3>
            </div>
            <div>
              <h3>Slide 8</h3>
            </div>
            <div>
              <h3>Slide 9</h3>
            </div>
            <div>
              <h3>Slide 10</h3>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  )
}

export default Dslider