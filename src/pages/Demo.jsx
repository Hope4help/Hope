import React from 'react'
import { Link } from 'react-router-dom'

export default function Demo() {
  return (
    <div>
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
              <img src="/public/assets/images/case/img-1.png" 
              alt="img-1.png" />
            </div>
            <div className="wpo-case-content">
              <div className="wpo-case-text-top">
                <h2>Ensure Education for every poor children</h2>
              </div>
              <div className="case-btn">
                <ul>
                  <li><Link to="/about">Learn More</Link></li>
                  <li><Link to="/donate">Donate Now</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 custom-grid col-12">
          <div className="wpo-case-item">
            <div className="wpo-case-img">
              <img src="/public/assets/images/case/img-2.png" 
              alt="img-2.png" />
            </div>
            <div className="wpo-case-content">
              <div className="wpo-case-text-top">
                <h2>Supply drinking water for the people</h2>
              </div>
              <div className="case-btn">
                <ul>
                <li><Link to="/about">Learn More</Link></li>
                <li><Link to="/donate">Donate Now</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 custom-grid col-12">
          <div className="wpo-case-item">
            <div className="wpo-case-img">
              <img src="/public/assets/images/case/img-3.png" 
              alt="img-3.png" />
            </div>
            <div className="wpo-case-content">
              <div className="wpo-case-text-top">
                <h2>Providing Healthy Food for the children</h2>
              </div>
              <div className="case-btn">
                <ul>
                <li><Link to="/about">Learn More</Link></li>
                <li><Link to="/donate">Donate Now</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div> 

    </div>
  )
}
