import React from "react";
import High52 from "./High52";
import Topgainers from "./Topgainer";
import Toplosers from "./Toplosers";
import Low52 from "./Low52";

export default function Dashboardcharts() {
  return (
    <div className="chartsdata ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-xs-12 col-sm-6">
            <div className="card">
              <div className="card-body">
                <Topgainers />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3  col-xs-12 col-sm-6">
            <div className="card">
              <div className="card-body">
                <Toplosers />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3  col-xs-12 col-sm-6">
            <div className="card">
              <div className="card-body">
                <High52 />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="card">
              <div className="card-body">
                <Low52 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
