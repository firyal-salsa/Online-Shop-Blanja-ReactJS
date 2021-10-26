import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"
import "./style.scoped.css"
import axios from "axios"

function AddBag(props) {
    const [bags, setBag] = useState({
        bag_jumlah: 1,
        bag_produk_id: 1
    })


    const history = useHistory()
    const { token } = useSelector((state) => state.users)

    const Save = () => {
        const body = {
            products : bags.bag_produk_id,
            bag_jumlah : bags.bag_jumlah
        }

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/bag`,
            headers: {
                "content-type": "application/json",
                tokenauth: token,
            },
            data: body,
        })
            .then((res) => {
                history.push("/bag")
            })
            .catch((err) => {
                console.log(bags)
            console.log(err)
            history.push("/login")
            })
    }
    
    useEffect(() => {
        setBag({
            ...bags,
            bag_produk_id: props.produk_id

        })
    },[props.produk_id])

    const Change = (e) => {
        const newdata = { ...bags }
        newdata[e.target.name] = e.target.value
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