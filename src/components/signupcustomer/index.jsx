import axios from 'axios'
import React from 'react'
import { Component } from 'react'
import "./style/style.scoped.css"

class SignUpCS extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: false,
            type: "customers",
            customers: {
                email: "",
                name: "",
                password: "",
                confirm: "",
            },
        }
    }

    signup = () => {
            axios({
                url: `${process.env.REACT_APP_API}/customer`,
                method: "POST",
                data: this.state.customers,
            })
                .then((res) => {
                    this.props.history.push("/login")
                })
                .catch((error) => {
                    console.log(error)
                })
}


    render() {
        return (
            <div className="d-flex flex-column d-flex justify-content-center">
            <main className="signup text-center">
                <input type="text" className="signup-input p-2" name="name" placeholder="Name" value={this.state.customers.name} required/>
                <input type="email" className="signup-input p-2" name="email" placeholder="Email" value={this.state.customers.email}/>
                <input type="password" class="signup-input p-2" name="password"  placeholder="Password" autoComplete="off" value={this.state.customers.password}/>
                <button type="submit" name="signup" onClick={this.signup} ref={this.refRegisButton} className="btn button-primary text-center mt-5">PRIMARY</button>
            </main>
        </div>
        )
    }
}

export default SignUpCS
