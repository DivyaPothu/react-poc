import React, { Component } from "react";
import App from "../App"
import venuetwo from "../images/venuetwo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'MQ palace function hall  - ',
     address:'Hyderabad',
     category:'DJ Hall',
     venueone:<img src={venuetwo} width="300" height="220"/>
  },
};
const Djvenue = () => (
  <div>
         <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>DJ Halls</h5>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
              <p>{JSON[key].heading}{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Djvenue;