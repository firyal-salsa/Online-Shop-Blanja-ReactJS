import React from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"
import { Link } from 'react-router-dom'

export default function OrderCustomer() {
    return (
        <div>
            <Header />
            <div className="d-flex">
            <Aside />
                <div className="card p-3 m-5 mx-4">
                    <h3>Order</h3>
                    <br />
                    <ul>
                        <li>
                            <Link className="text-nav"  >All items</Link>
                        </li>
                        <li>
                            <Link className="text-nav"  >Not yet paid</Link>
                        </li>
                        <li>
                            <Link className="text-nav"  >Packed</Link>
                        </li>
                        <li>
                            <Link className="text-nav"  >Sent</Link>
                        </li>
                        <li>
                            <Link className="text-nav"  >Completed</Link>
                        </li>
                        <li>
                            <Link className="text-nav" >Order cancel</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}