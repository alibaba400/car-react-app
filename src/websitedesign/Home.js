import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="homez">
      <NavBar />

      <section id="showcase">
        <div className="container"></div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h3>Mercedes Benz and BMW Service and Repair Since 1992</h3>
        </div>
      </section>
      <div className="biggercard">
        <div className="card">
          <div className="content">
            <h4>
              <b>Background</b>
            </h4>
            <p>
              We Are knowledgeable and experienced with more than 30 years of
              experience on BMW and Mercedes Benz service. Certified Master
              Technician since 1984. We have a 100% Customer Satisfaction
              Program with new lowered prices. You will find our shop the right
              place for your car with great savings.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h4>
              <b>Purpose</b>
            </h4>
            <p>
              This site is designed to be simple and informative. It reflects
              our philosophy of running business: Focus is on quality and
              efficiency, not on the merchandizing. Customers become the end
              beneficiary of low overhead business. M.S. European is a service
              facility for BMW and Mercedes Benz. It is family owned and
              operated, located conveniently in heart of San Jose.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
