import React, { Component } from 'react'
import Logo from "../../components/logo"
import LoginSeller from "../../components/loginseller"
import LoginCustomer from "../../components/logincustomer"
import "./style/style.css"
import "./style/primary.css"

class Login extends Component {
    render() {
        return (
            <body className="login-body">
                <div className="container login-form">
                    <header className="login-header lh-base">
                        <Logo />
                        <p className="fw-bold text-center">Please login with your account</p>
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
                        <LoginCustomer />
                        </div>
                        <div className="tab-pane fade" id="seller" role="tabpanel" aria-labelledby="seller-tab">
                        <LoginSeller />
                        </div>
                        
                    </div>
                    </main>
                </div>
            </body>
        )
    }
}

export default Login
