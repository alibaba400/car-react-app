import React, { useState } from "react";

function NavBar() {
  return (
    <header>
      <div className="nice">
        <h1 className="European">M.S. European</h1>
        <div className="headercontainer">
          <nav>
            <ul>
              <li className="current">
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
              <li>
                <a href="contactus"> Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
