import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import annualhall from "../images/annualdinners.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
 image5:{
     heading:'Panvandu JP Hotel - ',
     address:'Delhi',
     category:'annual dinner',
     venueone:<img src={annualhall} width="300" height="220"/>
  },
};
const Venue5 = () => (
  <div>
    
    <h5>Welcome to The Panvandu JP Hotel</h5>
    <h6>Annual dinner at Panvandu JP Hotel </h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Venue5;