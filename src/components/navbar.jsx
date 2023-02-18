import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
class Navbar extends Component {
  state = {};
  render_calculator = () => {
    if (this.props.is_loggedIn)
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">
            Calculator
          </Link>
        </li>
      );
    return "";
  };
  handleLogOut = () => {
    $.ajax({
      url: "http://127.0.0.1:8000/logout/",
      type: "get",
      success: (res) => {
        if (res.result === "success") {
          window.location.href = "/home";
        }
      },
    });
  };
  render_user = () => {
    if (!this.props.is_loggedIn) {
      return (
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/login">
              login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              register
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">
            {this.props.username}
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={this.handleLogOut} className="nav-link">
            Log out
          </Link>
        </li>
      </ul>
    );
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              yxy's web
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                {this.render_calculator()}
              </ul>
              {this.render_user()}
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
