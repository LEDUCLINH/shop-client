import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Brand1 from "../../images/brand1.png";
import Brand2 from "../../images/brand2.png";
import Brand3 from "../../images/brand3.png";
import Brand4 from "../../images/brand4.png";
import Brand5 from "../../images/brand5.png";
import Brand6 from "../../images/brand6.png";
const Company = (props) => {
  return <div className="company__item">{props.children}</div>;
};
export class Companys extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <div className="container" style={{ marginTop: '30px', marginBottom: '30px'}}>
        <Slider  {...settings}>
          <Company>
            <img id="dada" src={Brand1} alt="img" />
          </Company>
          <Company>
            <img src={Brand2} alt="img" />
          </Company>
          <Company>
            <img src={Brand3} alt="img" />
          </Company>
          <Company>
            <img src={Brand4} alt="img" />
          </Company>
          <Company>
            <img src={Brand5} alt="img" />
          </Company>
          <Company>
            <img src={Brand6} alt="img" />
          </Company>
        </Slider>
      </div>
    );
  }
}

export default Companys;
