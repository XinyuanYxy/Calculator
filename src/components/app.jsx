import React, { Component } from "react";
import Navbar from "./navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculate";
import NotFound from "./content/notFound";
import Login from "./content/login";
import Register from "./content/register";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
