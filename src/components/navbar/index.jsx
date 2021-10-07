import React, { Component } from 'react'
import "./style/style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div id="cart-button" className="p-3 ms-5">
                <Link to="/login" type="button" id="navbar-red" className="btn px-5 m-1 rounded-pill">Login</Link>
                <Link to="/signup" type="button" className="btn btn-outline-secondary px-5 m-1 rounded-pill">Sign Up</Link>
            </div>
        )
    }
}

export default Navbar
