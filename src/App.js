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
import bdayvenue from "./pages/bdayvenue"
import Djvenue from "./pages/Djvenue"
import Wedvenue from "./pages/Wedvenue"
import Partyvenue from "./pages/Partyvenue"
import Annualvenue from "./pages/Annualvenue"
import Party1venue from "./pages/Party1venue"
import photography from "./pages/photography"
import Bridal from "./pages/Bridal"
import Mehandi from "./pages/Mehandi"
import Dj from "./pages/Dj"
import Catering from "./pages/Catering"
import Decoration from "./pages/Decoration"
import Serving from "./pages/Serving"
import Anchor from "./pages/Anchor"
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
     heading:'Juhu club Millenum - ',
     address:'Banglore',
     category:'Birthday Partyhall',
     venueone:<Link to="/Juhu" target="_blank"><img src={venueone} width="300" height="220"/></Link>
  },
  image6:{
    heading:'MQ palace function hall - ',
    address:'Hyderabad',
     category:'DJ Hall',
    venueone:<Link to="/MQ" target="_blank"><img src={venuetwo} width="300" height="220"/></Link>
  },
  image7:{
    headingtwo:'Pai comforts-femen - ',
    addresstwo:'Pune',
    categorytwo:'Wedding Hall',
    venuetwo:<Link to="/Pai" target="_blank"><img src={venuethree} width="300" height="220"/></Link>
  },
  image8:{
    headingtwo:'The  Cornthisis right club - ',
    addresstwo:'Chenaai',
    categorytwo:'Party Hall',
    venuetwo:<Link to="/Cornthisis" target="_blank"><img src={venuefour} width="300" height="220"/></Link>
  },
  image9:{
    headingthree:'Panvandu JP Hotel - ',
    addressthree:'Delhi',
    categorythree:'Annual dinner',
    venuethree:<Link to="/Panvandu" target="_blank"><img src={venuefive} width="300" height="220"/></Link>
  },
  image10:{
    headingthree:'The Siddiqua function hall - ',
    addressthree:'Mumbai',
    categorythree:'Party Hall',
    venuethree:<Link to="/Siddiqua" target="_blank"><img src={venuesix} width="300" height="220"/></Link>
  },
image11:{
    venuefour:<Link to="/photography" target="_blank"><img src={photo} width="250" height="170"/></Link>
  },
image12:{
    venuefive:<Link to="/Bridal" target="_blank"><img src={bridal} width="250" height="170"/></Link>
  },
  image13:{
    venuesix:<Link to="/Mehandi" target="_blank"><img src={mehandi} width="250" height="170"/></Link>
  },
  image14:{
    venueseven:<Link to="/Djj" target="_blank"><img src={dj} width="250" height="170"/></Link>
  },
  image15:{
    venueeight:<Link to="/Catering" target="_blank"><img src={catering} width="250" height="170"/></Link>
  },
  image16:{
    venuenine:<Link to="/Decoration" target="_blank"><img src={deco} width="250" height="170"/></Link>
  },
  image17:{
    venueten:<Link to="/Serving" target="_blank"><img src={serve} width="250" height="170"/></Link>
  },
  image18:{
    venueeleven:<Link to="/Anchor" target="_blank"><img src={anchor} width="250" height="170"/></Link>
  },
   image19:{
    venuetwelve:<img src={contacts} width="1400" height="170"/>
  },
  image20:{
   
    hallsone:<Link to="/bday" target="_blank"><img src={bdayhall} width="300" height="220"/></Link>,
    details:''
  },
  image21:{
    
    hallsone:<Link to="/Party" target="_blank"><img src={partyhall} width="300" height="220"/></Link>,
    details:''
  },
  image22:{
    
     hallstwo:<Link to="/Dj" target="_blank"><img src={djhall} width="300" height="220"/></Link>,
     details2:''
   },
   image23:{
     
     hallstwo:<Link to="/Annual" target="_blank"><img src={annualhall} width="300" height="220"/></Link>,
     details2:''
   },
   image24:{
    
     hallsthree:<Link to="/Wedding" target="_blank"><img src={wedhall} width="300" height="220"/></Link>,
     details3:''
   },
   image25:{
     
     hallsthree:<Link to="/Partyy" target="_blank"><img src={phall} width="300" height="220"/></Link>,
     details3:''
   },
};
const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      
      <Route path="/about" component={About} />
     <Route exact path="/Banglore" component={City1} />
      <Route path="/Hyderabad" component={City2} />
      <Route path="/Pune" component={City3} />
      <Route path="/Chennai" component={City4} />
      <Route path="/Dehli" component={City5} />
      <Route path="/Mumbai" component={City6} />
        <Route path="/Juhu" component={Venue1} />
          <Route path="/MQ" component={Venue2} />
            <Route path="/Pai" component={Venue3} />
              <Route path="/Cornthisis" component={Venue4} />
                <Route path="/Panvandu" component={Venue5} />
                  <Route path="/Siddiqua" component={Venue6} />
                   <Route path="/bday" component={bdayvenue} />
                   <Route path="/Dj" component={Djvenue} />
                     <Route path="/Wedding" component={Wedvenue} />
                        <Route path="/Party" component={Partyvenue} />
                             <Route path="/Annual" component={Annualvenue} />
                               <Route path="/Partyy" component={Partyvenue} />
                                 <Route path="/photography" component={photography} />
                                 <Route path="/Bridal" component={Bridal} />
                                 <Route path="/Mehandi" component={Mehandi} />
                                  <Route path="/Djj" component={Dj} />
                                  <Route path="/Catering" component={Catering} />
                                  <Route path="/Decoration" component={Decoration} />
                                   <Route path="/Serving" component={Serving} />
                                             <Route path="/Anchor" component={Anchor} />
    </div>
  </Router>
);
const App = () => (
     <div >
      <Menu></Menu>
      <header className="App-header" ><img src={logo} height="100%"/>
      <div align="right" >
     <a href="">Venue</a>
        <a href="">Add Venue</a>
        <a href="">Login</a>
      </div>
      </header>
      <DocumentTitle title="React Ultimate :: About">
        
        <TextHolder>
        <div>
         <img src={venue} width="100%" height="380"/>
         <div className="cities">
        <center>
         <h3>Discovery In Cities</h3>
         <Link to="/"><img src={leftarrow} width="30" height="160"/></Link>
         <Link to="/Banglore" target="_blank"><img src={ban} width="160" height="160"/></Link>
        <Link to="/Hyderabad" target="_blank"><img src={hyd} width="160" height="160"/></Link>
        <Link to="/Pune" target="_blank"><img src={pune} width="160" height="160"/></Link>
        <Link to="/Chennai" target="_blank"><img src={chen} width="160" height="160"/></Link>
        <Link to="/Dehli" target="_blank"><img src={delhi} width="160" height="160"/></Link>
        <Link to="/Mumbai" target="_blank"><img src={mumbai} width="160" height="160"/></Link>
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
             <p>{JSON[key].heading}{JSON[key].address}</p><p>{JSON[key].category}</p>
              </div>
                ))}
          </div>
          <div className="col-4">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuetwo} 
             <p>{JSON[key].headingtwo}{JSON[key].addresstwo}</p><p>{JSON[key].categorytwo}</p>
              </div>
                ))}
          </div>
          <div className="col-4">
        {Object.keys(JSON).map(key => (
         <div >
             {JSON[key].venuethree} 
             <p>{JSON[key].headingthree}{JSON[key].addressthree}</p><p>{JSON[key].categorythree}</p>
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