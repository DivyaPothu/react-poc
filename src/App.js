import React from "react"
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
     venueone:<img src={venueone} width="300" height="220"/>
  },
  image6:{
    heading:'MQ palace function hall ',
    address:'Banglore',
    venueone:<img src={venuetwo} width="300" height="220"/>
  },
  image7:{
    headingtwo:'Pai comforts-femen ',
    addresstwo:'Hyderabad',
    venuetwo:<img src={venuethree} width="300" height="220"/>
  },
  image8:{
    headingtwo:'The  Cornthisis right club ',
    addresstwo:'Chenaai',
    venuetwo:<img src={venuefour} width="300" height="220"/>
  },
  image9:{
    headingthree:'Panvandu JP Hotel ',
    addressthree:'Mumbai',
    venuethree:<img src={venuefive} width="300" height="220"/>
  },
  image10:{
    headingthree:'The Siddiqua function hall  ',
    addressthree:'Dehli',
    venuethree:<img src={venuesix} width="300" height="220"/>
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


export default class App extends Component {
  render() {
    return (
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
         <a href=""><img src={leftarrow} width="30" height="160"/></a>
        <a href=""><img src={ban} width="160" height="160"/></a>
        <a href=""><img src={hyd} width="160" height="160"/></a>
        <a href=""><img src={delhi} width="160" height="160"/></a>
        <a href=""><img src={chen} width="160" height="160"/></a>
        <a href=""><img src={mumbai} width="160" height="160"/></a>
        <a href=""><img src={pune} width="160" height="160"/></a>
        <a href=""><img src={rightarrow} width="30" height="160"/></a>
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
    )
  }
}
<link href="carousal.css" rel="stylesheet"/>