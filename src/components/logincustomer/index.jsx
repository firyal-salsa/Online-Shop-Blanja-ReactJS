import React from "react";
import "./style/style.scoped.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCustomer from "../../redux/actions/customers";
import axios from "axios";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      emailplace: "email",
      passplace: "password",
      customers: {
        email: "",
        password: "",
      },
    };

    this.refWarEmail = React.createRef(null);
    this.refWarPass = React.createRef(null);
  }

  inputOnFocus = (event) => {
    if (event.target.email === "email") {
      this.setState({ emailplace: "email" });
      this.refWarEmail.current.classList.remove("err");
    } else {
      this.setState({ passplace: "password" });
      this.refWarPass.current.classList.remove("err");
    }
    event.target.classList.add("focus");
  };

  inputOnBlur = (event) => {
    if (event.target.value === "") {
      event.target.classList.remove("focus");
    }
  };

  _HandleKeyBoard = (e) => {
    if (e.key === "Enter") {
      this.goLogin();
    }
  };

  getData = (token) => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/customer/${this.state.customers.email}`,
      headers: {
        tokenauth: token,
      },
    })
      .then((res) => {
        this.props.EmailSet(res.data.result[0]);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  goLogin = () => {
    axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/authcs`,
        data: this.state.customers,
    })
        .then((res) => {
            const { token } = res.data.result[0]
            this.props.AuthSet(token)
            this.getData(token)
        })
        .catch((error) => {
            const { msg } = error.response.data.result[0]
            if (msg === "Password Salah") {
                this.refWarPass.current.classList.add("err")
                this.setState({ passplace: "Password Salah" })
            } else if (msg === "username tidak terdaftar") {
                this.refWarEmail.current.classList.add("err")
                this.setState({ emailplace: "Email belum terdaftar" })
            }
        })
}

  onChangeInput = (event) => {
    event.preventDefault();
    const data = { ...this.state.customers };
    data[event.target.email] = event.target.value;
    this.setState({ customers: data });
  };

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
            PRIMARY
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
        customers: state.customers,
    }
}

// method untuk dispacth atau manggil action redux
const mapDispatchToProps = (dispacth) => {
    return {
        AuthSet: bindActionCreators(ActionCustomer.AuthSet, dispacth),
        CustomerSet: bindActionCreators(ActionCustomer.customerSet, dispacth),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
