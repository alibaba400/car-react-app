import React from "react";
import "../App.css";
import Footer from "./Footer";

function Specials() {
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
                <li className="current">
                  <a href="specials"> Specials </a>
                </li>
                <li>
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
              <b>New Customer Specials</b>
            </h4>
            <ul>
              <li>
                20% discount on Labor for New Customers (excludes other
                specials)
              </li>
              <li>Free Brake Inspection</li>
              <li>Free Air Conditioning Check</li>
              <li>
                To benefit these savings, please mention Promo1805 at the time
                of write up
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b>BMW Specials</b>
            </h4>
            <ul>
              <li>
                Oil and Filter Service $89BMW factory full synthetic oil – (M
                series and V8 excluded )
              </li>
              <li>Coolant Flush $149 (with BMW coolant)</li>
              <li>Brake Fluid Change $149</li>
              <li>Free Check Engine Light (check for code)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b>Mercedes Benz Specials</b>
            </h4>
            <ul>
              <li>Service A $170</li>
              <li>Service B $325</li>
              <li>Free Check Engine Light Check for code</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="specialone">
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/yYStt_wLr01wpby8IIcc0w/o.jpg"
          alt="specialsimg"
        />
      </div>

      <Footer />
    </body>
  );
}

export default Specials;
