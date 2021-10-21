// import axios from "axios";
import React from "react";
// import {useState} from "react";
// import { useHistory } from "react-router-dom";

export default function AddBag() {
    // const [data,setData] = useState({
    //     bag_jumlah: 0,
    //   })
    //   const history = useHistory();
    
      // function submit(e){
      //   e.preventDefault();
      //   axios.post(`${process.env.REACT_APP_API}/customer`, {
      //     name: data.name,
      //     email: data.email,
      //     password: data.password,
      //   })
      //   .then(res=>{
      //     console.log(res.data)
      //     history.push("/bag");
      //   })
      //   .catch(err => console.log(err))
      // }
      // function handle(e){
      //   const newdata={...data}
      //   newdata[e.target.id] = e.target.value
      //   setData(newdata)
      //   console.log(newdata)
      // }

    return (
        <div>
            <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Chat</button>
            <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Add Bag</button>
            <button type="button" className="btn btn-primary py-2 btn-buy-now rounded-pill">Buy Now</button>
        </div>
    )
}
