import React from "react";
import "../App.css";
import Footer from "./Footer";

function Services() {
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
                <li className="current">
                  <a href="services"> Services</a>
                </li>
                <li>
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
              <b> Oil and Filter Service</b>
            </h4>
            <ul>
              <li>Factory recommended synthetic oil is in stock.</li>
              <li>
                With 25 items check sheet to get sure all of the fluids under
                the hood are filled, lights are working, tire pressure adjusted,
                and more.
              </li>
              <li>All, while you wait and service reminder has been reset.</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b>Annual Service and Pre-purchase inspection</b>
            </h4>
            <ul>
              <li>
                We have most comprehensive inspection list- more than 150 point
                status kept on file for every vehicle we do complete inspection.
              </li>
              <li>
                This list is used for every Scheduled maintenance service: BMW
                inspection 1 and 2; Mercedes Benz A, B, 15k, 30K, and 60K
                services; or when some one buying or selling and wants to know
                mechanically everything about that car.
              </li>
              <li>
                This list includes, but not limited to systems of: Air
                condition, Brake, cooling, exhaust, steering, and suspension.
                Engine, Transmission, ABS, and SRS modules (computers) are
                checked for code. Components are also checked for leak.
              </li>
              <li>
                We believe our customers are entitled to know status of every
                safety and performance related item in their cars, so for one
                year (between the services) drive with peace of mind that there
                be no surprises while in commute.
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b> Brakes- The most important system in every car.</b>
            </h4>
            <ul>
              <li>
                A complete brake inspection is performed and measurements are
                recorded whenever brakes are checked.
              </li>
              <li>We use factory parts for quiet and efficient braking</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
export default Services;
