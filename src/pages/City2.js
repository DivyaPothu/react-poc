import React, { Component } from "react";
import App from "../App"
import venuetwo from "../images/venuetwo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
  image6:{
    heading:'MQ palace function hall ',
    venueone:<img src={venuetwo} width="300" height="220"/>
  },
};
const City2 = () => (
  <div>
        <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Welcome to Hyderabad</h5>
    <h6>Venues in Hyderabad</h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].heading}</p>
              </div>
                ))}
          </div>

);
export default City2;
