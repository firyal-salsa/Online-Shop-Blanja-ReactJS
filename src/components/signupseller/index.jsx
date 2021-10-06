import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style/style.scoped.css";

function SignUpSL() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    store_name: "",
    password: "",
  });
  const history = useHistory();

  function submit(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/seller`, {
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        store_name: data.store_name,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
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
          type="text"
          className="signup-input p-2"
          value={data.phone_number}
          onChange={(e) => handle(e)}
          id="phone_number"
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          className="signup-input p-2"
          value={data.store_name}
          onChange={(e) => handle(e)}
          id="store_name"
          placeholder="Store Name"
          required
        />
        <input
          type="password"
          className="signup-input p-2"
          value={data.password}
          onChange={(e) => handle(e)}
          placeholder="Password"
          id="password"
          required
        />
        <button type="submit" className="btn button-primary text-center mt-5">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default SignUpSL;