import React, { Component } from "react";
import App from "../App"
import venuefive from "../images/venuefive.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
  image9:{
    headingthree:'Panvandu JP Hotel ',
    venuethree:<img src={venuefive} width="300" height="220"/>
  },
};
const City5 = () => (
  <div>
    <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Welcome to Delhi</h5>
    <h6>Venues in Delhi</h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuethree} 
             <p>{JSON[key].headingthree}</p>
              </div>
                ))}
          </div>

);
export default City5;
