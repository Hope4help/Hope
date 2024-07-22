// import React from 'react'
// import {Link} from 'react-router-dom'
// export default function Volunteer() {
//   return (
//     <div>
//         {/* .wpo-breadcumb-area start */}
//         <div className="wpo-breadcumb-area">
//         <div className="container">
//             <div className="row">
//             <div className="col-12">
//                 <div className="wpo-breadcumb-wrap">
//                 <h2>Become a Volunteer</h2>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><span>Become a Volunteer</span></li>
//                 </ul>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//         {/* .wpo-breadcumb-area end */}
//         {/* volunteer-area-start */}
//         <div className="volunteer-area">
//           <div className="volunteer-wrap">
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <div className="volunteer-item">
//                     <div className="volunteer-img-wrap">
//                       <div className="volunter-img">
//                         <img src="/assets/images/volunteer.jpg" alt />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="volunteer-contact">
//                     <div className="volunteer-contact-form">
//                       <h2>Become a Volunteer</h2>
//                       <form method="post" className="contact-validation-active" id="contact-form">
//                         <div className="row">
//                           <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
//                             <input type="text" className="form-control" name="name" id="name" placeholder="First Name" />
//                           </div>
//                           <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
//                             <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
//                           </div>
//                           <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
//                             <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
//                           </div>
//                           <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
//                             <label htmlFor="file">Upload Your CV</label>
//                             <input id="file" type="file" className="form-control" name="file" />
//                             <i className="ti-cloud-up" />
//                           </div>
//                           <div className="col-lg-12 col-12 form-group">
//                             <textarea className="form-control" name="note" id="note" placeholder="Case Description..." defaultValue={""} />
//                           </div>
//                           <div className="submit-area col-lg-12 col-12">
//                             <button type="submit" className="theme-btn submit-btn">Send Message</button>
//                             <div id="loader">
//                               <i className="ti-reload" />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="clearfix error-handling-messages">
//                           <div id="success">Thank you</div>
//                           <div id="error"> Error occurred while sending email. Please try again later. </div>
//                         </div>
//                       </form>
//                     </div> 
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* wpo-team-area start */}
//           <div className="wpo-team-area section-padding">
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <div className="wpo-section-title">
//                     <span>Meet Our Team</span>
//                     <h2>Our Expert Volunteer</h2>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
//                   <div className="wpo-team-wrap">
//                     <div className="wpo-team-img">
//                       <img src="src\assets\images\DSC_0083 (1).JPG" alt />
//                     </div>
//                     <div className="wpo-team-content">
//                       <div className="wpo-team-text-sub">
//                         <h2>Smith Tomkin</h2>
//                         <span>CEO &amp; Founder</span>
                        
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
//                   <div className="wpo-team-wrap">
//                     <div className="wpo-team-img">
//                       <img src="/assets/images/team/team-2.jpg" alt />
//                     </div>
//                     <div className="wpo-team-content">
//                       <div className="wpo-team-text-sub">
//                         <h2>Robert Honey</h2>
//                         <span>Volunteer</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
//                   <div className="wpo-team-wrap">
//                     <div className="wpo-team-img">
//                       <img src="/assets/images/team/team-3.jpg" alt />
//                     </div>
//                     <div className="wpo-team-content">
//                       <div className="wpo-team-text-sub">
//                         <h2>Juliya Jossoy</h2>
//                         <span>Volunteer</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* wpo-team-area end */}
//         </div>
//         {/* volunteer-area-end */}

//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Volunteer() {
  return (
    <div>
      {/* .wpo-breadcumb-area start */}
      <div className="wpo-breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-breadcumb-wrap">
                <h2>Become a Volunteer</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><span>Become a Volunteer</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .wpo-breadcumb-area end */}
      {/* volunteer-area-start */}
      <div className="volunteer-area">
        <div className="volunteer-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="volunteer-item">
                  <div className="volunteer-img-wrap">
                    <div className="volunter-img">
                      <img src="/assets/images/volunteer.jpg" alt="Volunteer" />
                    </div>
                  </div>
                </div>
                <div className="volunteer-contact">
                  <div className="volunteer-contact-form">
                    <h2>Become a Volunteer</h2>
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSe3oSI43DcWC3lwuezx7dpfBwoJdUG_FfNv98jcVj4IRD2JmA/viewform?embedded=true"
                      width="100%"
                      height="1000px"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <img src="/assets/images/team/team-1.jpg" alt="Team Member" />
                  </div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2>Smith Tomkin</h2>
                      <span>CEO & Founder</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img">
                    <img src="/assets/images/team/team-2.jpg" alt="Team Member" />
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
                    <img src="/assets/images/team/team-3.jpg" alt="Team Member" />
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
      {/* volunteer-area-end */}
    </div>
  );
}
