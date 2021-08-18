import React, { Component } from 'react'
import "./style/style.css"
import Header from "../../components/headeruser"
import Aside from "../../components/asideseller"
import InputInventory from '../../components/inputinventory'

export class Inventory extends Component {

    render() {
        return (
                <body className="home-body">
                    <Header value="test"/>
                    <Aside />
                        <div className="mx-5">
                            <main className="inventory-layout">
                                <h3>Inventory</h3>
                                <hr />
                                <InputInventory />
                            </main>
                        </div>
                </body>
        )
    }
}

export default Inventory
