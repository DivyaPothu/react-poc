import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import wedhall from "../images/weddinghall.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'Pai comforts-femen - ',
     address:'Pune',
     category:'Wedding Hall',
     venueone:<img src={wedhall} width="300" height="220"/>
  },
};
const Venue3 = () => (
  <div>
         <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Welcome to Pai comforts-femen</h5>
    <h6>Wedding halls in Pai comforts-femen </h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Venue3;