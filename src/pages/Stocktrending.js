import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Stocktrending() {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const items = [
    <div className="item" data-value="1">
      <span className="symbol nowrap">NIFTY 50</span>
      <span className="price">18,117.15</span>
      <i className="icon-price-up"></i>
      <span className="change up">0.36%</span>
    </div>,
    <div className="item" data-value="2">
      <span className="symbol nowrap">TCS</span>
      <span className=" price">3,217.40</span>
      <i className="icon-price-up"></i>
      <span className="change up">0.33%</span>
    </div>,
    <div className="item" data-value="3">
      <span className="symbol nowrap">NIFTY BANK</span>
      <span className="price">41,258.45</span>
      <i className="icon-price-down"></i>
      <span className="change down">0.10%</span>
    </div>,
    <div className="item" data-value="4">
      <span className="symbol nowrap">BAJFINANCE</span>
      <span className="price">7,212.00</span>
      <i className=" icon-price-up"></i>
      <span className="change up">1.27%</span>
    </div>,
    <div className="item" data-value="5">
      <span className=" symbol nowrap">HDFCBANK</span>
      <span className=" price">1,497.15</span>
      <i className=" icon-price-down"></i>
      <span className=" change down">0.69%</span>
    </div>,
    <div className="item" data-value="6">
      <span className=" symbol nowrap">HINDUNILVR</span>
      <span className=" price">2,520.35</span>
      <i className="icon-price-down"></i>
      <span className=" change down">1.02%</span>
    </div>,
    <div className="item" data-value="7">
      <span className="symbol nowrap">INDIGO</span>
      <span className="price">1,798.00</span>
      <i className="icon-price-down"></i>
      <span className=" change down">0.29%</span>
    </div>,
    <div className="item" data-value="8">
      <span className=" symbol nowrap">MARUTI</span>
      <span className=" price">9,229.50</span>
      <i className=" icon-price-down"></i>
      <span className=" change down">0.10%</span>
    </div>,
    <div className="item" data-value="9">
      <span className="symbol nowrap">RELIANCE</span>
      <span className=" price">2,592.75</span>
      <i className="icon-price-up"></i>
      <span className=" change up">1.47%</span>
    </div>,
    <div className="item" data-value="10">
      <span className="symbol nowrap">SBIN</span>
      <span className=" price">593.95</span>
      <i className="icon-price-up"></i>
      <span className="jsx-3889711638 change up">1.55%</span>
    </div>,
  ];

  return (
    <div>
      <AliceCarousel
        className="itemstock"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={500}
        // animationType="fadeout"
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}
