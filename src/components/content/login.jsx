import React, { Component } from "react";
import Base from "./base";
import $ from "jquery";
class Login extends Component {
  state = {
    error_message: "",
    username: "",
    password: "",
  };
  getErrorMessageStyle = () => {
    return {
      color: "red",
      marginButtom: "1rem",
      height: this.state.error_message === "" ? 0 : "2rem",
    };
  };
  handleLogin = (e) => {
    e.preventDefault();
    if (this.state.username === "") {
      this.setState({ error_message: "username cannot be empty" });
    } else if (this.state.password === "") {
      this.setState({ error_message: "Password cannot be empty" });
    } else {
      $.ajax({
        url: "http://127.0.0.1:8000/login/",
        type: "get",
        data: {
          username: this.state.username,
          password: this.state.password,
        },
        success: (res) => {
          if (res.result === "success") {
            window.location.href = "/";
          } else {
            this.setState({
              error_message: "wrong username or password",
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
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
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
                    onClick={this.handleLogin}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
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

export default Login;
