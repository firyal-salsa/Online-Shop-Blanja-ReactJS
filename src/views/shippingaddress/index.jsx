import React, { useEffect, useState} from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"
import withAuth from "../../utils/withAuth"
import { useSelector } from 'react-redux';
import axios from "axios";

function ShippingAddress() {
    const [addr, setAddr] = useState({
        address_nama:'',
        address_alamat: '',
        address_tempat: '',
        address_kodepos: 0,
        address_kota: '',
        address_email : '',
        address_telepon: 0,
    })
    const [addresses, setaddress] = useState([])
    const [filteredData, setFilteredData] = useState(addresses);
    const { token } = useSelector((state) => state.users)
    
useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/customer/address`,
      headers: {
          tokenauth: token,
      },
  })
      .then((res) => {
          setaddress(res.data.result)
          setFilteredData(res.data.result);
      })
      .catch((err) => {
          console.log(err.response)
      })
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const Save = () => {
    const body = {
        address_nama: addr.address_nama,
        address_alamat: addr.address_alamat,
        address_tempat: addr.address_tempat,
        address_kodepos: addr.address_kodepos,
        address_kota: addr.address_kota,
        address_email : addr.address_email,
        address_telepon: addr.address_telepon,
    }

    axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/customer/address`,
        headers: {
            "content-type": "application/json",
            tokenauth: token,
        },
        data: body,
    })
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
}


const Change = (e) => {
    const newdata = { ...addr }
    newdata[e.target.name] = e.target.value
    setAddr(newdata)
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
                    {filteredData.map((value, index) => {
                    return (
                    <div className="card border-primary mb-3">
                        <div className="card-body layout-address">
                                <h5 className="card-title">{value.address_nama}</h5>
                                <p className="card-text">
                                {value.address_alamat}
                                </p>
                                <p className="card-text">
                                {value.address_telepon}
                                </p>
                        </div>
                    </div>
                            );
                        })}
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
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Save address as (ex : home address, office address)
                                            </label>
                                            <input type="text" className="form-control" onChange={Change} name="address_tempat" placeholder="Rumah"/>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Recipient's name
                                            </label>
                                            <input type="text" onChange={Change} name="address_nama" className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Recipient's telephone number
                                            </label>
                                            <input type="number" onChange={Change} name="address_telepon" className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Address
                                            </label>
                                            <input type="text" onChange={Change} name="address_alamat" className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Postal code
                                            </label>
                                            <input type="number" onChange={Change} name="address_kodepos" className="form-control" id=""/>
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
                                <button type="submit" onClick={Save}  className="btn btn-primary">
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

export default withAuth(ShippingAddress)