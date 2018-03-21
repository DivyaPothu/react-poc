import React, { Component } from "react";
import App from "../App"
import venuefour from "../images/venuefour.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'The Cornthisis right club - ',
     address:'Chennai',
     category:'Party Hall',
     venueone:<img src={venuefour} width="300" height="220"/>
  },
};
const Partyvenue = () => (
  <div>
         <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Conference Rooms</h5>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
              <p>{JSON[key].heading}{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Partyvenue;