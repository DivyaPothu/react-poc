import React, { Component } from "react";
import App from "../App"
import "../App.css";
import logo from "../images/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Serving = () => (
  <div>
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Serving Team</h5>
    <h6>The Fisherman's Wharf</h6>
    <h7>Address: 1st Floor, Door No., 7, 80 Feet Main Road, Koramangala 1A Block, 1st Block Koramangala, Koramangala, Bangalore, Bengaluru, Karnataka 560034, India
    </h7>
    <h6>AB's - Absolute Barbecues</h6>
    <h7>90/4, 3rd Floor, Outer Ring Road, Munnekollaly Village, Marathalli,Bangalore</h7>
        </div>

);
export default Serving;
