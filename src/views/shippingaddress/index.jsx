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
    const dispatch = useDispatch();
	const { token } = useSelector((state) => state.users)

	const url = `${process.env.REACT_APP_API}/customer/address`;
	const urlGetUser = `${process.env.REACT_APP_API}/customer/address`;
	const [user, setUser] = useState([
		{ address_tempat: '',address_nama: '', address_telepon: 0, address_alamat: '', address_kodepos: 0, 
        address_kota: '', address_email: ''},
	]);

	const onSubmitForm = async (user) => {
		try {
			let Form = new FormData();
			Form.append("address_tempat", user.address_tempat)
            Form.append("address_nama", user.address_nama)
            Form.append("address_telepon", user.address_telepon)
            Form.append("address_alamat", user.address_alamat)
            Form.append("address_kodepos", user.address_kodepos)
            Form.append("address_kota", user.address_kota)
            Form.append("address_email", user.address_email)
			axios
				.put(url, Form, {
					headers: {
						tokenauth: token,
						'Content-type': 'multipart/form-data',
					},
				})
				.then((res) => {
					console.log(res)
				});
		} catch (error) {
			console.log(error)
		}
	};

	const { address, handleSubmit, reset } = useForm();

	useEffect(() => {
		axios
			.get(urlGetUser, {
				headers: {
					tokenauth: token,
				},
			})
			.then((res) => {
				setUser(res.data.result);
				reset(res.data);
			});
	}, [urlGetUser, reset, dispatch, token]);

    
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
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">
                            Alamat
                            </p>
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
                                <form onSubmit={handleSubmit(onSubmitForm)}>
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