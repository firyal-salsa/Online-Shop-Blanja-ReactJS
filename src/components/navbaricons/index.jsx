import React, { useEffect, useState} from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import "./style/style.scoped.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';


function NavbarIcons(props) {
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const [dropdownNotif, setDropdownNotif] = useState(false);
    const toggleOpenNotif = () => setDropdownNotif(!dropdownNotif);

    const [dropdownChat, setDropdownChat] = useState(false);
    const toggleOpenChat = () => setDropdownChat(!dropdownChat);

    const [bag, setbag] = useState([])
    const { token } = useSelector((state) => state.users)
    const [filteredData, setFilteredData] = useState(bag);

    useEffect(() => {
        axios({
          method: "GET",
          url: `${process.env.REACT_APP_API}/bag`,
          headers: {
              tokenauth: token,
          },
      })
          .then((res) => {
              console.log(res.data.result.length)
              setFilteredData(res.data.result.length)
          })
          .catch((err) => {
              console.log(err.response)
          })
      
          // eslint-disable-next-line react-hooks/exhaustive-deps
      })

    return (
        <div id="icons" className="d-flex mx-5 ps-5">
            <Link to="/bag" className="text-secondary m-3 p-2">
                <i className="bi-cart" />
                <span className="badge rounded-pill bg-danger">
                {filteredData}
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
                <img className="rounded-circle navbaricons-img" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1634130450/chiyobayi_plxami.jpg" alt=""/>
                <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    <h6>{props.name}</h6>
                    <Link to="/profileseller" className="dropdown-item">
                        Edit Profile              
                    </Link>
                    <Link to="/login" className="dropdown-item">
                        Logout
                    </Link>
                </div>
            </span>
        </div>
    )
}


export default NavbarIcons
