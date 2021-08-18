import React, { Component } from 'react'
import "./style/style.css"
import { Link } from 'react-router-dom';

export class AsideSeller extends Component {
    render() {
        return (
            <aside className="">
                <div className="d-flex p-5">
                    <img className="rounded-circle asideseller-width" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1627481146/products/d9e3334f-fd72-4548-8d11-ed68909905fbbeard_r2yamy.png" alt="" />
                    <div className="pt-4" id="asideseller-name">
                    <h5 className="fw-bold">Johannes Mikael</h5>
                    <i class="bi bi-pencil-fill">Ubah profile</i>
                    </div>
                </div>
                <div className="accordion ps-5 w-25" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo"
      >
     <i className="bi bi-house-door rounded-circle bg-purple p-2 text-light"></i>
            Store
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingTwo"
    >
      <div className="accordion-body asideseller">
        <strong>This is the second item's accordion body.</strong> It is hidden
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
             <i class="bi bi-box-seam p-2 bg-orange rounded-circle text-light"></i>Product
        
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="panelsStayOpen-headingOne"
    >
      <div className="accordion-body">
        <ol>My Products</ol>
        <ol> <Link to="/inventory" className="active">Selling Products</Link></ol>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree"
      >
          <i class="bi bi-cart p-2 rounded-circle bg-danger text-light"></i>
        Order
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingThree"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong>
      </div>
    </div>
  </div>
</div>

            </aside>
        )
    }
}

export default AsideSeller
