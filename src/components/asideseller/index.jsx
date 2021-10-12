import React, { Component } from 'react'
import "./style/style.scoped.css"
import { Link } from 'react-router-dom';

export class AsideSeller extends Component {
    render() {
        return (
            <aside className="layout">
                <div className="d-flex p-5">
                    <img className="rounded-circle asideseller-width" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1627481146/products/d9e3334f-fd72-4548-8d11-ed68909905fbbeard_r2yamy.png" alt="" />
                    <div className="pt-4" id="asideseller-name">
                    <h5 className="fw-bold">Johannes Mikael</h5>
                    <i class="bi bi-pencil-fill">Ubah profile</i>
                    </div>
                </div>
                <div className="accordion ps-5" id="accordionPanelsStayOpenExample">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <i className="bi bi-house-door rounded-circle bg-purple p-2 text-light"></i>
                        Store
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <Link className="list" to="/profileseller">Store Profile</Link>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <i class="bi bi-box-seam p-2 bg-orange rounded-circle text-light"></i>
                        Product
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <Link to="inventory" className="list">Inventory</Link>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <i class="bi bi-cart p-2 rounded-circle bg-danger text-light"></i>
                        Order
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                      <Link className="list" to="/orderseller">My Order</Link>
                      <br />
                      <Link className="list" to="/ordercancel">Order Cancel</Link>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </aside>
        )
    }
}

export default AsideSeller
