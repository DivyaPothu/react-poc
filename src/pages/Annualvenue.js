import React, { Component } from "react";
import App from "../App"
import venuefive from "../images/venuefive.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'Panvandu JP Hotel - ',
     address:' Delhi',
     category:'Annual Dinner',
     venueone:<img src={venuefive} width="300" height="220"/>
  },
};
const Annualvenue = () => (
  <div>
    
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Annual Dinner</h5>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
              <p>{JSON[key].heading}{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Annualvenue;