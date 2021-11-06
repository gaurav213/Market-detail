import React from "react";
import Landingpage from "./Landing_page";
import banner1 from "../images/banner3.png";
import "../Css/about.css";
import Footer from "../Component/footer ";

const About = () => {
  return (
    <div>
      <Landingpage />
      <div>
        <div class="about-sections">
          <h1>About Us</h1>
          <p>We are farmers and now working as a web Developer.</p>
          <p></p>
        </div>
        <div>
          <section className="contacts">
            <img className="images" src={banner1} alt={banner1} />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;