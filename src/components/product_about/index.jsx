import React from 'react'
import "./style/style.scoped.css"
import ModalProduct from '../modalupdateproduct'


function productAbout(props) {
    return (
        <div className="product_about-layout">
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

                    <p className="fw-bold mt-3">Color</p>
                    <div className="product-about-width">
                    <div className="d-flex">
                    <button type="button" className="btn-dark rounded-circle p-4 me-3"></button>
                    <button type="button" className="btn-danger rounded-circle p-4 me-3"></button>
                    <button type="button" className="btn-blue blue rounded-circle p-4 me-3"></button>
                    <button type="button" className="btn-success rounded-circle p-4 me-3"></button>

                    </div>
                    </div>
                    <div className="d-flex my-3">
                        <div className="size product-about-width-15">
                        <p className="fw-bold">Size</p>
                        <input type="number" min="1" max="100" step="2"/>
                        </div>
                        <div className="">
                            <p className="fw-bold">Jumlah</p>
                            <input type="number" min="1" max="100"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between w-50 ">
                    <button type="button" className="btn btn-outline-secondary px-5 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
                    <ModalProduct />
                    <button type="button" onClick={() => props.remove(props.produk_id)} id="product-about-red" className="btn btn-outline-secondary px-5 rounded-pill">Delete</button>
                    </div>
                </section>
                
        </div>
    )
}


export default productAbout
