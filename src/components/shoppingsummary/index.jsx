import React, { Component } from 'react'
import "./style/style.scoped.css"

export class ShoppingSummary extends Component {
    render() {
        return (
                <div className="card w-25">
                    <div className="card-body">
                    <h5 id="textshopping" className="card-title font-weight-bold">
                        Shopping summary
                    </h5>
                    <div className="price">
                        <p id="total" className="card-text text-secondary">
                        Total price
                        </p>
                        <p id="total" className="card-text font-weight-bold">
                        $ 40.0
                        </p>
                    </div>
                    <div className="d-grid gap-2">
                    <button id="shoppingsummary-red" className="btn">
                        Buy
                    </button>
                    </div>
                    </div>
                </div>
        )
    }
}

export default ShoppingSummary
