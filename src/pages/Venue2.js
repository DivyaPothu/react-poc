import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import dj from "../images/dj.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
 image5:{
     heading:'MQ palace function hall - ',
     address:'Hyderabad',
     category:'DJ Hall',
     venueone:<img src={dj} width="300" height="220"/>
  },
};
const Venue2 = () => (
  <div>
    
    <h5>Welcome to MQ palace function hall</h5>
    <h6>DJ halls in MQ palace function hall </h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Venue2;