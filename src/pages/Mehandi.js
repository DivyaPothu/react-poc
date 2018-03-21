import React, { Component } from "react";
import App from "../App"
import "../App.css";
import logo from "../images/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Mehandi = () => (
  <div>
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Mehandi</h5>
    <h6>Shubh Muhurat Mehndi Arts</h6>
    <h7>Address: 1046, Mariyappa Road, Ashoka Pillar, 1st Block, Jayanagar, Bengaluru, Karnataka 560011, India
    </h7>
    <h6>Pushpa Mehndi Arts</h6>
    <h7>Address: No. 12/1 4th Cross 2nd A Main, Govindaraj Nagar, Vijayanagar, Bengaluru, Karnataka 560040, India</h7>
        </div>

);
export default Mehandi;
