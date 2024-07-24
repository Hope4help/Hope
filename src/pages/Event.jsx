import React from 'react'
import {Link} from 'react-router-dom'
export default function Event() {
  return (
    <div>
        {/* .wpo-breadcumb-area start */}
        <div className="wpo-breadcumb-area">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="wpo-breadcumb-wrap">
                    <h2>Our Event</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><span>Event</span></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* .wpo-breadcumb-area end */}
        <div className="wpo-event-area-2 section-padding">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="wpo-section-title">
                <span>Our Events</span>
                <h2>Past Events</h2>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="\assets\images\event\IMG-20240724-WA0006.jpg" alt="img-1.jpg" />
                </div>
                <div className="wpo-event-text">
                    <h2>Education for All Children</h2>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="\assets\images\event\IMG-20240724-WA0004.jpg" alt="img-2.jpg" />
                </div>
                <div className="wpo-event-text">
                    <h2>Food for All Everyone</h2>
                </div>
                </div>
            </div>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="\assets\images\event\IMG-20240724-WA0003.jpg" alt="img-3.jpg" />
                </div>
                <div className="wpo-event-text">
                    <h2>Free Treatment </h2>
                </div>
                </div>
            </div>            
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="\assets\images\event\IMG-20240724-WA0005.jpg" alt="img-5.jpg" />
                </div>
                <div className="wpo-event-text">
                    <h2>Food for All Everyone</h2>                
                </div>
                </div>
            </div>      
            </div>
        </div>
        </div>

    </div>
  )
}
