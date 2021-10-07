import React from "react";
import "./style/style.scoped.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsUsers from "../../redux/actions/users"
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Component } from "react";


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
        login: false,
        role: "",
        emailplace: "email",
        passplace: "Password",
        users: {
            email: "",
            password: "",
            role: "customer",
        },
    }

    this.refWarUser = React.createRef(null)
    this.refWarPass = React.createRef(null)
}

inputOnFocus = (event) => {
    if (event.target.name === "email") {
        this.setState({ emailplace: "email" })
        this.refWarUser.current.classList.remove("err")
    } else {
        this.setState({ passplace: "Password" })
        this.refWarPass.current.classList.remove("err")
    }
    event.target.classList.add("focus")
}

inputOnBlur = (event) => {
    if (event.target.value === "") {
        event.target.classList.remove("focus")
    }
}

_HandleKeyBoard = (e) => {
    if (e.key === "Enter") {
        this.goLogin()
    }
}

getData = (token) => {
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API}/customer`,
        headers: {
            tokenauth: token,
        },
    })
        .then((res) => {
            this.props.UserSet(res)
            this.props.history.push('/') // pindah halam
        })
        .catch((error) => {
            console.log(error)
        })
}

goLogin = () => {
    axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/authcs`,
        data: this.state.users,
    })
        .then((res) => {
            const { token } = res.data.result[0] // datanya array
            this.props.AuthSet(token)
            this.getData(token)
        })
        .catch((error) => {
            console.log(error)
        })
}

onChangeInput = (event) => {
    event.preventDefault()
    const data = { ...this.state.users }
    data[event.target.name] = event.target.value
    this.setState({ users: data })
}

  render() {
    return (
      <div className="d-flex flex-column d-flex justify-content-center">
        <main className="login text-center">
          <div className="inpform" onKeyPress={this._HandleKeyBoard}>
            <input
              type="email"
              onChange={this.onChangeInput}
              className="logincs-input p-2"
              name="email"
              autoComplete="off"
              onFocus={this.inputOnFocus}
              onBlur={this.inputOnBlur}
            />
            <span
              data-placeholder={this.state.emailplace}
              className="nor"
              ref={this.refWarEmail}
            />
          </div>
          <div className="inpform" onKeyPress={this._HandleKeyBoard}>
            <input
              type="password"
              onChange={this.onChangeInput}
              className="logincs-input p-2"
              name="password"
              autoComplete="off"
              onFocus={this.inputOnFocus}
              onBlur={this.inputOnBlur}
            />
            <span
              data-placeholder={this.state.passplace}
              className="nor"
              ref={this.refWarPass}
            />
          </div>
          <Link to="#" className="link">
            Forgot password?
          </Link>
          <br />
          <Link onClick={this.goLogin} defaultValue="Login" className="btn buttonlogin-primary text-center">
            Login
          </Link>
        </main>
        <footer>
          <br />
          <p class="text-center">
            Don't have an account?
            <Link to="/signup" class="link">
              {" "}
              Register
            </Link>
          </p>
        </footer>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      users: state.users,
  }
}

// method untuk dispacth atau manggil action redux
// untuk menambah props komponen kita
const mapDispatchToProps = (dispacth) => {
  return {
      AuthSet: bindActionCreators(ActionsUsers.AuthSet, dispacth),
      UserSet: bindActionCreators(ActionsUsers.UserSet, dispacth),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login))
