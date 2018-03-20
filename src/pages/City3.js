import React, { Component } from "react";
import App from "../App"
import venuethree from "../images/venuethree.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const JSON={
   image7:{
    headingtwo:'Pai comforts-femen ',
    venuetwo:<img src={venuethree} width="300" height="220"/>
  },
};
const City3 = () => (
  <div>
    
    <h5>Welcome to Pune</h5>
    <h6>Venues in Pune</h6>
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuetwo} 
             <p>{JSON[key].headingtwo}</p>
              </div>
                ))}
          </div>

);
export default City3;
