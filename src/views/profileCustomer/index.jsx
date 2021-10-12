import React from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"

export default function profileCustomer() {
    return (
        <div>
            <Header />
            <div className="d-flex">
            <Aside />
                <div className="card p-3 m-5 mx-4">
                    <h3>My Profile Store</h3>
                     <label>Manage your profile information </label>
                    <hr />

                    <form action="" className="p-1 d-flex">
                        <div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5">Name</label>
                                <input type="text" className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5" >Email</label>
                                &nbsp;
                                <input type="email" className="form-control pe-5" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Phone number </label>
                                <input type="" className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Gender </label>
                                &nbsp;
                                <input type="radio" name="Laki-laki" value="Laki-laki" id="" />
                                 <label>Laki-laki </label>
                                <input type="radio" name="Perempuan" value="Perempuan" id="" />
                                 <label>Perempuan </label>
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Date of Birth </label>
                                &nbsp;&nbsp;
                                <input type="date" className="px-5 form-control" name="" id="" />
                            </div>
                            <br />
                            <button type="button" className="btn btn-primary rounded-pill margin-save">Save</button>
                        </div>
                        <div className="verticalLine">
                            <img className="rounded-circle photo ms-5" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1627481146/products/d9e3334f-fd72-4548-8d11-ed68909905fbbeard_r2yamy.png" alt="" />
                            <br />
                            <button type="file" className="btn btn-outline-secondary rounded-pill ms-5 mt-2">Select Image</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}
