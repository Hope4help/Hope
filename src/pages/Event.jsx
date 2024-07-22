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
                <h2>Upcoming Events</h2>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="/assets/images/event/img-1.jpg" alt="img-1.jpg" />
                    <div className="thumb-text">
                    <span>25</span>
                    <span>NOV</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h2>Education for All Children</h2>
                    <ul>
                    <li><i className="fa fa-clock-o" aria-hidden="true" />8.00 - 5.00</li>
                    <li><i className="fi flaticon-pin" />Newyork City</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#">Learn More...</a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="/assets/images/event/img-2.jpg" alt="img-2.jpg" />
                    <div className="thumb-text-2">
                    <span>25</span>
                    <span>NOV</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h2>Food for All Everyone</h2>
                    <ul>
                    <li><i className="fa fa-clock-o" aria-hidden="true" />8.00 - 5.00</li>
                    <li><i className="fi flaticon-pin" />Newyork City</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#">Learn More...</a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="/assets/images/event/img-3.jpg" alt="img-3.jpg" />
                    <div className="thumb-text-3">
                    <span>25</span>
                    <span>NOV</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h2>Free Treatment </h2>
                    <ul>
                    <li><i className="fa fa-clock-o" aria-hidden="true" />8.00 - 5.00</li>
                    <li><i className="fi flaticon-pin" />Newyork City</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#">Learn More...</a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="/assets/images/event/img-4.jpg" alt="img-4.jpg" />
                    <div className="thumb-text">
                    <span>25</span>
                    <span>NOV</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h2>Education for All Children</h2>
                    <ul>
                    <li><i className="fa fa-clock-o" aria-hidden="true" />8.00 - 5.00</li>
                    <li><i className="fi flaticon-pin" />Newyork City</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#">Learn More...</a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="/assets/images/event/img-5.jpg" alt="img-5.jpg" />
                    <div className="thumb-text-2">
                    <span>25</span>
                    <span>NOV</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h2>Food for All Everyone</h2>
                    <ul>
                    <li><i className="fa fa-clock-o" aria-hidden="true" />8.00 - 5.00</li>
                    <li><i className="fi flaticon-pin" />Newyork City</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#">Learn More...</a>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img src="/assets/images/event/img-6.jpg" alt="img-6.jpg" />
                    <div className="thumb-text-3">
                    <span>25</span>
                    <span>NOV</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h2>Free Treatment </h2>
                    <ul>
                    <li><i className="fa fa-clock-o" aria-hidden="true" />8.00 - 5.00</li>
                    <li><i className="fi flaticon-pin" />Newyork City</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href="#">Learn More...</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}
