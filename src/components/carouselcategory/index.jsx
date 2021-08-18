import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

class carouselCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prods: [],
    };
  }

  getAllProducts = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/category`,
    })
      .then((res) => {
        const { result } = res.data;
        console.log(res.data);
        this.setState({ prods: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="pb-5 pt-5">
        <div className="title-category col-4">
          <h3>Category</h3>
          <p>What are you currently looking for</p>
        </div>
        <div className="slide-category col-8">
          <Slider {...settings}>
            {this.state.prods.map((res) => {
              return (
                <div className="fs-4 text-light text-center p-1">
                  <div className="bg-info rounded mx-1 p-3">
                    {res.kategori_nama}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default carouselCategory;
