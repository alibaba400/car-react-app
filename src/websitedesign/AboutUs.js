import React from "react";
import "../App.css";
import Footer from "./Footer";

function AboutUs() {
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
                <li className="current">
                  <a href="aboutus"> About us </a>
                </li>
                <li>
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
              <b> Family Owned and Operated</b>
            </h4>
            <ul>
              <li>
                We are Family Owned and Operated. We have first hand knowledge
                to ensure our customers are getting top notch signature service.
              </li>
              <li>
                We make things simple and convenient for our customers at good
                prices. Thanks to low overhead family business operation
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b>We are Easy Access </b>
            </h4>
            <ul>
              <li>
                We are conveniently located at 2 traffic lights from 880 (17) &
                280 junction.
              </li>
              <li>From Highway 880 � 2 traffic lights East on Stevens Creek</li>
              <li>From Highway 280 � 2 traffic lights North on Bascom</li>
              <li>
                Santana Row and Valley Fair are only a few traffics lights away
                from us.
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b> Our Mission </b>
            </h4>
            <ul>
              <li>
                To help our customers maintain their cars to be the safest and
                most reliable, while having maximum life and performance in
                their own class.
              </li>
              <li>
                We can only do this by maintaining competitive prices and
                quality services for our customers and being a responsible
                steward of the environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default AboutUs;
