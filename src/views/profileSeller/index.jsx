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
                <div className="card p-3 px-5 m-5 mx-4">
                    <h3>My Profile Store</h3>
                    <p>Manage your profile information</p>
                    <hr />

                    <form action="" className="p-1 d-flex">
                        <div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Name</label>
                                <input type="text" className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Email</label>
                                <input type="email" className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Phone</label>
                                <input type="number" className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Description</label>
                                <textarea className="form-control" name="" id="" cols="24" rows="5"></textarea>
                            </div>
                            <br />
                            <button type="button" className="btn btn-primary rounded-pill margin-save">Save</button>
                        </div>
                        <div className="verticalLine">
                            <img className="rounded-circle photo ms-5" src="https://res.cloudinary.com/dvehyvk3d/image/upload/v1634130450/chiyobayi_plxami.jpg" alt="" />
                            <br />
                            <button type="button" className="btn btn-outline-secondary rounded-pill ms-5 mt-2">Select Image</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}
