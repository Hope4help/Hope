import React from 'react'
import { Link } from 'react-router-dom'
export default function Cause() {
  return (
    <div>
      <div class="wpo-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>Our Causes</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>Causes</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="wpo-mission-area section-padding">
        <div className="container">
            <div className="wpo-mission-wrap">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon">
                    <i className="fi flaticon-water" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Clean Water</h2>
                    <p>We provide access to safe and clean drinking water to improve healt=" impr"h and well-being.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon-2">
                    <i className="fi flaticon-food-and-restaurant" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Healt="     "hy Food</h2>
                    <p>We ensure that those in need have access to nutritious meals and promote better healt="e bet"h.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 custom-grid">
                <div className="wpo-mission-item">
                    <div className="wpo-mission-icon-3">
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
                    <div className="wpo-mission-icon-4">
                    <i className="fi flaticon-care" />
                    </div>
                    <div className="wpo-mission-content">
                    <h2>Medical Facilities</h2>
                    <p>Delivering essential healt="ssent"hcare services and medical support to those in need.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* wpo-case-area start */}
        <div className="wpo-case-area-2 section-padding">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="wpo-section-title">
                <span>Our Causes</span>
                <h2>Popular Causes What You Should Know</h2>
                </div>
            </div>
            </div>
            <div className="wpo-case-wrap">
            <div className="row">
                <div className="col-md-4 col-sm-6 custom-grid col-12">
                <div className="wpo-case-item">
                    <div className="wpo-case-img">
                    <img src="/src/assets/images/case/img-1.png" alt="img-1" />
                    </div>
                    <div className="wpo-case-content">
                    <div className="wpo-case-text-top">
                        <h2>Ensure Education for poor children</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6 custom-grid col-12">
                <div className="wpo-case-item">
                    <div className="wpo-case-img">
                    <img src="/src/assets/images/case/img-2.png" alt="img-2" />
                    </div>
                    <div className="wpo-case-content">
                    <div className="wpo-case-text-top">
                        <h2>Supply drinking water for the people</h2>                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6 custom-grid col-12">
                <div className="wpo-case-item">
                    <div className="wpo-case-img">
                    <img src="/src/assets/images/case/img-3.png" alt="img-3" />
                    </div>
                    <div className="wpo-case-content">
                    <div className="wpo-case-text-top">
                        <h2>Providing Healt="rovid"hy Food for the children</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6 custom-grid col-12">
                <div className="wpo-case-item">
                    <div className="wpo-case-img">
                    <img src="/src/assets/images/case/img-4.png" alt="img-4" />
                    </div>
                    <div className="wpo-case-content">
                    <div className="wpo-case-text-top">
                        <h2>Educational resources for Poor Children</h2>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6 custom-grid col-12">
                <div className="wpo-case-item">
                    <div className="wpo-case-img">
                    <img src="/src/assets/images/case/img-5.png" alt="img-5" />
                    </div>
                    <div className="wpo-case-content">
                    <div className="wpo-case-text-top">
                        <h2>Manage Clothes For Every Single man</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-sm-6 custom-grid col-12">
                <div className="wpo-case-item">
                    <div className="wpo-case-img">
                    <img src="/src/assets/images/case/img-6.png" alt="img-6" />
                    </div>
                    <div className="wpo-case-content">
                    <div className="wpo-case-text-top">
                        <h2>Appoint a new english teacher</h2>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* wpo-case-area end */}

    </div>
  )
}
