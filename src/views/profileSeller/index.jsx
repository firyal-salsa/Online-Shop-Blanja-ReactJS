import React, { useEffect, useState} from 'react'
import Header from "../../components/headeruser"
import Aside from "../../components/asideseller"
import "./style/style.scoped.css"
import axios from "axios";
import FormData from 'form-data'
import { useDropzone } from "react-dropzone"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"

function ProfileSeller() {
    const [seller, setseller] = useState({
        name: '',
        email: '',
        phone_number: 0,
        store_description: '',
        password:'',
        foto: '',
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
        Form.append("name", seller.name)
        Form.append("email", seller.email)
        Form.append("phone_number", seller.phone_number)
        Form.append("password", seller.password)
        Form.append("store_description", seller.store_description)
        Form.append("foto", imageFile)

        axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API}/seller/manage/${seller.email}`,
            headers: {
                "content-type": "multipart/form-data",
                tokenauth: token,
            },
            data: Form,
        })
            .then((res) => {
                console.log(res.data)
                history.push("/profileseller")
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
        const newdata = { ...seller }
        newdata[el.target.name] = el.target.value
        setseller(newdata)
    }
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
                                <input type="text" name="name" onChange={Change} className="form-control" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Email</label>
                                <input type="email" name="email" onChange={Change} className="form-control" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Phone</label>
                                <input type="number" name="phone_number" onChange={Change} className="form-control" id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Password</label>
                                <input type="password" name="password" onChange={Change} className="form-control"  id="" />
                            </div>
                            <div className="d-flex justify-content-between pb-3">
                                <label className="form-label padding">Description</label>
                                <textarea className="form-control" name="store_description" onChange={Change} id="" cols="24" rows="5"></textarea>
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


export default withAuth(ProfileSeller)