import React from 'react'
import "./style/style.scoped.css"
import ModalProduct from '../modalupdateproduct'


function productAbout(props) {
    return (
        <div className="product_about-layout my-4">
            <img className="w-25 layout-about" src={props.produk_foto} alt="" />
                <section className="product-about">
                    <h3 className="fw-bold">{props.produk_nama}</h3>
                    <p className="text-secondary">{props.produk_toko}</p>
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i className="bi-star-fill text-warning" />
                    <i>{props.produk_terjual}</i>
                    
                    <p className="mt-4">Price</p>
                    <h3 className="fw-bold">Rp. {props.produk_harga}</h3>
                    <div className="d-flex justify-content-between w-50 ">
                    <button type="button" className="btn btn-outline-secondary px-5 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
                    <ModalProduct />
                    <button type="button" onClick={() => props.remove(props.produk_id)} id="product-about-red" className="btn btn-outline-secondary px-5 rounded-pill">Delete</button>
                    </div>
                </section>
                <br />
        </div>
    )
}


export default productAbout
