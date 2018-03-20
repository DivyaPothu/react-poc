import React, { Component } from "react";
import App from "../App"
import venuesix from "../images/venuesix.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
   image10:{
    headingthree:'The Siddiqua function hall  ',
    venuethree:<img src={venuesix} width="300" height="220"/>
  },
};
const City6 = () => (
  <div>
    
    <h5>Welcome to Mumbai</h5>
    <h6>Venues in Mumbai</h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuethree} 
             <p>{JSON[key].headingthree}</p>
              </div>
                ))}
          </div>

);
export default City6;
