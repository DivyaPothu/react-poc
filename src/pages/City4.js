import React, { Component } from "react";
import App from "../App"
import venuefour from "../images/venuefour.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png"
const JSON={
  image8:{
    headingtwo:'The  Cornthisis right club ',
    venuetwo:<img src={venuefour} width="300" height="220"/>
  },
};
const City4 = () => (
  <div>
         <header className="App-header"><img src={logo} height="100%"/></header>
    <h5>Welcome to Chennai</h5>
    <h6>Venues in Chennai</h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuetwo} 
             <p>{JSON[key].headingtwo}</p>
              </div>
                ))}
          </div>

);
export default City4;
