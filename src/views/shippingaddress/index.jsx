import React, { useEffect, useState} from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"
import withAuth from "../../utils/withAuth"
import FormData from 'form-data'
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { useForm } from 'react-hook-form';

function ShippingAddress() {
	const { token } = useSelector((state) => state.users)
    const [addrs, setaddress] = useState({
        address_nama:'',
        address_alamat: '',
        address_tempat: '',
        address_kodepos: 0,
        address_kota: '',
        address_email : '',
        address_telepon: 0,

    })
    const [filteredData, setFilteredData] = useState(addrs);
    
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
  })

//   const Save = () => {
//     Form.append("produk_nama", product.produk_nama)
//     Form.append("produk_toko", product.produk_toko)
//     Form.append("produk_harga", product.produk_harga)
//     Form.append("produk_terjual", product.produk_terjual)
//     Form.append("categories", product.categories)
//     Form.append("produk_foto", imageFile)

//     axios({
//         method: "POST",
//         url: `${process.env.REACT_APP_API}/product`,
//         headers: {
//             "content-type": "multipart/form-data",
//             tokenauth: token,
//         },
//         data: Form,
//     })
//         .then((res) => {
//             console.log(res.data)
//             history.push("/")
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

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
                    {filteredData.map((value, index) => {
                return (
                    <div className="card-body layout-address">
                            <h5 className="card-title">{value.address_nama}</h5>
                            <p className="card-text">
                            {value.address_alamat}
                            </p>
                    </div>
                      );
                    })}
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
                                {/* <form onSubmit={handleSubmit(onSubmitForm)}>
                                <div className="modal-body">
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Save address as (ex : home address, office address)
                                            </label>
                                            <input type="text" className="form-control" defaultValue={user[0].address_tempat}
									{...address('address_tempat')} name="address_tempat" placeholder="Rumah"/>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Recipient's name
                                            </label>
                                            <input type="text" defaultValue={user[0].address_nama}
									{...address('address_nama')} name="address_nama" className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Recipient's telephone number
                                            </label>
                                            <input type="number" defaultValue={user[0].address_telephone}
									{...address('address_telephone')} name="address_telepon" className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            Address
                                            </label>
                                            <input type="text" defaultValue={user[0].address_alamat}
									{...address('address_alamat')} name="address_alamat" className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Postal code
                                            </label>
                                            <input type="number" defaultValue={user[0].address_kodepos}
									{...address('address_kodepos')} name="address_kodepos" className="form-control" id=""/>
                                        </div>
                                        </div>
                                        <div className="d-flex">
                                        <div className="mb-3 pe-3">
                                            <label className="form-label">
                                            City or Subdistrict
                                            </label>
                                            <input type="text" name="address_kota" defaultValue={user[0].address_kota}
									{...address('address_kota')} className="form-control" id=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            Email
                                            </label>
                                            <input type="email" name="address_email" defaultValue={user[0].address_email}
									{...address('address_email')} className="form-control" id=""/>
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
                                <button type="submit"  className="btn btn-primary">
                                    Save changes
                                </button>
                                </div>
                                </form> */}
                            </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default withAuth(ShippingAddress)