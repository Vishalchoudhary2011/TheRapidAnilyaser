import React from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "./Resuable/Breadcrumb";
import Lottie from "react-lottie";
import financedata from "./imagefile/finance.json";
import Dataanimation from "./Dataanimation";
import Header from "./Header";
export default function Trading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: financedata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="App">
        <Helmet>
          <title>Trading | TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <Header />
      <section className="aboutupper lightshadow">
        <Breadcrumb label={"Trading"} />
      </section>
      <section className="trading">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="datatext">
                <h3>What We Do</h3>
                <p>
                  We provide an option strategy with high returns for the risk
                  taken
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </section>

      <section className="tradingdata">
        <Dataanimation />
      </section>
    </div>
  );
}
