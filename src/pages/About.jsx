import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
        {/* .wpo-breadcumb-area start */}
        <div className="wpo-breadcumb-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-breadcumb-wrap">
                  <h2>About Us</h2>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>About</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .wpo-breadcumb-area end */}
        {/* wpo-about-video-area start */}
        <div className="wpo-about-video-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="wpo-about-video-item">
                  <div className="wpo-about-video-img">
                    <img src="/src/assets/images/about-vedio.jpg" alt="abt-vid" />
                    <div className="entry-media video-holder">
                      <a href="/src/assets/videos/Video Concept for NGO to Promote Donations.mp4" target='_blank' className="video-btn" data-type="iframe">
                        <i className />
                        </a>
                    </div>
                  </div>
                  <h2> Discover how your kindness can change lives of <span> Poor people and support children</span></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* wpo-about-video-area end */}
        {/* wpo-mission-area start */}
        <div className="wpo-mission-area section-padding">
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
                    <div className="wpo-mission-icon-5">
                      <i className="fi flaticon-water" />
                    </div>
                    <div className="wpo-mission-content">
                      <h2>Clean Water</h2>
                      <p>We provide access to safe and clean drinking water to improve health and well-being.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                  <div className="wpo-mission-item">
                    <div className="wpo-mission-icon-6">
                      <i className="fi flaticon-food-and-restaurant" />
                    </div>
                    <div className="wpo-mission-content">
                      <h2>Healthy Food</h2>
                      <p>We ensure that those in need have access to nutritious meals and promote better health.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                  <div className="wpo-mission-item">
                    <div className="wpo-mission-icon-7">
                      <i className="fi flaticon-book" />
                    </div>
                    <div className="wpo-mission-content">
                      <h2>Pure Education</h2>
                      <p> We offer educational resources, empowering individuals with knowledge.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                  <div className="wpo-mission-item">
                    <div className="wpo-mission-icon-8">
                      <i className="fi flaticon-care" />
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
        {/* wpo-mission-area end */}
        {/* wpo-about-area start */}
        <div className="wpo-about-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 colsm-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <span>What We Do?</span>
                    <h2>We Are In A Mission To Help The Helpless</h2>
                  </div>
                  <p>We are driven by a deep commitment to uplift those who need it most. Our mission is clear: to extend a helping hand to the helpless and create a world where compassion and support are cornerstones of society.</p>
                  <p>We believe in taking concrete steps to improve lives, providing essential resources such as food, shelter, healthcare, and education to individuals and families facing adversity.</p>
                  <p>Through our comprehensive programs, we aim not only to meet immediate needs but also to restore dignity and inspire hope for a brighter future.</p>
                  <div className="btns">
                    <a href="#" className="theme-btn">JOIN US</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 colsm-12">
                <div className="wpo-about-img">
                  <img src="/src/assets/images/about.png" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* wpo-about-area end */}
        {/* wpo-team-area start */}
        <div className="wpo-team-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-section-title">
                  <span>Meet Our Team</span>
                  <h2>Our Expert Volunteer</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img">
                    <img src="/src/assets/images/team/team-1.jpg" alt="team-1" />
                  </div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2>Smith Tomkin</h2>
                      <span>CEO &amp; Founder</span>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img">
                    <img src="/src/assets/images/team/team-2.jpg" alt="team-2" />
                  </div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2>Robert Honey</h2>
                      <span>Volunteer</span>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img">
                    <img src="/src/assets/images/team/team-3.jpg" alt="team-3" />
                  </div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2>Juliya Jossoy</h2>
                      <span>Volunteer</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* wpo-team-area end */}

    </div>
  )
}
