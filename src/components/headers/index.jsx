import "./style/style.css"
import React from 'react'
//import { Link } from "react-router-dom"
import Logo from "../logo"
import Search from "../search"
import Navbar from "../navbar"


function Header() {
    return (
      <nav className="header-navbar d-flex justify-content-around">
        <div id="header-logo" className="header-logo-nav navbar-brand p-2 flex-grow-1">
          <Logo />
        </div>
        <div id="header-search">
          <Search />
        </div>
        <div id="header-navbar-home">
        <Navbar />
        </div>
      </nav>

    )
}

export default Header