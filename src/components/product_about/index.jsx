import React from 'react'
import "./style/style.scoped.css"


function productAbout(props) {
    return (
                <section className="product-about">
                    <div className="">
                        <img className="product-photo" src={props.produk_foto} alt="" />
                    </div>
                    <div className="test">
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
                        <div className="pt-5">
                        <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Chat</button>
                        <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Add Bag</button>
                        <button type="button" className="btn btn-primary py-2 btn-buy-now rounded-pill">Buy Now</button>
                        </div>
                    </div>
                </section>
    )
}


export default productAbout
