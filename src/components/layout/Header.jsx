import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
     <header id="header" className="wpo-site-header wpo-header-style-3">
  <nav className="navigation navbar navbar-default original sticky-on">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="open-btn">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/"><img src="./assets/images/hope-logo.png" alt="logo" /></Link>
        
      </div>
      <div id="navbar" className="navbar-collapse collapse navbar-right navigation-holder">
        <button className="close-navbar"><i className="ti-close" /></button>
        <ul className="nav navbar-nav">
          <li className="menu-item-has-children">
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/causes">Causes</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li className="menu-item-has-children">
            <Link >Pages</Link>
            <ul className="sub-menu">
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
            </ul>
          </li>
          
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>{/* end of nav-collapse */}
      
    </div>{/* end of container */}
  </nav>
</header>

    </div>
  )
}
