import "./style/style.scoped.css";
import React, { Component } from "react";
//import axios from "axios"
import Header from "../../components/header_bag";

class Bag extends Component {
  render() {
    return (
      <body className="bag-body">
        <Header />
        <div id="main" className="container layout pt-5">
          <main className="row">
            <h3 id="bag-title">My Bag</h3>
            <br />
            <aside className="bag-summary">
              <div className="card">
                <div className="card-body">
                  <h5 id="textshopping" className="card-title font-weight-bold">
                    Shopping summary
                  </h5>
                  <div className="price">
                    <p id="total" className="card-text text-secondary">
                      Total price
                    </p>
                    <p id="total" className="card-text font-weight-bold">
                      Rp. 154000
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <button id="shoppingsummary-red" className="btn">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="card w-75 m-1 p-2">
              <div className="d-flex justify-content-between px-3">
                <div>
                  <span className="d-flex">
                    <input className="m-1 selectallitems-red" type="checkbox" />
                    <p className>Select all items</p>
                    <p className="text-secondary">(2 items selected)</p>
                  </span>
                </div>
                <p className=" d-flex selectallitems-red">Delete</p>
              </div>
            </div>
            <br />
            <div className="card row w-75 m-1 p-2 h-75">
              <div className="d-flex justify-content-between px-4 d-flex align-items-center">
                <input className="listbag-red" type="checkbox" />
                <div className="d-flex justify-content-start">
                  <img
                    className="card-img w-25 p-3"
                    src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1630823737/products/bac0dc21-0139-4dd0-9ed1-257c6d98b87123df99e4247ebcca365390bded253347_ymbyfr.jpg"
                    alt=""
                  />
                  <span className="d-flex align-items-center mx-1 py-3 w-50 flex-column lh-5">
                    <p id="product-name" className="card-text w-100 pt-5">
                    zippy playsuit disney pooh
                    </p>
                    <p
                      id="store-name"
                      className="card-text text-secondary w-100 pt-1"
                    >
                      Little Palmerhaus
                    </p>
                  </span>
                </div>
                <span id="number">
                  <input type="number" min="1" className="w-50" />
                </span>
                <p id="number" className="card-text fw-bold">
                Rp. 85000
                </p>
              </div>
            </div>
            <div className="card row w-75 m-1 p-2 h-75">
              <div className="d-flex justify-content-between px-4 d-flex align-items-center">
                <input className="listbag-red" type="checkbox" />
                <div className="d-flex justify-content-start">
                  <img
                    className="card-img w-25 p-3"
                    src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1629017907/products/49916525-d3a4-4eee-af8c-3542659951a07036d7bc7c199027693c90430fb727c6_zzw4pf.jpg"
                    alt=""
                  />
                  <span className="d-flex align-items-center mx-1 py-3 w-50 flex-column lh-5">
                    <p id="product-name" className="card-text w-100 pt-5">
                    sky pants jogger chinos
                    </p>
                    <p
                      id="store-name"
                      className="card-text text-secondary w-100 pt-1"
                    >
                      Little Palmerhaus
                    </p>
                  </span>
                </div>
                <span id="number">
                  <input type="number" min="1" className="w-50" />
                </span>
                <p id="number" className="card-text fw-bold">
                Rp. 69000
                </p>
              </div>
            </div>
          </main>
        </div>
      </body>
    );
  }
}

export default Bag;
