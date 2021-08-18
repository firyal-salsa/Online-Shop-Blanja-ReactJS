import React, { Component } from "react";
import "./style/style.css";

export class Product_Review extends Component {
  render() {
    return (
      <section className="productreview">
        <div className="">
          <h5 className="fw-bold">Product Review</h5>
          <div className="container mt-5">
            <div className="d-flex">
              <div className="col col-xs-2">
                <div className="d-flex align-items-end">
                  <h1 className="result pb-1">5.0</h1>
                  <p className="text-secondary">/10</p>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                  </div>
                </div>
              </div>
              <div className="col lh-1">
                <p className="bi-star-fill text-warning mb-1">
                  5{" "}
                  <progress
                    className="product_review-progress"
                    id="file"
                    value="100"
                    max="100"
                  >
                    {" "}
                  </progress>{" "}
                  4{" "}
                </p>
                <p className="bi-star-fill text-warning mb-1">
                  4{" "}
                  <progress
                    className="product_review-progress"
                    id="file"
                    value="0"
                    max="100"
                  >
                    {" "}
                  </progress>{" "}
                  0
                </p>
                <p className="bi-star-fill text-warning mb-1">
                  3{" "}
                  <progress
                    className="product_review-progress"
                    id="file"
                    value="0"
                    max="100"
                  >
                    {" "}
                  </progress>{" "}
                  0
                </p>
                <p className="bi-star-fill text-warning mb-1">
                  2{" "}
                  <progress
                    className="product_review-progress"
                    id="file"
                    value="0"
                    max="100"
                  >
                    {" "}
                  </progress>{" "}
                  0
                </p>
                <p className="bi-star-fill text-warning mb-1">
                  1{" "}
                  <progress
                    className="product_review-progress"
                    id="file"
                    value="0"
                    max="100"
                  >
                    {" "}
                  </progress>{" "}
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product_Review;
