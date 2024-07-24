import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
<div className="wpo-ne-footer">
  {/* start wpo-site-footer */}
  <footer className="wpo-site-footer">
    <div className="wpo-upper-footer">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 col-md-3 col-sm-6">
            <div className="widget about-widget">
              <div className="logo widget-title">
                {/* <img src="/assets/images/hope2-logo.png" alt="blog" />  */}
               <svg width="200.59999999999997" height="45.90797226031972" viewBox="0 0 200 55.10806671225981" class="looka-1j8o68f"><defs id="SvgjsDefs6918"></defs><g id="SvgjsG6919" featurekey="Df7oLJ-0" transform="matrix(0.5999997711182514,0,0,0.5999997711182514,0.000014877313660692727,1)" fill="#f7c33f"><path xmlns="http://www.w3.org/2000/svg" d="M60.369,31.692c-1.642,1.641-3.855,2.585-6.082,2.585c-1.959,0-3.774-0.729-5.108-2.051L29.016,12.051l-1.826,1.825  l6.965,6.964L11.58,43.415c-0.666,0.667-1.2,1.437-1.6,2.287c-0.625,1.323-0.882,2.78-0.759,4.227C3.261,43.908-0.01,36.266,0,28.4  c0.01-7.518,3.005-14.636,8.432-20.031C13.856,2.975,21.056,0,28.708,0c4.523,0,8.831,1.016,12.811,3.005  c1.62,0.8,3.199,1.785,4.687,2.943l0.708,0.554l13.999,13.99C63.836,23.436,63.6,28.46,60.369,31.692z"></path><path xmlns="http://www.w3.org/2000/svg" d="M44.461,31.148L21.888,53.723c-1.056,1.046-2.483,1.631-3.989,1.631c-1.611,0-3.149-0.646-4.318-1.815  c-1.169-1.168-1.814-2.696-1.814-4.318c0-1.517,0.572-2.933,1.63-3.989L35.97,22.657L44.461,31.148z"></path><path xmlns="http://www.w3.org/2000/svg" d="M100,28.4c0.009,7.918-3.303,15.6-9.334,21.641c-3.589,3.579-7.723,7.713-11.949,11.939L54.328,86.164  c-1.056,1.056-2.472,1.631-3.99,1.631c-1.621,0-3.159-0.646-4.318-1.816c-1.138-1.139-1.774-2.635-1.805-4.215  c-0.031-1.548,0.543-3.005,1.621-4.093l23.711-23.722l-2.213-2.216L43.621,75.458c-1.057,1.046-2.482,1.629-3.99,1.629  c-1.61,0-3.148-0.646-4.319-1.813c-1.168-1.17-1.814-2.698-1.814-4.318c0-1.519,0.574-2.935,1.63-3.991L58.84,43.241l-2.521-2.522  L32.594,64.431c-1.056,1.057-2.472,1.631-3.989,1.631c-1.62,0-3.16-0.646-4.319-1.813c-1.138-1.14-1.774-2.637-1.805-4.216  c-0.042-1.548,0.543-3.006,1.62-4.094l22.574-22.573l0.687,0.687c1.826,1.816,4.287,2.811,6.923,2.811  c2.883,0,5.766-1.221,7.909-3.343c4.226-4.247,4.471-10.903,0.533-14.841L51.733,7.683c5.332-4.963,12.244-7.682,19.559-7.682  c7.64,0,14.841,2.975,20.276,8.37C96.995,13.764,99.991,20.882,100,28.4z"></path></g><g id="SvgjsG6920" featurekey="Ua4uQk-0" transform="matrix(2.377249702931449,0,0,2.377249702931449,76.71939683824145,-12.789603673825834)" fill="#faffff"><path d="M4.52 5.720000000000001 l0 5.48 l5.78 0 l0 -5.48 l3.14 0 l0 14.28 l-3.14 0 l0 -6.16 l-5.78 0 l0 6.16 l-3.14 0 l0 -14.28 l3.14 0 z M21.2395 5.380000000000001 c2.1066 0 3.8034 0.7 5.09 2.1 s1.93 3.2134 1.93 5.44 c0 2.1734 -0.64666 3.9534 -1.94 5.34 s-2.9866 2.08 -5.08 2.08 c-2.1066 0 -3.8034 -0.69334 -5.09 -2.08 s-1.93 -3.1666 -1.93 -5.34 c0 -2.2134 0.64666 -4.0234 1.94 -5.43 s2.9866 -2.11 5.08 -2.11 z M17.3595 12.92 c0 1.44 0.33998 2.5966 1.02 3.47 s1.6333 1.31 2.86 1.31 c1.2 0 2.1466 -0.43 2.84 -1.29 s1.04 -2.0234 1.04 -3.49 c0 -1.5333 -0.34334 -2.7334 -1.03 -3.6 s-1.6433 -1.3 -2.87 -1.3 c-1.2 0 -2.1434 0.43334 -2.83 1.3 s-1.03 2.0666 -1.03 3.6 z M35.498999999999995 5.720000000000001 c1.52 0 2.72 0.41334 3.6 1.24 s1.32 1.94 1.32 3.34 c0 1.4133 -0.44 2.53 -1.32 3.35 s-2.0734 1.23 -3.58 1.23 l-3.34 0 l0 5.12 l-3.14 0 l0 -14.28 l6.46 0 z M34.679 12.440000000000001 c0.90666 0 1.5833 -0.16666 2.03 -0.5 s0.67 -0.88 0.67 -1.64 c0 -0.73334 -0.21666 -1.2733 -0.65 -1.62 s-1.11 -0.52 -2.03 -0.52 l-2.52 0 l0 4.28 l2.5 0 z M51.6985 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z"></path></g><g id="SvgjsG6921" featurekey="sloganFeature-0" transform="matrix(0.6088279872349511,0,0,0.6088279872349511,79.84170487428105,42.72450535900113)" fill="#e3d4d4"><path d="M11.96 5.720000000000001 l0 2.64 l-4.28 0 l0 11.64 l-3.14 0 l0 -11.64 l-4.28 0 l0 -2.64 l11.7 0 z M16.740000000000002 5.720000000000001 l0 5.48 l5.78 0 l0 -5.48 l3.14 0 l0 14.28 l-3.14 0 l0 -6.16 l-5.78 0 l0 6.16 l-3.14 0 l0 -14.28 l3.14 0 z M39.1 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z M50.08 5.720000000000001 l0 5.48 l5.78 0 l0 -5.48 l3.14 0 l0 14.28 l-3.14 0 l0 -6.16 l-5.78 0 l0 6.16 l-3.14 0 l0 -14.28 l3.14 0 z M72.44 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z M77.86 5.720000000000001 l0 11.64 l6.96 0 l0 2.64 l-10.1 0 l0 -14.28 l3.14 0 z M93.04 5.720000000000001 c1.52 0 2.72 0.41334 3.6 1.24 s1.32 1.94 1.32 3.34 c0 1.4133 -0.44 2.53 -1.32 3.35 s-2.0734 1.23 -3.58 1.23 l-3.34 0 l0 5.12 l-3.14 0 l0 -14.28 l6.46 0 z M92.22 12.440000000000001 c0.90666 0 1.5833 -0.16666 2.03 -0.5 s0.67 -0.88 0.67 -1.64 c0 -0.73334 -0.21666 -1.2733 -0.65 -1.62 s-1.11 -0.52 -2.03 -0.52 l-2.52 0 l0 4.28 l2.5 0 z M103.06 5.720000000000001 l0 14.28 l-3.14 0 l0 -14.28 l3.14 0 z M108.94000000000001 5.720000000000001 l5.96 9.58 l0.04 0 l0 -9.58 l2.94 0 l0 14.28 l-3.14 0 l-5.94 -9.56 l-0.04 0 l0 9.56 l-2.94 0 l0 -14.28 l3.12 0 z M127.04000000000002 5.380000000000001 c1.6267 0 3.0066 0.47336 4.14 1.42 s1.76 2.1534 1.88 3.62 l-3 0 c-0.18666 -0.8 -0.54666 -1.4 -1.08 -1.8 s-1.18 -0.6 -1.94 -0.6 c-1.2267 0 -2.18 0.44334 -2.86 1.33 s-1.02 2.0766 -1.02 3.57 c0 1.4667 0.34666 2.63 1.04 3.49 s1.64 1.29 2.84 1.29 c2.0534 0 3.1866 -1.0267 3.4 -3.08 l-3.16 0 l0 -2.34 l6 0 l0 7.72 l-2 0 l-0.32 -1.62 c-1 1.3067 -2.3066 1.96 -3.92 1.96 c-2.1066 0 -3.8034 -0.69334 -5.09 -2.08 s-1.93 -3.1666 -1.93 -5.34 c0 -2.2134 0.64 -4.0234 1.92 -5.43 s2.98 -2.11 5.1 -2.11 z M144.52000000000004 5.720000000000001 l0 5.48 l5.78 0 l0 -5.48 l3.14 0 l0 14.28 l-3.14 0 l0 -6.16 l-5.78 0 l0 6.16 l-3.14 0 l0 -14.28 l3.14 0 z M163.32000000000002 5.720000000000001 l5.34 14.28 l-3.26 0 l-1.08 -3.18 l-5.34 0 l-1.12 3.18 l-3.18 0 l5.42 -14.28 l3.22 0 z M161.66000000000003 9.24 l-1.86 5.24 l3.7 0 l-1.8 -5.24 l-0.04 0 z M173.02 5.720000000000001 l5.96 9.58 l0.04 0 l0 -9.58 l2.94 0 l0 14.28 l-3.14 0 l-5.94 -9.56 l-0.04 0 l0 9.56 l-2.94 0 l0 -14.28 l3.12 0 z M190.84 5.720000000000001 c2.0266 0 3.62 0.62666 4.78 1.88 s1.74 2.98 1.74 5.18 c0 2.28 -0.58334 4.0534 -1.75 5.32 s-2.73 1.9 -4.69 1.9 l-6.2 0 l0 -14.28 l6.12 0 z M190.64000000000001 17.36 c1.1333 0 2.0134 -0.37334 2.64 -1.12 s0.94 -1.8067 0.94 -3.18 c0 -1.5733 -0.33666 -2.75 -1.01 -3.53 s-1.71 -1.17 -3.11 -1.17 l-2.24 0 l0 9 l2.78 0 z"></path></g></svg>
              </div>
              <p>Building brighter futures for children. Supporting their growth and development</p>
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100066960527479" target='_blank'><i className="ti-facebook" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100066960527479" target='_blank'><i className="ti-instagram" /></a> </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-3 col-md-3 col-sm-6">
            <div className="widget link-widget resource-widget">
              <div className="widget-title">
                <h3>Top News</h3>
              </div>
              <div className="news-wrap">
                <div className="news-img">
                  <img src="/assets/images/footer/img-1.jpg" alt="img1" />
                </div>
                <div className="news-text">
                  <a href="https://www.ef.com/wwen/blog/efacademyblog/importance-giving-back-to-your-community/" target="_blank">
                    <h3>The Impact of Donations on Local Communities </h3>
                  </a>
                </div>
              </div>
              <div className="news-wrap">
                <div className="news-img">
                  <img src="/assets/images/footer/img-2.jpg" alt="img2" />
                </div>
                <div className="news-text">
                <a href="https://www.cafonline.org/my-personal-giving/long-term-giving/resource-centre/five-reasons-to-give-to-charity" target="_blank">
                  <h3>Understanding the Benefits of Regular Donations</h3>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-2 col-md-3 col-sm-6">
            <div className="widget link-widget">
              <div className="widget-title">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/causes">Our Causes</Link></li>
                <li><Link to="/volunteer">Join Volunteer</Link></li>
                {/* <li><Link to="/contact">Contact Us</Link></li> */}
                <li><Link to="/event">Our Event</Link></li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
            <div className="widget market-widget wpo-service-link-widget">
              <div className="widget-title">
                <h3>Contact </h3>
              </div>
              <p>We'd love to hear from you! Whether you need support, our team is here to help. </p>
              <div className="contact-ft">
                <ul>
                  <li><i className="fi flaticon-pin" />53-3-83, Bose gari Street, Christhurajupuram, Vijayawada -08</li>
                  <li><i className="fi flaticon-call" />+916300303726</li>
                  <li><i className="fi flaticon-envelope" />workforthehope@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end container */}
    </div>
    <div className="wpo-lower-footer">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <p className="copyright">© 2024 Hope. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end wpo-site-footer */}
</div>

    </div>
  )
}
