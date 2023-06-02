import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <div className="contactpage" id="contact">
  <div className="left">
    <div className="left-content">
      <h1>Let's reimagine what's possible</h1>
      <div className="row__inner">
        <div className="col__inner">
          <span>Follow Us</span>
          <p>
            <a href="#">Instagram</a>,
            <a href="#">LinkedIn</a>
          </p>
        </div>
        <div className="col__inner">
          <span>Phone</span>
          <p><a href="#">(+91) 123456789</a></p>
        </div>
        <div className="col__inner">
          <span>General Inquiries</span>
          <p>
            <a href="#">hello@alora.com</a>
          </p>
        </div>
        <div className="col__inner">
          <span>Main Hub</span>
          <p>Chennai</p>
        </div>
      </div>
    </div>
  </div>

  <div className="right">
    <div className="wrapper" style={{ width: "38vw" }}>
      <h1>We are listening,</h1>
      <div className="highlight" style={{ opacity: 0.4522, display: "none" }}></div>
    </div>
    <textarea
      type="text"
      name="message"
      id="message"
      placeholder="Tell us about your company and how we can help"
      required=""
      style={{ height: "257px", overflowY: "hidden" }}
      className="loaded"
    ></textarea>
    <div className="row">
      <div className="col__inner">
        <label htmlFor="name" className="cursor__hover --highlight">
          <input type="text" placeholder="Your Name" name="name" id="name" required="" />
        </label>
        <label htmlFor="email" className="cursor__hover --highlight">
          <input type="email" placeholder="Your Email" name="email" id="email" required="" />
        </label>
      </div>
      <button className="btn__circle" style={{ transform: "none", rotate: "none", scale: "none" }}>
        <div className="no-overflow" style={{ transform: "none", rotate: "none", scale: "none" }}>
          <div className="inner">
            <p>Send Inquiry</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact