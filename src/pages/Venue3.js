import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import wedhall from "../images/weddinghall.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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