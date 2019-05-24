import React, { Component } from 'react';
import Logo from '../images/logo.png'
import './Navbar.css'
export default class Navbar extends Component {
render()
{
return(
<div>
<div className="sticky-top">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand mobile colorchange" href="#">Navbar</a>
  <img src={Logo} className="navbar-brand desktopnone" style={{width:"50px",height:"50px"}}/>
  <button className="navbar-toggler customtoggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link colorchange" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ">
        <a className="nav-link colorchange" href="#">Features</a>
      </li>
	   </ul>
	   
	   <ul className="navbar-nav mx-auto desktop">
	 <img src={Logo} style={{width:"50px",height:"50px"}}/>
	   </ul>
	   
	  	  <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link colorchange" href="#">Pricing</a>
      </li>
	 

       <li className="nav-item ">
        <a className="nav-link colorchange" href="#">Anything</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>
)
}

}