import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import partyhall from "../images/partyhall.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'The Cornthisis right club  - ',
     address:'Chennai',
     category:'Party Hall',
     venueone:<img src={partyhall} width="300" height="220"/>
  },
};
const Venue4 = () => (
  <div>
       <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Welcome to The Cornthisis right club</h5>
    <h6>Party halls in The Cornthisis right club </h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Venue4;