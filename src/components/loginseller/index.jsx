import "./style/style.scoped.css"
import React from "react"
//import { useEffect, useState, useRef } from "react"
// import { useDropzone } from "react-dropzone"
import { Link } from "react-router-dom"
// import { useHistory } from "react-router-dom"
// import { useSelector } from "react-redux"
// import Select from "react-select"
// import axios from "axios"
// import FormData from "form-data"


function Login() {
    // const [imageFile, setImageFile] = useState(null)
    // const [ImageSource, setImageSource] = useState(null)
    // const [catgegori, setCatgegori] = useState([])
    // const [product, setProduct] = useState({
    //     name: "",
    //     price: "",
    //     categori: 0,
    // })

    // const history = useHistory()
    // const labelRef = useRef(null)
    // const { token } = useSelector((state) => state.users)
    // const FromDatas = new FormData()

    // const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    //     accept: "image/jpeg, image/png",
    //     noKeyboard: true,
    //     noClick: true,
    // })

    // const getCategori = () => {
    //     axios({
    //         method: "GET",
    //         url: `${process.env.REACT_APP_API}/categori`,
    //         headers: {
    //             tokenauth: token,
    //         },
    //     })
    //         .then((res) => {
    //             const { result } = res.data
    //             const newdata = []
    //             result.forEach((val) => {
    //                 newdata.push({ value: val.id, label: val.name_categori })
    //             })
    //             setCatgegori(newdata)
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })
    // }

    // const Save = () => {
    //     FromDatas.append("name", product.name)
    //     FromDatas.append("price", product.price)
    //     FromDatas.append("categori", product.categori)
    //     FromDatas.append("image", imageFile)

    //     axios({
    //         method: "POST",
    //         url: `${process.env.REACT_APP_API}/product`,
    //         headers: {
    //             "content-type": "multipart/form-data",
    //             tokenauth: token,
    //         },
    //         data: FromDatas,
    //     })
    //         .then((res) => {
    //             console.log(res.data)
    //             history.push("/")
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })
    // }

    // useEffect(() => {
    //     getCategori()

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // useEffect(() => {
    //     if (acceptedFiles.length > 0) {
    //         acceptedFiles.map((data) => {
    //             setImageSource(URL.createObjectURL(data))
    //             setImageFile(data)
    //             return true
    //         })
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [acceptedFiles])

    // const Change = (el) => {
    //     const newdata = { ...product }
    //     newdata[el.target.name] = el.target.value
    //     setProduct(newdata)
    // }

    // const customStyles = {
    //     control: (styles, state) => ({
    //         // none of react-select's styles are passed to <Control />
    //         ...styles,
    //         borderColor: state.isFocused ? "#545ca6" : "none",
    //         "&:focus": {
    //             borderColor: "#545ca6",
    //         },
    //     }),
    // }

    // const selectChange = (el) => {
    //     const newdata = { ...product }
    //     newdata.categori = el.value
    //     setProduct(newdata)
    // }

    // const onfocus = (el) => {
    //     el.target.classList.add("onfocus")
    //     labelRef.current.classList.add("focus")
    //     // el.target.nextSibling.classList.add("focus")
    // }

    // const notfocus = (el) => {
    //     if (el.target.value === "") {
    //         el.target.classList.remove("onfocus")
    //         labelRef.current.classList.remove("focus")
    //         // el.target.nextSibling.classList.remove("focus")
    //     }
    // }
    
    return (
        <div className="d-flex flex-column d-flex justify-content-center">
            <main className="loginsl text-center">
                <input type="email" className="loginsl-input p-2" name="" placeholder="Email" />
                <input type="password" class="loginsl-input p-2" name=""  placeholder="Password" />
                <br />
                <Link to='#'className="link text-center">Forgot password?</Link>
                <br />
                <Link to="/home"  className="btn buttonlogin-primary text-center">PRIMARY</Link>
            </main>
            <footer>
                <br />
                <p class="text-center">Don't have an account?<Link to="/signup" class="link"> Register</Link></p>
            </footer>
        </div>
       
    )
}


export default Login