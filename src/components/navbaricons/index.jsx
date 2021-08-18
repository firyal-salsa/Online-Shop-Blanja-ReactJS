import React, { Component } from 'react'
import "./style/style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

export class NavbarIcons extends Component {
    render() {
        return (
            <div id="icons" className="d-flex mx-5 ps-5">
            <Link className="text-secondary m-3 p-2">
                <i className="bi-bag" />
            </Link>
            <Link className="text-secondary m-3 p-2">
                <i className="bi-bell" />
            </Link>
            <Link className="text-secondary m-3 p-2">
                <i className="bi-envelope" />
            </Link>
            <span className="mt-3 pl-1">
                <img className="rounded-circle navbaricons-img" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1627481146/products/d9e3334f-fd72-4548-8d11-ed68909905fbbeard_r2yamy.png" alt=""/>
            </span>
            </div>
        )
    }
}

export default NavbarIcons
