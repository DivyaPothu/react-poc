import React, { Component } from "react";
import App from "../App"
import "../App.css";
import logo from "../images/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Decoration = () => (
  <div>
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Decoration</h5>
    <h6>Monnaie Architects & Interior Designers in Bangalore - Decorators , Furnishing in Bangalore</h6>
    <h7>Address: 1st Floor, Door No., 7, 80 Feet Main Road, Koramangala 1A Block, 1st Block Koramangala, Koramangala, Bangalore, Bengaluru, Karnataka 560034, India
    </h7>
    <h6>S N Home Decor</h6>
    <h7>Address: 24/1 Astha Lakshmi layout 2nd Main Puttanahalli Main Road, 6phase J P Nagar Bangalore 78, Bengaluru, Karnataka 560078, India</h7>
        </div>

);
export default Decoration;
