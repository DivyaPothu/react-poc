import React, { Component } from "react";
import App from "../App"
import venuethree from "../images/venuethree.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'Pai comforts-femen - ',
     address:'Pune',
     category:'Wedding Partyhall',
     venueone:<img src={venuethree} width="300" height="220"/>
  },
};
const Wedvenue = () => (
  <div>
     <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Wedding Halls</h5>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
              <p>{JSON[key].heading}{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Wedvenue;