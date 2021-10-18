import "./style/style.scoped.css"
import React, { useEffect, useState} from "react"
import { useDropzone } from "react-dropzone"
import { Link, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"
import Header from "../../components/headeruser"
import Aside from "../../components/asideseller"
import FormData from 'form-data'
import Select from 'react-select'
import axios from "axios";


function Inventory() {
    const [product, setProduct] = useState({
        produk_nama: '',
        produk_toko: '',
        produk_harga: '',
        produk_terjual: '',
        produk_kategori_id: 0,
    })
    const [imageFile, setImageFile] = useState(null)
    const [ImageSource, setImageSource] = useState(null)
    const [categories, setCategories] = useState([])

    const history = useHistory()
    const { token } = useSelector((state) => state.users)
    const Form = new FormData()

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        noClick: true,
    })

    const getCategories = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/category`,
            headers: {
                tokenauth: token,
            },
        })
            .then((res) => {
                const { result } = res.data
                const newdata = []
                result.forEach((val) => {
                    newdata.push({ value: val.kategori_id, label: val.kategori_nama })
                })
                setCategories(newdata)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const Save = () => {
        Form.append("produk_nama", product.produk_nama)
        Form.append("produk_toko", product.produk_toko)
        Form.append("produk_harga", product.produk_harga)
        Form.append("produk_terjual", product.produk_terjual)
        Form.append("produk_kategori_id", product.produk_kategori_id)
        Form.append("produk_foto", imageFile)

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/product`,
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

    useEffect(() => {
        getCategories()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        const newdata = { ...product }
        newdata[el.target.name] = el.target.value
        setProduct(newdata)
    }

    const selectChange = (el) => {
        const newdata = { ...product }
        newdata.categori = el.value
        setProduct(newdata)
    }

        return (
                <body className="home-body">
                    <Header />
                        <div className="d-flex">
                        <div>
                            <Aside />
                        </div>
                            <main className="card me-4 mt-5 p-3 mb-4">
                                <h3>Inventory</h3>
                                <hr />
                                <div >
                                    <label htmlFor="Nama Produk" className="p-3">
                                        <h5>Nama produk</h5>
                                        <input type="text" name="produk_nama" onChange={Change} className="inputinventory-name inputinventory-name-box" id="inputinventory-name" placeholder="Nama produk. contoh : pensil"/>
                                    </label>
                                    <label htmlFor="Nama Toko" className="p-3">
                                        <h5>Toko</h5>
                                        <input type="text" className="inputinventory-name inputinventory-name-box" name="produk_toko" onChange={Change} id="inputinventory-name" placeholder="Nama toko. contoh : Toko Abadi"/>
                                    </label>
                                    <label htmlFor="Harga" className="p-3">
                                        <h5>Harga</h5>
                                        <input type="number" min="0" step="500" className="inputinventory-name inputinventory-name-box" name="produk_harga" onChange={Change} id="inputinventory-name"/>
                                    </label>
                                    <label htmlFor="Stok terjual" className="p-3">
                                        <h5>Stok terjual</h5>
                                        <input type="number" min="0" name="produk_terjual" onChange={Change} className="inputinventory-name inputinventory-name-box" id="inputinventory-name"/>
                                    </label>
                                    <br />
                                    <label htmlFor="" className="p-3">
                                    <h5>Kategori</h5>
                                    <Select
                                    name="produk_kategori_id"
                                    options={categories}
                                    onChange={selectChange}
                                />
                                    </label>
                                    <br />
                                    <label htmlFor="formFile" className="form-label">
                                        <h5>Foto</h5>
                                    </label>
                                    <div {...getRootProps()} className="pics">
                                <input {...getInputProps()} />
                                {ImageSource === null ? null : (
                                    <img src={ImageSource} alt="p2" className="r r-2x img-full" />
                                )}
                                <Link to="#/" className="chooice" onClick={open}>
                                    <span>Select Image</span>
                                </Link>
                            </div>
                                    <br />
                                    <button  onClick={Save} className="btn btn-danger w-25 float-end">
                                        Jual
                                    </button>
                                </div>
                            </main>
                        </div>
                </body>
        )
    }

export default withAuth(Inventory)
