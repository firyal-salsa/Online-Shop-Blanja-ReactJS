import React from 'react'
import "./style/style.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function ListBag(){
  return (
    <div className="card row w-75 m-1 p-2 h-75">
    <div className="d-flex justify-content-between px-4 d-flex align-items-center">
      <input className="listbag-red" type="checkbox" />
      <div className="d-flex justify-content-start">
        <img className="card-img w-25 p-3" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1627481146/products/d9e3334f-fd72-4548-8d11-ed68909905fbbeard_r2yamy.png" alt=""/>
        <span className="d-flex align-items-center mx-1 py-3 w-50 flex-column lh-5">
          <p id="product-name" className="card-text w-100 pt-5">
            Men's formal suit - Black
          </p>
          <p id="store-name" className="card-text text-secondary w-100 pt-1">
            Zalora Cloth
          </p>
        </span>
      </div>
      <span id="number">
        <input type="number" min="1" className="w-25" />
      </span>
      <p id="number" className="card-text fw-bold">
        $20.0
      </p>
    </div>
  </div>
)
}


export default ListBag
