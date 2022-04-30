import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './preview-slider.scss'
import slideOne from '../../assets/images/preview-slider/slide-1.jpg'
import slideTwo from '../../assets/images/preview-slider/slide-2.jpg'
import slideThree from '../../assets/images/preview-slider/slide-3.jpg'
import slideOneMobile from '../../assets/images/preview-slider/slide-mob-1.jpg'
import slideTwoMobile from '../../assets/images/preview-slider/slide-mob-2.jpg'
import slideThreeMobile from '../../assets/images/preview-slider/slide-mob-3.jpg'

export default class PreviewSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    }
    return (
      <div className="preview-slider">
        <Slider {...settings} className="preview-slider__body">
          <div>
            <picture>
              <source srcSet={slideOneMobile} media="(max-width: 576px)" />
              <img src={slideOne} alt="shop slide" />
            </picture>
          </div>
          <div>
            <picture>
              <source srcSet={slideTwoMobile} media="(max-width: 576px)" />
              <img src={slideTwo} alt="shop slide" />
            </picture>
          </div>
          <div>
            <picture>
              <source srcSet={slideThreeMobile} media="(max-width: 576px)" />
              <img src={slideThree} alt="shop slide" />
            </picture>
          </div>
        </Slider>
      </div>
    )
  }
}
