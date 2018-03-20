import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import partyhall from "../images/partyhall.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
 image5:{
     heading:'The Siddiqua function hall - ',
     address:'Mumbai',
     category:'Party Hall',
     venueone:<img src={partyhall} width="300" height="220"/>
  },
};
const Venue6 = () => (
  <div>
    
    <h5>Welcome to The The Siddiqua function hall</h5>
    <h6>Party halls in The Siddiqua function hall </h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Venue6;