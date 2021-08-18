import React from 'react'
import "./style/style.scoped.css"
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div className="d-flex flex-column d-flex justify-content-center">
            <main className="signup text-center">
                <input type="text" className="signup-input p-2" name="" placeholder="Name" />
                <input type="email" className="signup-input p-2" name="" placeholder="Email" />
                <input type="text" className="signup-input p-2" name="" placeholder="Phone Number" />
                <input type="text" className="signup-input p-2" name="" placeholder="Store Name" />
                <input type="password" class="signup-input p-2" name=""  placeholder="Password" />
                <Link to="/home"  className="btn button-primary text-center mt-5">PRIMARY</Link>
            </main>
        </div>
       
    )
}
