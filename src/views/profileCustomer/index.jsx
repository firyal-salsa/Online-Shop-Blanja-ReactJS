import React, { useEffect, useState} from "react"
import { useDropzone } from "react-dropzone"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileCustomer() {
    const [customer, setCustomer] = useState({
        name:'',
        email:'',
        phone_number:'',
        gender:'',
        foto:'',
        birthday:'',
    })
    const [imageFile, setImageFile] = useState(null)
    const [ImageSource, setImageSource] = useState(null)

    const history = useHistory()
    const { token } = useSelector((state) => state.users)
    const Form = new FormData()

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        noClick: true,
    })

    const Update = () => {
        Form.append("name", customer.name)
        Form.append("email", customer.email)
        Form.append("phone_number", customer.phone_number)
        Form.append("gender", customer.gender)
        Form.append("foto", imageFile)
        Form.append("birthday", customer.birthday)

        axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API}/customer`,
            headers: {
                "content-type": "multipart/form-data",
                tokenauth: token,
            },
            data: Form,
        })
            .then((res) => {
                console.log(res.data)
                history.push("/")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    const Change = (el) => {
        const newdata = { ...customer }
        newdata[el.target.name] = el.target.value
        setCustomer(newdata)
    }

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
                                <input type="text" onChange={Change} className="form-control" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5" >Email</label>
                                &nbsp;
                                <input type="email" onChange={Change} className="form-control pe-5" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5">Phone</label>
                                <input type="number" onChange={Change} className="form-control" name="" id="" />
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
                            <button type="button" onClick={Update} className="btn btn-primary rounded-pill margin-save">Save</button>
                        </div>
                        <div className="verticalLine" {...getRootProps()}>
                        <input {...getInputProps()} />
                                {ImageSource === null ? null : (
                            <img className="rounded-circle photo ms-5"  src={ImageSource} alt="" />
                            )}
                            <br />
                            <button type="file" onClick={open} className="btn btn-outline-secondary rounded-pill ms-5 mt-2">Select Image</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}

export default withAuth(ProfileCustomer)