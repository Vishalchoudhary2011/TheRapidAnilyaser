import React from 'react'
import { Link } from "react-router-dom";

export default function Process() {
  return (
    <section className="feauters-two">
        <div className="feauters-two__bg"></div>
        <div className="about-one__shape-3 float-bob-x">
          <img src="images/about-one-shape-3.png" alt="" />
        </div>
        <div className="about-one__shape-4 float-bob-y">
          <img src="images/about-one-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="ct-heading-sub">
                {" "}
                <span></span> What WE Do
              </div>
              <h3 className="busin1">
                We can give the best facilites for <strong>business</strong>
              </h3>
            </div>
            <br />
            <div className="row">
              <div className="av-columns-area">
                <div className="col-md-3 col-sm-6">
                  <div className="stepbox">
                    <div className="stepbox-outer">
                      <div className="step-effect"></div>
                      <div className="stepbox-icon">
                        <span className="stepbox-number animate pulse animated infinite">
                          1
                        </span>
                        <i className="bx bxs-cog animate pulse animated infinite"></i>{" "}
                      </div>
                    </div>
                    <div className="stepbox-content">
                      <h5 className="stepbox-title">
                        <Link to="/">How does stock market works?</Link>
                      </h5>
                      <div className="stepbox-text">
                        We have the technology and industry expertise to develop
                        solutions.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="stepbox">
                    <div className="stepbox-outer">
                      <div className="step-effect1"></div>
                      <div className="stepbox-icon">
                        <span className="stepbox-number animate pulse animated infinite">
                          2
                        </span>
                        <i className="bx bx-money animate pulse animated infinite"></i>
                      </div>
                    </div>
                    <div className="stepbox-content">
                      <h5 className="stepbox-title">
                        <Link to="/">How much returns can i expect?</Link>
                      </h5>
                      <div className="stepbox-text">
                        We have the technology and industry expertise to develop
                        solutions.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="stepbox">
                    <div className="stepbox-outer">
                      <div className="step-effect"></div>
                      <div className="stepbox-icon">
                        <span className="stepbox-number animate pulse animated infinite">
                          3
                        </span>
                        <i className="bx bx-line-chart-down animate pulse animated infinite"></i>
                      </div>
                    </div>
                    <div className="stepbox-content">
                      <h5 className="stepbox-title">
                        <Link to="/">Is stock market risky?</Link>
                      </h5>
                      <div className="stepbox-text">
                        We have the technology and industry expertise to develop
                        solutions.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="stepbox">
                    <div className="stepbox-outer">
                      <div className="stepbox-icon">
                        <span className="stepbox-number">4</span>
                        <i className="bx bx-rocket animate pulse animated infinite"></i>
                      </div>
                    </div>
                    <div className="stepbox-content">
                      <h5 className="stepbox-title">
                        <Link to="/">How much should I start with?</Link>
                      </h5>
                      <div className="stepbox-text">
                        We have the technology and industry expertise to develop
                        solutions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  )
}
