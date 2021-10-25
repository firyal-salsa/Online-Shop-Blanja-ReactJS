import React, { useEffect, useState} from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import "./style/style.scoped.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';


function NavbarIcons(props) {
    const user = useSelector((state) => state.users)

    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [dropdownNotif, setDropdownNotif] = useState(false);
    const toggleOpenNotif = () => setDropdownNotif(!dropdownNotif);

    const [dropdownChat, setDropdownChat] = useState(false);
    const toggleOpenChat = () => setDropdownChat(!dropdownChat);

    const { data } = useSelector((state) => state.users)
    const { isAuth } = useSelector((state) => state.users)
    const seller = data.data.result[0].hasOwnProperty('storename')

    const cssl = data.data.result

    const logout = () => {
        cssl.splice(0, cssl.length)
      };
    
    const sl = isAuth && seller ? "/profileseller" : "/profilecustomer"

    return (
        <div id="icons" className="d-flex mx-5 ps-5">
            <Link to="/bag" className="text-secondary m-3 p-2">
                <i className="bi-cart" />
                <span className="badge rounded-pill bg-danger">
                
                <span className="visually-hidden">bag</span>
                </span>
            </Link>
            <Link className="text-secondary m-3 p-2" onClick={toggleOpenNotif}>
                <i className="bi-bell" />
                    <div className={`dropdown-menu ${dropdownNotif ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        <img className="w-25" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1633627390/notification_otjjwi.png" alt="" />
                        <p>No Notification Yet!</p>
                    </div>
            </Link>
            <Link className="text-secondary m-3 p-2" onClick={toggleOpenChat}>
                <i className="bi-envelope" />
                <div className={`dropdown-menu ${dropdownChat ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        <img className="w-25" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1633628510/mail-box_z4ywbp.png" alt="" />
                        <p>No Message Yet!</p>
                    </div>
            </Link>
             
            <span className="mt-3 pl-1 pointer" onClick={toggleOpen}>
                <img className="rounded-circle navbaricons-img" src={user.data.data.result[0].foto} alt=""/>
                <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    <h6>{data.data.result[0].name}</h6>
                    <Link to={sl} className="dropdown-item">
                        Edit Profile              
                    </Link>
                    <Link onClick={logout} to="/login" className="dropdown-item">
                        Logout
                    </Link>
                </div>
            </span>
        </div>
    )
}


export default NavbarIcons
