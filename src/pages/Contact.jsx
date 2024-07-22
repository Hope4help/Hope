import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      {/* .wpo-breadcumb-area start */}
      <div className="wpo-breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-breadcumb-wrap">
                <h2>Contact Us</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><span>Contact</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .wpo-breadcumb-area end */}
      {/* start wpo-contact-form-map */}
      <section className="wpo-contact-form-map section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <form method="post" className="contact-validation-active" id="contact-form">
                      <div>
                        <input type="text" className="form-control" name="name" id="name" placeholder="First Name" />
                      </div>
                      <div>
                        <input type="text" className="form-control" name="name2" id="name2" placeholder="Last Name" />
                      </div>
                      <div className="clearfix">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                      </div>
                      <div>
                        <textarea className="form-control" name="note" id="note" placeholder="Case Description..." defaultValue={""} />
                      </div>
                      <div className="submit-area">
                        <button type="submit" className="theme-btn submit-btn">Send Message</button>
                        <div id="loader">
                          <i className="ti-reload" />
                        </div>
                      </div>
                      <div className="clearfix error-handling-messages">
                        <div id="success">Thank you</div>
                        <div id="error"> Error occurred while sending email. Please try again later. </div>
                      </div>
                    </form>
                  </div>                            
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowFullScreen />
                  </div>
                </div>
              </div>
              <div className="wpo-contact-info">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="info-item">
                      <h2>25 North Street,Dubai</h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <i className="ti-world" />
                        </div>
                        <div className="info-text">
                          <span>Office Address</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="info-item">
                      <h2>info@nasarna.com</h2>
                      <div className="info-wrap">
                        <div className="info-icon-2">
                          <i className="fi flaticon-envelope" />
                        </div>
                        <div className="info-text">
                          <span>Official Mail</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="info-item">
                      <h2>+91 256-987-239</h2>
                      <div className="info-wrap">
                        <div className="info-icon-3">
                          <i className="ti-headphone-alt" />
                        </div>
                        <div className="info-text">
                          <span>Official Phone</span>
                        </div>
                      </div>
                    </div>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* end container */}
      </section>
      {/* end wpo-contact-form-map */}

    </div>
  )
}
