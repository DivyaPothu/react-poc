import React, { Component } from "react";
import App from "../App"
import venuesix from "../images/venuesix.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'The Siddiqua function hall  - ',
     address:' Mumbai',
     category:'Party Hall',
     venueone:<img src={venuesix} width="300" height="220"/>
  },
};
const Party1venue = () => (
  <div>
         <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Party Halls</h5>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
              <p>{JSON[key].heading}{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Party1venue;