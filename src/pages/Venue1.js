import React, { Component } from "react";
import Banglore from "../images/Bangalore.png"
import App from "../App"
import bdayhall from "../images/Birthdayhall.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
 image5:{
     heading:'Juhu club Millenum - ',
     address:'Bangalore',
     category:'Birthday Partyhall',
     venueone:<img src={bdayhall} width="300" height="220"/>
  },
};
const Venue1 = () => (
  <div>
    
    <h5>Welcome to Juhu club Millenum</h5>
    <h6>BirthdayParty halls in Juhu club Millenum </h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

);
export default Venue1;