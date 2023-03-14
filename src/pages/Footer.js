import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
  return (
    <div>
      <div className="footer lightshadow">
        <article className="lightings">
          <section className="one">
            <section className="two">
              <section className="three">
                <section className="four">
                  <section className="five"></section>
                </section>
              </section>
            </section>
          </section>
        </article>
        <section
          className="footeruppersection animate bounceIn animated"
          data-delay="1400"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="upperlinks">
                  <li>
                    <Link to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/" >
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link to="/" >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link  to="/" >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="footermiddlesection">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  <i className="bx bxs-map-pin animate pulse animated "></i>
                  <span>
                    OFFICE Address: 51, Electronic Complex, Pardesipura, Indore,
                    Madhya Pradesh 452007
                  </span>
                </p>
                <p>
                  Contact no. :{" "}
                  <Link href="tel:+91- 000 000 0000">+91- 000 000 0000</Link>
                  <span className="emailadd">
                    Email Address :{" "}
                    <Link href="mailto:info@therapidanalyzer.com">
                      info@therapidanalyzer.com
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="footerendsection">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>©Therapidanalyzer.com, All rights reserved.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        className="animate pulse animated infinite"
      />
    </div>
  );
}
