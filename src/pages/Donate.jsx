import React from 'react'
import { Link } from 'react-router-dom'

export default function Donate() {
  return (
    <div>
      {/* .wpo-breadcumb-area start */}
        <div className="wpo-breadcumb-area">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="wpo-breadcumb-wrap">
                <h2>Donate Now</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>Donate</span></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* .wpo-breadcumb-area end */}
        {/* wpo-event-area start */}
        <div className="wpo-donation-page-area section-padding">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
                <div className="wpo-donate-header">
                   <a href='https://rzp.io/l/LoUTqS33p'>
                <h2>Make a Donation</h2>
                </a> 
                </div>
                <div id="Donations" className="tab-pane">
                {/* <form action="#">
                    <div className="wpo-donations-amount">
                    <h2>Your Donation</h2>
                    <input type="text" className="form-control" name="text" id="text" placeholder="Enter Donation Amount" />
                    </div>
                    <div className="wpo-donations-details">
                    <h2>Details</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input type="text" className="form-control" name="name" id="fname" placeholder="Name" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Last Name" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Adress" />
                        </div>
                        <div className="col-lg-12 col-12 form-group">
                        <textarea className="form-control" name="note" id="note" placeholder="Message" defaultValue={""} />
                        </div>
                    </div>
                    </div>
                    <div className="submit-area">
                        <a href="https://rzp.io/l/LoUTqS33p">
                    <button  className="theme-btn submit-btn">Donate Now</button>
                    </a>
                    </div>
                </form> */}
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* wpo-event-area end */}

    </div>
  )
}
