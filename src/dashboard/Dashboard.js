import React from "react";
// import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Dashboardcharts from "./Dashboardcharts";
import Filters from "./Filters";
import Headerdashboard from "./Headerdashboard";
import { Helmet } from "react-helmet";
import BSEIndexes from "./BSEIndexes";
import Stockdata from "./Stockdata";
import NSEIndexes from "./NSEIndexes";

export default function Dashboard() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <title>Dashboard | TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <Headerdashboard />
      <section className="bg12 dashboard">
        <div className="rowC">
          <Breadcrumb title="Dashboard" />
          <Filters />
        </div>
        <div>
          <Dashboardcharts />
        </div>
        <div>
          <BSEIndexes />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 col-xs-12 animate fadeInLeftBig animated"
              data-delay="100"
            >
              <div className="card trhcard">
                <div className="card-body">
                  <div className="card-title">
                    <h3>Top Gainers</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th
                            className="col-stock_symbol_with_link "
                            col-name="stock_symbol_with_link"
                            data-type="text"
                            data-filterable=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Symbol</span>
                            </div>
                          </th>

                          <th
                            className="col-last u-txt-align-end"
                            col-name="last"
                            data-type="numeric"
                            data-filterable=""
                            data-stream-prefix="pid"
                            data-socket-key="last"
                            data-target-className=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Last</span>
                            </div>
                          </th>

                          <th
                            className="col-chg_pct u-txt-align-end"
                            col-name="chg_pct"
                            data-type="percent"
                            data-filterable=""
                            data-stream-prefix="pid"
                            data-socket-key="pcp"
                            data-target-className=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Chg%</span>
                            </div>
                          </th>

                          <th
                            className="col-volume u-txt-align-end"
                            col-name="volume"
                            data-type="short_numeric"
                            data-filterable=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Volume</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href=""
                              title="SBI"
                            >
                              SBI
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">613.00</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-up">
                            <span className="text">+3.21%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">25.37M</span>
                          </td>
                        </tr>

                        <tr
                          className="common-table-item u-clickable"
                          data-s="18047"
                          data-json-hash=""
                        >
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href=""
                              title="Bank Of Baroda"
                            >
                              BOB
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">155.35</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-up">
                            <span className="text">+7.47%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">87.49M</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="Adani Enterprises"
                            >
                              ADEL
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">3,945.45</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-up">
                            <span className="text">+2.93%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">2.90M</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="Britannia Industries"
                            >
                              BRIT
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">4,153.30</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-up">
                            <span className="text">+9.18%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">1.71M</span>
                          </td>
                        </tr>

                        <tr
                          className="common-table-item u-clickable"
                          data-s="18377"
                          data-json-hash=""
                        >
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="Vedanta"
                            >
                              VDAN
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">305.40</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-down">
                            <span className="text">-5.14%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">19.47M</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="Reliance Industries"
                            >
                              RELI
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">2,582.05</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end">
                            <span className="text">-0.41%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">2.00M</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 col-xs-12 animate fadeInRightBig animated"
              data-delay="500"
            >
              <div className="card trhcard">
                <div className="card-body">
                  <div className="card-title">
                    <h3>Top Losers</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th
                            className="col-stock_symbol_with_link "
                            col-name="stock_symbol_with_link"
                            data-type="text"
                            data-filterable=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Symbol</span>
                            </div>
                          </th>

                          <th
                            className="col-last u-txt-align-end"
                            col-name="last"
                            data-type="numeric"
                            data-filterable=""
                            data-stream-prefix="pid"
                            data-socket-key="last"
                            data-target-className=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Last</span>
                            </div>
                          </th>

                          <th
                            className="col-chg_pct u-txt-align-end"
                            col-name="chg_pct"
                            data-type="percent"
                            data-filterable=""
                            data-stream-prefix="pid"
                            data-socket-key="pcp"
                            data-target-className=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Chg%</span>
                            </div>
                          </th>

                          <th
                            className="col-volume u-txt-align-end"
                            col-name="volume"
                            data-type="short_numeric"
                            data-filterable=""
                          >
                            <div className="th-wrapper">
                              <span className="text">Volume</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="common-table-item u-clickable"
                          data-s="977146"
                          data-json-hash=""
                        >
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="ISMT Ltd"
                            >
                              ISMT
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">49.70</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-down">
                            <span className="text">-19.97%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">358.33K</span>
                          </td>
                        </tr>

                        <tr
                          className="common-table-item u-clickable"
                          data-s="947441"
                          data-json-hash=""
                        >
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="ISMT Ltd"
                            >
                              ISMT
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">49.55</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-down">
                            <span className="text">-19.95%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">1.96M</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="TeleCanor Global"
                            >
                              TCGL
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">6.05</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-down">
                            <span className="text">-16.55%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">3.00</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="Stellar Capital Services"
                            >
                              STLL
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">4.01</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-down">
                            <span className="text">-13.95%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">12.00K</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="Blue Chip India Ltd"
                            >
                              BLCI
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">0.350</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end u-down">
                            <span className="text">-12.50%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">5.63K</span>
                          </td>
                        </tr>

                        <tr className="common-table-item u-clickable">
                          <td className="col-stock_symbol_with_link">
                            <Link
                              className="js-instrument-page-link"
                              href="/"
                              title="N D A Securities"
                            >
                              NDAS
                            </Link>
                          </td>

                          <td className="col-last u-txt-align-end">
                            <span className="text">12.15</span>
                          </td>

                          <td className="col-chg_pct u-txt-align-end">
                            <span className="text">-10.99%</span>
                          </td>

                          <td className="col-volume u-txt-align-end">
                            <span className="text">1.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 col-lg-4 col-xs-12 animate fadeInUpBig animated"
              data-delay="300"
            >
              <div className="card trhcard">
                <div className="card-body">
                  <Stockdata />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NSEIndexes />
        </div>
       
      </section>
    </div>
  );
}
