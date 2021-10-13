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
                <div className="card p-3 px-5 m-5 mx-4">
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
                                <label className="form-label pe-5">Phone</label>
                                <input type="number" className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Gender </label>
                                &nbsp;
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Laki-laki"
                                    id="inlineRadio1"
                                    defaultValue="option1"
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                    Laki-laki
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Perempuan"
                                    id="inlineRadio2"
                                    defaultValue="option2"
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                    Perempuan
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Birth </label>
                                &nbsp;
                                <input type="date" className="ps-5 ms-4 form-control" name="" id="" />
                            </div>
                            <br />
                            <button type="button" className="btn btn-primary rounded-pill margin-save">Save</button>
                        </div>
                        <div className="verticalLine">
                            <img className="rounded-circle photo ms-5" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1634127974/firyal_piwyhf.jpg" alt="" />
                            <br />
                            <button type="file" className="btn btn-outline-secondary rounded-pill ms-5 mt-2">Select Image</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}
