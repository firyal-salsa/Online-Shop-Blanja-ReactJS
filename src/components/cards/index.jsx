import React from 'react'
import "./style/style.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function Cards(props) {
    return (
        <div className="card col-xs-1 card-layout cursor" id="card-layout" onClick={() => props.goDetail(props.produk_nama)}>
            <img src={props.produk_foto} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.produk_nama}</h5>
                <p className="card-text text-danger">Rp. {props.produk_harga}</p>
                <p className="card-text text-secondary">{props.produk_toko}</p>
                <p>
                <i className="bi-star-fill text-warning" />
                <i className="bi-star-fill text-warning" />
                <i className="bi-star-fill text-warning" />
                <i className="bi-star-fill text-warning" />
                <i className="bi-star-fill text-warning" />
                ({props.produk_terjual})
                </p>
            </div>
        </div>
    )
}

export default Cards