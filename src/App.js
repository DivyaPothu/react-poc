import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DocumentTitle from "react-document-title"
import {Component} from "./components/component"
import TextHolder from "./components/textholder"
import { Carousel } from 'react-responsive-carousel';
import Menu from './components/menu'
import venue from "./images/venue6.jpg"
import ban from "./images/Bangalore.png"
import  chen  from "./images/chennai.png"
import mumbai from "./images/mumbai.png"
import pune from "./images/pune.png"
import hyd from "./images/hyderabad.png"
import delhi from "./images/dehli.png"
import venueone from "./images/venueone.png"
import venuetwo from "./images/venuetwo.png"
import venuethree from "./images/venuethree.png"
import venuefour from "./images/venuefour.png"
import venuefive from "./images/venuefive.png"
import venuesix from "./images/venuesix.png"
import leftarrow from "./images/leftarrow.png"
import rightarrow from "./images/rightarrow.png"
import logo from "./images/logo.png"
import photo from "./images/photo.png"
import bridal from "./images/bridal.png"
import catering from "./images/catering.png"
import dj from "./images/dj.png"
import mehandi from "./images/mehandi.png"
import serve from "./images/serve.png"
import anchor from "./images/anchor.png"
import deco from "./images/deco.png"
import contacts from "./images/contacts.png"
import bdayhall from "./images/Birthdayhall.png"
import phall from "./images/partyhall.png"
import djhall from "./images/djhalls.png"
import wedhall from "./images/weddinghall.png"
import annualhall from "./images/annualdinners.png"
import partyhall from "./images/partyhall.png"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Theme from "./less/theme.less"
import "./App.css";
import City1 from "./pages/City1"
import City2 from "./pages/City2"
import City3 from "./pages/City3"
import City4 from "./pages/City4"
import City5 from "./pages/City5"
import City6 from "./pages/City6"
import Venue1 from "./pages/Venue1"
import Venue2 from "./pages/Venue2"
import Venue3 from "./pages/Venue3"
import Venue4 from "./pages/Venue4"
import Venue5 from "./pages/Venue5"
import Venue6 from "./pages/Venue6"

const JSON = {
  image1 : {
    type: 'MQ Palace Function Hall',
portfolioImage: <img src={chen} width="160" height="160"/>
},
image2: {
type: 'Pai Comforts - Flamingo',
portfolioImage:  <img src={pune} width="160" height="160"/>
},
image3: {
type: 'Siddiqua Function Hall',
portfolioImage: <img src={ban} width="160" height="160"/>
},
image4: {
  type: 'Siddiqua Function Hall',
  portfolioImage: <img src={mumbai} width="160" height="160"/>
  },
  image5:{
     heading:'Juhu club Millenum ',
     address:'Kolkata',
     venueone:<Link to="/Venue1" ><img src={venueone} width="300" height="220"/></Link>
  },
  image6:{
    heading:'MQ palace function hall ',
    address:'Banglore',
    venueone:<Link to="/Venue2" ><img src={venuetwo} width="300" height="220"/></Link>
  },
  image7:{
    headingtwo:'Pai comforts-femen ',
    addresstwo:'Hyderabad',
    venuetwo:<Link to="/Venue3" ><img src={venuethree} width="300" height="220"/></Link>
  },
  image8:{
    headingtwo:'The  Cornthisis right club ',
    addresstwo:'Chenaai',
    venuetwo:<Link to="/Venue4" ><img src={venuefour} width="300" height="220"/></Link>
  },
  image9:{
    headingthree:'Panvandu JP Hotel ',
    addressthree:'Mumbai',
    venuethree:<Link to="/Venue5" ><img src={venuefive} width="300" height="220"/></Link>
  },
  image10:{
    headingthree:'The Siddiqua function hall  ',
    addressthree:'Dehli',
    venuethree:<Link to="/Venue6" ><img src={venuesix} width="300" height="220"/></Link>
  },
image11:{
    venuefour:<img src={photo} width="250" height="170"/>
  },
image12:{
    venuefive:<img src={bridal} width="250" height="170"/>
  },
  image13:{
    venuesix:<img src={mehandi} width="250" height="170"/>
  },
  image14:{
    venueseven:<img src={dj} width="250" height="170"/>
  },
  image15:{
    venueeight:<img src={catering} width="250" height="170"/>
  },
  image16:{
    venuenine:<img src={deco} width="250" height="170"/>
  },
  image17:{
    venueten:<img src={serve} width="250" height="170"/>
  },
  image18:{
    venueeleven:<img src={anchor} width="250" height="170"/>
  },
   image19:{
    venuetwelve:<img src={contacts} width="1400" height="170"/>
  },
  image20:{
   
    hallsone:<img src={bdayhall} width="300" height="220"/>,
    details:''
  },
  image21:{
    
    hallsone:<img src={partyhall} width="300" height="220"/>,
    details:''
  },
  image22:{
    
     hallstwo:<img src={djhall} width="300" height="220"/>,
     details2:''
   },
   image23:{
     
     hallstwo:<img src={annualhall} width="300" height="220"/>,
     details2:''
   },
   image24:{
    
     hallsthree:<img src={wedhall} width="300" height="220"/>,
     details3:''
   },
   image25:{
     
     hallsthree:<img src={phall} width="300" height="220"/>,
     details3:''
   },
};
const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      
      <Route path="/about" component={About} />
     <Route exact path="/City1" component={City1} />
      <Route path="/City2" component={City2} />
      <Route path="/City3" component={City3} />
      <Route path="/City4" component={City4} />
      <Route path="/City5" component={City5} />
      <Route path="/City6" component={City6} />
        <Route path="/Venue1" component={Venue1} />
          <Route path="/Venue2" component={Venue2} />
            <Route path="/Venue3" component={Venue3} />
              <Route path="/Venue4" component={Venue4} />
                <Route path="/Venue5" component={Venue5} />
                  <Route path="/Venue6" component={Venue6} />
    </div>
  </Router>
);
const App = () => (
     <div >
      <Menu></Menu>
      <header className="App-header" ><img src={logo} height="80%"/>
      <div align="right" >
     <a href="">Venue</a>
        <a href="">Add Venue</a>
        <a href="">Login</a>
      </div>
      </header>
      <DocumentTitle title="React Ultimate :: About">
        
        <TextHolder>
        <div>
         <img src={venue} width="100%" height="50%"/>
         <div className="cities">
        <center>
         <h3>Discoveries in Cities</h3>
         <Link to="/"><img src={leftarrow} width="30" height="160"/></Link>
         <Link to="/City1"><img src={ban} width="160" height="160"/></Link>
        <Link to="/City2" ><img src={hyd} width="160" height="160"/></Link>
        <Link to="/City3" ><img src={pune} width="160" height="160"/></Link>
        <Link to="/City4"><img src={chen} width="160" height="160"/></Link>
        <Link to="/City5" ><img src={delhi} width="160" height="160"/></Link>
        <Link to="/City6"
        ><img src={mumbai} width="160" height="160"/></Link>
        <Link to="/"><img src={rightarrow} width="30" height="160"/></Link>
        </center>
        </div>
        <div className="venueclass">
        <center><h3 className="venuecolor">VENUES</h3></center>
        <div className="row">
          
          <div className="col-4" >
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].heading}</p><p>{JSON[key].address}</p>
              </div>
                ))}
          </div>
          <div className="col-4">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuetwo} 
             <p>{JSON[key].headingtwo}</p><p>{JSON[key].addresstwo}</p>
              </div>
                ))}
          </div>
          <div className="col-4">
        {Object.keys(JSON).map(key => (
         <div >
             {JSON[key].venuethree} 
             <p>{JSON[key].headingthree}</p><p>{JSON[key].addressthree}</p>
              </div>
                ))}
          </div>
          </div>
          </div>
 <div className="hallclass">
     <div className="row">
       <div className="col-4">
         {Object.keys(JSON).map(key=>(
           <div align="center">
              {JSON[key].hallsone}
              <p>{JSON[key].details}</p>
              </div>
         ))}
           </div>
       <div className="col-4">
       {Object.keys(JSON).map(key=>(
           <div align="center">
              {JSON[key].hallstwo}
              <p>{JSON[key].details2}</p>
              </div>
         ))}
       </div>
       <div className="col-4">
       {Object.keys(JSON).map(key=>(
           <div align="center">
              {JSON[key].hallsthree}
              <p>{JSON[key].details3}</p>
              </div>
         ))}
       </div>
     </div>
     </div>
          
          <div className="popularspace">
        <div className="row">
        </div>
        </div>
<div className="popularclass">
        <center><h3 className="venuecolor">Popular Services</h3></center>
        <div className="row">
<div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuefour} 
              </div>
                ))}
          </div>
<div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuefive} 
              </div>
                ))}
          </div>
          <div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuesix} 
              </div>
                ))}
          </div>
          <div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueseven} 
              </div>
                ))}
          </div>
          <div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueeight} 
              </div>
                ))}
          </div>
          <div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuenine} 
              </div>
                ))}
          </div>
          <div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueten} 
              </div>
                ))}
          </div>
          <div className="col-3">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueeleven} 
              </div>
                ))}
          </div>
        </div>
        </div>
<div className="contacts">
 <div className="row">
{Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuetwelve} 
              </div>
                ))}
</div>
</div>
       </div>
</TextHolder>
 </DocumentTitle>
    </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
export default BasicExample;