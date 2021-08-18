import React, { Component } from 'react'
import "./style/style.css"
import Logo from "../logo"
import Navbar from "../navbaricons"

export class HeaderUser extends Component {
    render() {
        return (
            <nav id="header-navbar" className="header-navbar d-flex">
            <div id="header-logo" className="ms-5 p-2 flex-grow-1">
              <Logo />
            </div>
            <Navbar />
          </nav>
        )
    }
}

export default HeaderUser
