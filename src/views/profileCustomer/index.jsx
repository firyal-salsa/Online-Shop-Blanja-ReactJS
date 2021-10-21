import React, { useEffect, useState} from "react"
import { useDropzone } from "react-dropzone"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"
import Header from "../../components/headeruser"
import Aside from "../../components/asidecustomer"
import "./style/style.scoped.css"
import axios from "axios";
import DatePicker from 'react-date-picker';

function ProfileCustomer() {
    const [customer, setCustomer] = useState({
        name:'',
        email:'',
        phone_number:0,
        gender:'',
        foto:'',
        birthday:0,
    })
    const [imageFile, setImageFile] = useState(null)
    const [ImageSource, setImageSource] = useState(null)
    const [value, onChange] = useState(new Date());

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
        Form.append("birthday", customer.birthday)
        Form.append("foto", imageFile)

        axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API}/customer/manage/${customer.email}`,
            headers: {
                "content-type": "multipart/form-data",
                tokenauth: token,
            },
            data: Form,
        })
            .then((res) => {
                console.log(res.data)
                history.push("/profilecustomer")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            acceptedFiles.map((data) => {
                setImageSource(URL.createObjectURL(data))
                setImageFile(data)
                return true
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles])

    const Change = (el) => {
        const newdata = { ...customer }
        newdata[el.target.name] = el.target.value
        setCustomer(newdata)
    }

    return (
        <div>
            <Header />
            <div className="d-flex">
            <Aside
                data={customer}
            />
                <div className="card p-3 px-5 m-5 mx-4">
                    <h3>My Profile Store</h3>
                     <label>Manage your profile information </label>
                    <hr />

                    <form action="" className="p-1 d-flex">
                        <div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5">Name</label>
                                <input type="text" onChange={Change} className="form-control" name="name" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5" >Email</label>
                                &nbsp;
                                <input type="email" onChange={Change} className="form-control pe-5" name="email" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label pe-5">Phone</label>
                                <input type="number" onChange={Change} className="form-control" name="phone_number" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Gender </label>
                                &nbsp;
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Laki-laki"
                                    id="inlineRadio1"
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                    Laki-laki
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Perempuan"
                                    id="inlineRadio2"
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                    Perempuan
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                 <label className="form-label">Birth </label>
                                &nbsp;
                                <DatePicker format="yyy-MM-dd" name="birthday" onChange={onChange} value={value} className="ps-5 ms-4 form-control" />
                            </div>
                            <br />
                            <button type="button" onClick={Update} className="btn btn-primary rounded-pill margin-save">Save</button>
                        </div>
                        <div className="verticalLine" {...getRootProps()}>
                        <input {...getInputProps()} />
                                {ImageSource === null ? null : (
                            <img className="rounded-circle photo ms-5" name="foto" src={ImageSource} alt="" />
                            )}
                            <br />
                            <button type="button" onClick={open} className="btn btn-outline-secondary rounded-pill ms-5 mt-2">Select Image</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}

export default withAuth(ProfileCustomer)