import React, { Component } from 'react'
import "./style/style.css"

export class Selectallitems extends Component {
    render() {
        return (
            <div id="selectallitems-allitem" className="card w-75 m-1 p-2">
            <div className="d-flex justify-content-between px-3">
                <div>
                <span className="d-flex">
                    <input className="m-1 selectallitems-red" type="checkbox" />
                    <p className>Select all items</p>
                    <p className="text-secondary">(2 items selected)</p>
                </span>
                </div>
                <p className=" d-flex selectallitems-red">Delete</p>
            </div>
            </div>
        )
    }
}

export default Selectallitems
