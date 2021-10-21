import axios from "axios";
import React from "react";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import "./style/style.scoped.css";


function SignUpCS(){
  const [data,setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const history = useHistory();

  function submit(e){
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/customer`, {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .then(res=>{
      history.push("/login");
    })
    .catch(err => console.log(err))
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return(
    <div className="d-flex flex-column d-flex justify-content-center">
      <form onSubmit={(e) => submit(e)} className="signup text-center">
          <input
            type="text"
            className="signup-input p-2"
            value={data.name}
            onChange={(e) => handle(e)}
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="signup-input p-2"
            value={data.email}
            onChange={(e) => handle(e)}
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="signup-input p-2"
            value={data.password}
            onChange={(e) => handle(e)}
            id="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="btn button-primary text-center mt-5"
          >
            SIGN UP
          </button>
      </form>
    </div>
  );
}


export default SignUpCS;