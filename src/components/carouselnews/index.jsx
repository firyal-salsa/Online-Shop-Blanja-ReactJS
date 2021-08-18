import React, { Component } from "react";
import Slider from "react-slick";
import "./style/style.css"

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      autoplay: true,
      slidesToShow: 2,
      speed: 500
    };
    return (
      <div className="mb-2">
        <Slider {...settings}>
          <div className="p-2">
          <img src="http://res.cloudinary.com/dvehyvk3d/image/upload/v1627986050/products/14e93ff1-82e8-410d-a244-77ba3e2c8d63baby_kvelod.jpg" className="d-block w-100" alt="..." />
                  <h1 className="cn-1">Baby Outfit</h1>
          </div>
          <div className="p-2">
          <img src="http://res.cloudinary.com/dvehyvk3d/image/upload/v1627986201/products/7ce107e2-12c4-47eb-8b6e-5ad46b818b41suit_bme383.jpg" className="d-block w-100" alt="..." />
          <h1 className="cn-2">Suit</h1>
          </div>
          <div className="p-2">
          <img src="http://res.cloudinary.com/dvehyvk3d/image/upload/v1627986299/products/0cbec6e7-267d-4169-9830-9a831214612dvintage_kk3opm.jpg" className="d-block w-100" alt="..." />
                  <h1 className="cn-3">Vintage</h1>
          </div>
        </Slider>
      </div>
    );
  }
}