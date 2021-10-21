import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"
import FormData from 'form-data'
import "./style.scoped.css"
import axios from "axios"

function AddBag(props) {
    const [bags, setBag] = useState({
        bag_jumlah: 1,
        bag_produk_id: 1
    })


    const history = useHistory()
    const { token } = useSelector((state) => state.users)
    const Form = new FormData()

    const Save = () => {
        Form.append("bag_produk_id", bags.bag_produk_id)
        Form.append("bag_jumlah", bags.bag_jumlah)
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/bag`,
            headers: {
                "content-type": "multipart/form-data",
                tokenauth: token,
            },
            data: Form,
        })
            .then((res) => {
                history.push("/bag")
            })
            .catch((err) => {
                console.log(bags)
            console.log(err)
            //    history.push("/login")
            })
    }
    
    const Change = (el) => {
        const newdata = { ...bags }
        newdata[el.target.name] = el.target.value
        setBag(newdata)
    }

    return (
        <div>
            <div className="hidden">
                <input type="text" onChange={Change} name="bag_produk_id" value={props.produk_id} id="" disabled />
                <input type="text" onChange={Change} name="bag_jumlah" value="1" id="" disabled />
            </div>
            <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Chat</button>
            <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Add Bag</button>
            <button type="button" onClick={Save} className="btn btn-primary py-2 btn-buy-now rounded-pill">Buy Now</button>
        </div>
    )
}

export default withAuth(AddBag)