import "./style/style.css"
import React, { Component } from 'react'
//import axios from "axios"
import Header from "../../components/header_bag"
import Select from "../../components/selectallitems"
import ListBag from "../../components/listbag"
import ShoppingSummary from "../../components/shoppingsummary"

class Bag extends Component {
    render() {
        return (
            <body className="bag-body">
                <Header />
              <div id="main" className="container pt-5">
                <main className="row">
                <h3 id="bag-title">My Bag</h3>
                  <Select />
                  <ListBag />
                  <aside className="bag-summary">
                    <ShoppingSummary />
                </aside>
                </main>
              </div>
            </body>
            
        )
    }
}

export default Bag
