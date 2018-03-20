import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import venueone from "../images/venueone.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
  image5:{
     heading:'Juhu club Millenum ',
     venueone:<img src={venueone} width="300" height="220"/>
  },
};
const City1 = () => (
  <div>
    
    <h5>Welcome to Bangalore</h5>
    <h6>Venues in Bangalore</h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].heading}</p>
              </div>
                ))}
          </div>

);
export default City1;
