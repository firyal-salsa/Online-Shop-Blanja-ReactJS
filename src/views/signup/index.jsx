import React, { Component } from 'react'
import Logo from "../../components/logo"
import "./style/style.scoped.css"
import { Link } from 'react-router-dom'
import SignUpCS from "../../components/signupcustomer"
import SignUpSL from "../../components/signupseller"

export class index extends Component {
    render() {
        return (
            <body className="signup-body">
                <div className="container signup-form">
                    <header className="sign-header lh-base">
                        <Logo />
                        <p className="fw-bold text-center">Please signup with your account</p>
                    </header>
                    <nav className="d-flex justify-content-center m-4">
                    <div className="btn-group nav" id="myTab" role="tablist">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" data-bs-toggle="tab" data-bs-target="#customer" role="tab" aria-controls="customer" aria-selected="true" />
                        <label className="btn btn-outline-primary rounded-0 px-5" htmlFor="btnradio1">
                            Customer
                        </label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" data-bs-toggle="tab" data-bs-target="#seller" role="tab" aria-controls="seller" aria-selected="false"/>
                        <label className="btn btn-outline-primary rounded-0 px-5" htmlFor="btnradio2">
                            Seller
                        </label>
                    </div>
                    </nav>
                    <main className="d-flex flex-column d-flex align-items-center">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="customer" role="tabpanel" aria-labelledby="customer-tab">
                            <SignUpCS />
                        </div>
                        <div className="tab-pane fade" id="seller" role="tabpanel" aria-labelledby="seller-tab">
                            <SignUpSL />
                        </div>
                    </div>
                    </main>
                    <footer>
                    <br />
                    <p class="text-center">Already have an account?<Link to="/login" class="link"> Login</Link></p>
                    </footer>
                </div>
            </body>
        )
    }
}

export default index
