import React, { useState} from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"
import withAuth from "../../utils/withAuth"
import FormData from 'form-data'
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios";

function ShippingAddress() {
    const [address, setAddresses] = useState({
        address_tempat:'',
        address_nama:'',
        address_telepon:0,
        address_alamat:'',
        address_kodepos:0,
        address_kota:'',
        address_email:'',
    })

    const history = useHistory()
    const { token } = useSelector((state) => state.users)
    const Form = new FormData()

    const Save = () => {
        Form.append("address_tempat", address.address_tempat)
        Form.append("address_nama", address.address_nama)
        Form.append("address_telepon", address.address_telepon)
        Form.append("address_alamat", address.address_alamat)
        Form.append("address_kodepos", address.address_kodepos)
        Form.append("address_kota", address.address_kota)
        Form.append("address_email", address.address_email)

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/customer/address`,
            headers: {
                "content-type": "multipart/form-data",
                tokenauth: token,
            },
            data: Form,
        })
            .then((res) => {
                console.log(res.data)
                history.push("/shippingaddress")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const Change = (el) => {
        const newdata = { ...address }
        newdata[el.target.name] = el.target.value
        setAddresses(newdata)
    }

    
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
                                <form>
                                <div className="modal-body">
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Save address as (ex : home address, office address)
                                            </label>
                                            <input type="text" className="form-control" name="address_tempat" onChange={Change} placeholder="Rumah"/>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Recipient's name
                                            </label>
                                            <input type="text" name="address_nama" onChange={Change} className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Recipient's telephone number
                                            </label>
                                            <input type="number" name="address_telepon" onChange={Change} className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Address
                                            </label>
                                            <input type="text" name="address_alamat" onChange={Change} className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Postal code
                                            </label>
                                            <input type="number" name="address_kodepos" onChange={Change} className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            City or Subdistrict
                                            </label>
                                            <input type="text" name="address_kota" onChange={Change} className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Email
                                            </label>
                                            <input type="email" name="address_email" onChange={Change} className="form-control" id=""/>
                                        </div>
                                        </div>
                                </div>
                                <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" onClick={Save} className="btn btn-primary">
                                    Save changes
                                </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default withAuth(ShippingAddress)