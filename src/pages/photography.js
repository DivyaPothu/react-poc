import React, { Component } from "react";
import App from "../App"
import "../App.css";
import logo from "../images/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Photography = () => (
  <div>
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Photographer</h5>
    <h6>MKB Candid Photography</h6>
    <h7>
    Address: Shop No.5, Gokul Central 2,, No. 4/1-1, MSR Engineering College Road,, MSR Nagar, Mathikere,, Bengaluru, Karnataka 560054, India
    </h7>
    <h6>Neeta Shankar Photography</h6>
    <h7>Address: Purva Riviera Shopping Complex, #20A, Marathahalli Road, Spice Garden Layout, Marathahalli, Bengaluru, Karnataka 560037, India</h7>
        </div>

);
export default Photography;
