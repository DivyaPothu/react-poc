import React, { Component } from "react";
import App from "../App"
import "../App.css";
import logo from "../images/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Catering = () => (
  <div>
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Catering</h5>
    <h6>skanda caterers</h6>
    <h7>Address: #7, 1st Main, 1st Cross, Dollar Layout, 4th Phase, JP Nagar, Bengaluru, Karnataka 560078, India
    </h7>
    <h6>Srinidhi Catering Services</h6>
    <h7>Address: Flat no 105, Vibha high field apartments, Chinappa Layout, Mahadevapura, Bengaluru, Karnataka 560016, India</h7>
        </div>

);
export default Catering;
