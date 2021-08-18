import React, { Component } from 'react'
import "./style/style.css"

class logo extends Component {
    render() {
        return (
            <figure className="logo">
                <img
                    src="http://res.cloudinary.com/dvehyvk3d/image/upload/v1627776635/products/d76cb588-346d-4193-a7bd-ec0a81735713Vector_dq3uwq.png"
                    className="blanja"
                    alt="img_desc"/>{" "}
                <p className="logo-name">Blanja</p>
            </figure>
        )
    }
}

export default logo
