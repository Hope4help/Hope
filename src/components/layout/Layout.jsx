import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div className="page-wrapper">
  <div className="preloader">
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  </div>

      <Header/>
<Outlet/>
      <Footer/>
      </div>
    </div>
  )
}
