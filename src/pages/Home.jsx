import React from 'react'
import Demo from './Demo'
import Counter from './Counter'
import { Link } from 'react-router-dom'
import Kamal from "./Kamal"

export default function Home() {
  return (
    <div>
       <Kamal />
        <section className="hero hero-style-2">
        <div className="hero-slider">
          <div className="slide">
            <div className="container">
              <div className="row">
                <div className="col col-md-6 slide-caption">
                  <div className="slide-title">
                    <h2>Let’s be Kind for <span>Children</span></h2>
                  </div>
                  <div className="slide-subtitle">
                    <p>High Quality Charity Theme in Envato Market.</p>
                    <p>You Can Satisfied Yourself By Helping.</p>
                  </div>
                  <div className="btns">
                    <Link to="/donate" className="theme-btn">Donate Now</Link>
                    <Link to="/about" className="theme-btn-s2">Know More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-vec">
            </div>
          </div>
        </div>
        </section>
        <div className="wpo-mission-area-2 section-padding">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="wpo-section-title">
                <span>What We Do?</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
                </div>
            </div>
            </div>
            <div className="wpo-mission-wrap">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon">
                    <img src="/assets/images/mission/img-8.png" alt="img2" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Clean Water</h2>
                    <p>We provide access to safe and clean drinking water to improve health and well-being.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon">
                    <img src="/assets/images/mission/img-5.png" alt="hbnj" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Healthy Food</h2>
                    <p>We ensure that those in need have access to nutritious meals and promote better health.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon">
                    <img src="/assets/images/mission/img-6.png" alt="hbnj" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Pure Education</h2>
                    <p> We offer educational resources, empowering individuals with knowledge.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon">
                    <img src="/assets/images/mission/img-7.png" alt="hbnj" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Medical Facilities</h2>
                    <p>Delivering essential healthcare services and medical support to those in need.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="wpo-about-area-2 section-padding">
         <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 colsm-12">
            <div className="wpo-about-img-2">
              <img src="/assets/images/about2.png" alt="hbnj" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 colsm-12">
            <div className="wpo-about-text-2">
              <div className="wpo-section-title">
                <span>What We Do?</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
                <p>We are driven by a deep commitment to uplift those who need it most. Our mission is clear: to extend a helping hand to the helpless and create a world where compassion and support are cornerstones of society. We believe in taking concrete steps to improve lives, providing essential resources such as food, shelter, healthcare, and education to individuals and families facing adversity.</p>
                <p>Through our comprehensive programs, we aim not only to meet immediate needs but also to restore dignity and inspire hope for a brighter future.</p>
              <div className="btns">
                <Link to="/donate" className="theme-btn">Join us</Link>
              </div>
            </div>
          </div>
        </div>
       </div>
        </div> 
        <Demo/>
        {/* wpo-case-area end */}
        {/* .wpo-counter-area start */}
        {/* <div className="wpo-counter-style-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wpo-counter-grids">
                  <div className="grid">
                    <div>
                      <h2><span className="odometer odometer-auto-theme" data-count={6200}>00</span>+</h2>
                    </div>
                    <p>Donation</p>
                  </div>
                  <div className="grid">
                    <div>
                      <h2><span className="odometer odometer-auto-theme" data-count={80}>00</span>+</h2>
                    </div>
                    <p>Fund Raised</p>
                  </div>
                  <div className="grid">
                    <div>
                      <h2><span className="odometer odometer-auto-theme"  data-count={245}>00</span>+</h2>
                    </div>
                    <p>Volunteers</p>
                  </div>
                  <div className="grid">
                    <div>
                      <h2><span className="odometer odometer-auto-theme" data-count={605}>00</span>+</h2>
                    </div>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Counter/>
        {/* .wpo-counter-area end */}
     
        {/* world area start */}
        <div className="wpo-world-area-2" style={{ paddingBottom: "50px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-world-section">
                  <h2>Lets Change The World With Humanity</h2> 
                  <Link to="/volunteer"><img src="/assets/images/team/1.png" alt="vol" />Become A Volunteer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* world area end */}
        


    </div>
  )
}
