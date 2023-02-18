import React, { Component } from "react";
import Navbar from "./navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculate";
import NotFound from "./content/notFound";
import Login from "./content/login";
import Register from "./content/register";
import $ from "jquery";
class App extends Component {
  state = {
    is_loggedIn: false,
    username: "",
  };

  componentDidMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/get_status/",
      type: "get",
      success: (res) => {
        if (res.result === "loggedIn") {
          this.setState({ is_loggedIn: true, username: res.username });
        } else {
          this.setState({ is_loggedIn: false });
        }
      },
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          is_loggedIn={this.state.is_loggedIn}
          username={this.state.username}
        />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/calculator"
            element={
              this.state.is_loggedIn ? (
                <Calculator />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              this.state.is_loggedIn ? (
                <Navigate replace to="/calculator" />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/register"
            element={
              this.state.is_loggedIn ? (
                <Navigate replace to="/calculator" />
              ) : (
                <Register />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
