import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function NSEIndexes() {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <span class="symbol nowrap">Nifty FMCG</span>
      <span class="price">28,117.15</span>
      <i class="icon-price-up"></i>
      <span class="change up">0.36%</span>
    </div>,
    <div className="item" data-value="2">
      <span class="symbol nowrap">Nifty Next 50</span>
      <span class=" price">13,217.40</span>
      <i class="icon-price-up"></i>
      <span class="change up">0.33%</span>
    </div>,
    <div className="item" data-value="3">
      <span class="symbol nowrap">NIFTY BANK</span>
      <span class="price">45,258.45</span>
      <i class="icon-price-down"></i>
      <span class="change down">0.10%</span>
    </div>,
    <div className="item" data-value="4">
      <span class="symbol nowrap">NIFTY Midcap 100</span>
      <span class="price">35,212.00</span>
      <i class=" icon-price-up"></i>
      <span class="change up">1.27%</span>
    </div>,
    <div className="item" data-value="5">
      <span class=" symbol nowrap">Nifty Alpha 50</span>
      <span class=" price">33,497.15</span>
      <i class=" icon-price-down"></i>
      <span class=" change down">0.69%</span>
    </div>,
    <div className="item" data-value="6">
      <span class=" symbol nowrap">Nifty IT</span>
      <span class=" price">42,520.35</span>
      <i class="icon-price-down"></i>
      <span class=" change down">1.02%</span>
    </div>,
    <div className="item" data-value="7">
      <span class="symbol nowrap">Nifty Energy</span>
      <span class="price">21,798.00</span>
      <i class="icon-price-down"></i>
      <span class=" change down">0.29%</span>
    </div>,
    <div className="item" data-value="8">
      <span class=" symbol nowrap">Nifty Consumer</span>
      <span class=" price">29,229.50</span>
      <i class=" icon-price-down"></i>
      <span class=" change down">0.10%</span>
    </div>,
    <div className="item" data-value="9">
      <span class="symbol nowrap">Nifty Sector</span>
      <span class=" price">32,592.75</span>
      <i class="icon-price-up"></i>
      <span class=" change up">1.47%</span>
    </div>,
    <div className="item" data-value="10">
      <span class="symbol nowrap">Nifty Private Bank</span>
      <span class=" price">1593.95</span>
      <i class="icon-price-up"></i>
      <span class="jsx-3889711638 change up">1.55%</span>
    </div>,
  ];

  return (
    <div className="bseindex">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3>NSE INDEXES</h3>
            <p>Market Dashboard - Today's Track all NSE indexes</p>
          </div>
          <div className="itembse">
            <AliceCarousel
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={2000}
              animationDuration={500}
              infinite
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
