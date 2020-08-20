import React from "react";
import "../App.css";
import Footer from "./Footer";

function ContactUs() {
  return (
    <body>
      <header>
        <div className="nice">
          <h1 className="European">M.S. European</h1>
          <div className="headercontainer">
            <nav>
              <ul>
                <li>
                  <a href="/"> Home </a>
                </li>
                <li>
                  <a href="services"> Services</a>
                </li>
                <li>
                  <a href="specials"> Specials </a>
                </li>
                <li>
                  <a href="aboutus"> About us </a>
                </li>
                <li className="current">
                  <a href="contactus"> Contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="biggercard">
        <div className="card">
          <div className="content">
            <h4>
              <b> Hours and Phone #</b>
            </h4>
            <ul>
              <li>Hours: M-F 8:00-6:00 Sat. and Sun. with Appointment</li>
              <li>Call Us: (408) 280-0400</li>
              <li>Early drop off and late pick up arrangements.</li>
              <li>We keep the porch light on for you.</li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="contentgoogleimg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7898063719235!2d-121.93567808467436!3d37.323806345749354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb3dab5a60bb%3A0xc1d0e1594e82fdd1!2sM.S.%20European!5e0!3m2!1sen!2sus!4v1597349203271!5m2!1sen!2sus"
              height="400px"
              width="400px"
            ></iframe>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b>Address</b>
            </h4>
            <ul>
              <li>2221 Stevens Creek Blv. San Jose, Ca. 95128</li>
              <li>
                Don’t Forget: Have lunch at Santana Row and shop at Valley Fair,
                while we service your car.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default ContactUs;
