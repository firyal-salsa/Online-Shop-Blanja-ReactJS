import React, { Component } from 'react'

class home extends Component {
    render() {
        return (
            <div className="card col-xs-1" style={{ width: "12rem", margin: 10 }}>
                <img src="gez-xavier-mansfield.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Men's formal suit - Black &amp; White</h5>
                    <p className="card-text text-danger">$ 40.0</p>
                    <p className="card-text text-secondary">Zalora Cloth</p>
                    <p>
                    <i className="bi-star" />
                    <i className="bi-star" />
                    <i className="bi-star" />
                    <i className="bi-star" />
                    <i className="bi-star" />
                    (10)
                    </p>
                </div>
            </div>

        )
    }
}

export default home
