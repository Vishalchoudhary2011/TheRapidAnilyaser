import React from 'react'
import transactiondata from "./imagefile/transaction.json";
import moneydata from "./imagefile/money.json"
import Lottie from "react-lottie";
import chartdata from "./imagefile/chart.json";
import animatedata from "./imagefile/topstocks.json";

export default function Dataanimation() {
   const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: transactiondata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: moneydata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const defaultOptions4= {
        loop: true,
        autoplay: true,
        animationData: chartdata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animatedata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <div className="data2">
                <div class="project-image">
                <Lottie  options={defaultOptions1} height={250} />
                </div>
                <div class="lower-content">
                  <div class="inner">
                    <h3 class="heading">Earn Dividends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="data2">
                <div class="project-image">
                <Lottie  options={defaultOptions2} height={250} />
                </div>
                <div class="lower-content">
                  <div class="inner">
                    <h3 class="heading">Control the Process</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="data2">
                <div class="project-image">
                <Lottie  options={defaultOptions3} height={250} />
                </div>
                <div class="lower-content">
                  <div class="inner">
                    <h3 class="heading">Remove the Middleman</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="data2">
                <div class="project-image">
                <Lottie  options={defaultOptions4} height={250} />
                </div>
                <div class="lower-content">
                  <div class="inner">
                    <h3 class="heading">Get Real-Time Updates</h3>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}
