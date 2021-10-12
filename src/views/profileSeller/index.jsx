import React from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asideseller"
import "./style/style.scoped.css"

export default function profileSeller() {
    return (
        <div>
            <Header />
            <div className="d-flex">
            <Aside />
                <div className="card p-3 m-5 mx-4">
                    <h3>My Profile Store</h3>
                    <p>Manage your profile information</p>
                    <hr />

                    <form action="" className="p-1 d-flex">
                        <div>
                            <div className="d-flex justify-content-between pb-3">
                                <p className="cols">Store name</p>
                                <input type="text" className="cols" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <p>Email</p>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <p>Phone number</p>
                                <input type="number" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <p>Store description </p>
                                <textarea name="" id="" cols="24" rows="5"></textarea>
                            </div>
                            <br />
                            <button type="button" className="btn btn-primary rounded-pill margin-save">Save</button>
                        </div>
                        <div className="verticalLine">
                            <img className="rounded-circle photo ms-5" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1627481146/products/d9e3334f-fd72-4548-8d11-ed68909905fbbeard_r2yamy.png" alt="" />
                            <br />
                            <button type="button" className="btn btn-outline-secondary rounded-pill ms-5 mt-2">Select Image</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}
