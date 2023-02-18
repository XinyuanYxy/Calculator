import React, { Component } from "react";
import Base from "./base";
import $ from "jquery";
class Register extends Component {
  state = {
    error_message: "",
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  };
  getErrorMessageStyle = () => {
    return {
      color: "red",
      marginButtom: "1rem",
      height: this.state.error_message === "" ? 0 : "2rem",
    };
  };

  handleRegister = (e) => {
    e.preventDefault();
    if (this.state.username === "") {
      this.setState({ error_message: "username cannot be empty" });
    } else if (this.state.password === "") {
      this.setState({ error_message: "Password cannot be empty" });
    } else if (this.state.password_confirm === "") {
      this.setState({ error_message: "Password comfirm cannot be empty" });
    } else if (this.state.password !== this.state.password_confirm) {
      this.setState({ error_message: "Passwords are not the same" });
    } else {
      $.ajax({
        url: "http://127.0.0.1:8000/register/",
        type: "get",
        data: {
          username: this.state.username,
          password: this.state.password,
          password_confirm: this.state.password_confirm,
        },
        success: (res) => {
          if (res.result === "success") {
            window.location.href = "/";
          } else {
            this.setState({
              error_message: res.result,
            });
          }
        },
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Base>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-3">
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password_confirm" className="form-label">
                      Password Comfirm
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password_confirm"
                      onChange={(e) => {
                        this.setState({ password_confirm: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Agree with the policy
                    </label>
                  </div>
                  <div style={this.getErrorMessageStyle()}>
                    {this.state.error_message}
                  </div>
                  <button
                    onClick={this.handleRegister}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

export default Register;
