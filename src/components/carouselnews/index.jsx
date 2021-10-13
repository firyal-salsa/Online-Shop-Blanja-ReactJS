import React, { Component } from "react";
import Slider from "react-slick";
import "./style/style.css"

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "180px",
      autoplay: true,
      slidesToShow: 1,
      speed: 100
    };
    return (
      <div className="mb-2">
        <Slider {...settings}>
          <div className="p-2">
          <img src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1634124210/1_k7yxis.png" className="d-block w-100" alt="..." />
          </div>
          <div className="p-2">
          <img src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1634124196/3_pdjznq.png" className="d-block w-100" alt="..." />
          </div>
          <div className="p-2">
          <img src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1634124194/2_lqhsvt.png" className="d-block w-100" alt="..." />
          </div>
        </Slider>
      </div>
    );
  }
}