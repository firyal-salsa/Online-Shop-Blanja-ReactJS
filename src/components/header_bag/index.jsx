import "./style/style.css"
import React from 'react'
//import { Link } from "react-router-dom"
import Logo from "../logo"
import Search from "../search"
import NavbarIcons from "../navbaricons"


function Header_bag() {
    return (
      <nav id="header-navbar" className="header-navbar d-flex justify-content-around">
        <div id="header-logo" className="header-logo-nav navbar-brand p-2 flex-grow-1">
          <Logo />
        </div>
        <Search />
        <NavbarIcons />
      </nav>

    )
}

export default Header_bag