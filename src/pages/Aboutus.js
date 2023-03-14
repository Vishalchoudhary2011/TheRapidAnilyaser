import React from "react";

import Breadcrumb from "./Resuable/Breadcrumb";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Aboutfancycard from "./Resuable/Aboutfancycard";
import Process from "./Resuable/Process";
// import Iframe from "react-iframe";

export default function Aboutus() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <title>About Us | TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <Header />
      <section className="aboutupper lightshadow">
        <Breadcrumb label={"About Us"} />
      </section>

      <section className="aboutdetail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="busin1">
                We can give the best facilites for <br />
                <strong>business</strong>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <div className="ct-list-inner">
                <div className="ct-list-icon">
                  <i className="bx bx-file"></i>
                </div>
                <div className="ct-list-content">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="ct-list-inner">
                <div className="ct-list-icon">
                  <i className="bx bx-bulb"></i>
                </div>
                <div className="ct-list-content">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="ct-list-inner">
                <div className="ct-list-icon">
                  <i className="bx bx-rocket"></i>{" "}
                </div>
                <div className="ct-list-content">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Aboutfancycard />
            </div>
          </div>
        </div>
      </section>

      <Process />
      <section className="video-section">
        <div className="video-box">
          <figure className="video-image">
            <img src="images/stockimage.jpg" alt="" />
          </figure>
          <a
            href="https://www.youtube.com/watch?v=kxPCFljwJws"
            className="lightbox-image overlay-box"
          >
            <span className="flaticon-009-play-arrow">
              <i class="ripple"></i>
            </span>
          </a>
        </div>
      </section>
      {/* <section className="pt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div class="item">
                <img src="images/work-1.webp" alt=""></img>
                <div class="content">
                  <h4 class="subtitle">Residential</h4>
                  <h3 class="title">
                    <a href="project-details.html">Cubic Villa</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
