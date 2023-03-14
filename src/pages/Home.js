import React from "react";
import Stocktrending from "./Stocktrending";
import Card from "./Resuable/Card";
// import Header from "./Header";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./imagefile/data.json";
import { Helmet } from "react-helmet";
import Header from "./Header";


export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      
    <div className="App">
        <Helmet>
          <title>TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <Header/>
      <section className="banner-content-block">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="banner-text ">
                <h1 className="line-1 anim-typewriter">
                  Get max profit & <span id="restart">become successful</span>
                </h1>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test.{" "}
                </p>
                <Link href="/" className="buttonprimary">
                  Get started
                </Link>

                {/* <Link className="play-btn" href="#"><span>Watch Intro video About Us</span></Link> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner-img ">
                <Lottie options={defaultOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutsection bg-color pt-50 pb-50 " id="aboutsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 animate fadeIn animated">
              <h3>
                Fast Execution , Low Latency{" "}
                <span>
                  <i className="bx bxs-right-arrow-alt"></i>
                </span>
              </h3>
              <h2>
                Your premium choice for trading currencies & stocks online
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="row">
                <div
                  className="col-md-4 col-4 animate fadeIn animated"
                  data-delay="500"
                >
                  <div className="iconimage">
                    <img src="images/icon1.png" alt="aboutimageicon"/>
                  </div>
                </div>
                <div
                  className="col-md-4 col-4 animate fadeIn animated"
                  data-delay="1000"
                >
                  <div className="iconimage">
                    <img src="images/icon2.png" alt="aboutimageicon" />
                  </div>
                </div>
                <div
                  className="col-md-4 col-4 animate fadeIn animated"
                  data-delay="1500"
                >
                  <div className="iconimage">
                    <img src="images/icon3.png" alt="aboutimageicon" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow animate fadeIn animated"
              data-delay="2000"
            >
              <div className="stock">
                <img src="images/coin.png" alt="imagestock" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="investing pt-50 pb-50 shapes-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="textinvesting">
                <h3>Every investor to profit from stock markets​ </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-1 animate bounceInUp animated">
              <img src="images/investing.png" alt="investor" />
            </div>
            <div className="col-md-6">
              <div className="investingsection">
                <h4 className="animate bounceIn" data-delay="500">
                  Trading and investment solutions built on modern, easy-to-use
                  platforms
                </h4>
                <ul>
                  <li className="animate bounceIn" data-delay="500">
                    Ability to analyze billions of data points daily
                  </li>
                  <li className="animate bounceIn" data-delay="500">
                    Fundamental investing made to win in the long run
                  </li>
                  <li className="animate bounceIn" data-delay="500">
                    Self-adjusting in various market cycles​​
                  </li>
                  <li className="animate bounceIn" data-delay="500">
                    Sector and market cap agnostic​
                  </li>
                  <li className="animate bounceIn" data-delay="500">
                    Real-time action on individual holdings and portfolios​​​​
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape1">
          <img src="images/shape1.png" alt="imageshape1" />
        </div>
        <div className="shape3">
          <img src="images/shape3.png" alt="imageshape2" />
        </div>
        <div className="shape4">
          <img src="images/shape4.png" alt="imageshape4" />
        </div>
      </section>
      <section className="stocksection">
        <Stocktrending />
      </section>
      <section className="whyinvesting pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="textinvesting animate fadeIn animated">
                <h3>Why to invest stock market​ </h3>
                <p>
                  It will gives you a secure and safe money.Investment is good
                  and growing rather than saving.
                  <br />
                  Investment has the potential to generate much higher returns
                  than saving. <br />
                  You can use the funds fo short-term goals.Investing is an
                  effective way to have your money work for you and build wealth
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <Card />
          </div>
        </div>
      </section>
     
    </div>
  );
}
