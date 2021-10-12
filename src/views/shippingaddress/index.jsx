import React from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"

export default function profileSeller() {
    return (
        <div>
            <Header />
            <div className="d-flex">
            <Aside />
                <div className="card p-3 px-5 m-5 mx-4">
                    <h3>Chose Another Address</h3>
                    <p>Manage your shipping address</p>
                    <hr />

                    <div className="btn btn-add" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <p>Add new address</p>
                    </div>
                    <br />
                    <div className="card border-primary mb-3">
                    <div className="card-body layout-address">
                        <h5 className="card-title">Nama</h5>
                        <p className="card-text">
                        Alamat
                        </p>
                        <b className="text-primary">Change Address</b>
                    </div>
                    </div>

                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add new Address
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Save address as (ex : home address, office address)
                                            </label>
                                            <input type="text" className="form-control" id="" placeholder="Rumah"/>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Recipient's name
                                            </label>
                                            <input type="text" className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Recipient's telephone number
                                            </label>
                                            <input type="number" className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Address
                                            </label>
                                            <input type="text" className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Postal code
                                            </label>
                                            <input type="number" className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            City or Subdistrict
                                            </label>
                                            <input type="number" className="form-control w-50" id=""/>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                            Make the primary address
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}
