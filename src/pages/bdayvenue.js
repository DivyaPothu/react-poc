import React, { Component } from "react";
import App from "../App"
import venueone from "../images/venueone.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
 image5:{
     heading:'Juhu club Millenum - ',
     address:'Bangalore',
     category:'Birthday Partyhall',
     venueone:<img src={venueone} width="300" height="220"/>
  },
};
const bdayvenue = () => (
  <div>
         <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>BirthdayParty Halls</h5>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
              <p>{JSON[key].heading}{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default bdayvenue;