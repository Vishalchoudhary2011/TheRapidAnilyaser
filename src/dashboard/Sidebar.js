import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar ">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link
                  to="/"
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link>
                <ul className="nav nav-pills " id="menu">
                  <li>
                    <Link
                      to="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline category1">
                        Categories
                      </span>{" "}
                    </Link>
                    <ul
                      className=" nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="check1"
                          name="Nifty50"
                          value=""
                        />
                        <label className="form-check-label">NIFTY 50</label>
                      </li>
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="check2"
                          name="Niftybank"
                          value=""
                        />
                        <label className="form-check-label">NIFTY BANK</label>
                      </li>
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="check3"
                          name="Sensex"
                          value=""
                        />
                        <label className="form-check-label">SENSEX</label>
                      </li>
                    </ul>
                  </li>
                  <div className="divider"></div>

                  <li>
                    <Link
                      to="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline category1">
                        Day Price Filter
                      </span>{" "}
                    </Link>
                    <ul
                      className=" nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="daygainer"
                          name="Daygainer"
                          value=""
                        />
                        <label className="form-check-label">Day Gainer</label>
                      </li>
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="daylooser"
                          name="Daylooser"
                          value=""
                        />
                        <label className="form-check-label">Day Looser</label>
                      </li>
                    </ul>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <Link
                      to="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline category1">
                        Weekly Price Filter
                      </span>{" "}
                    </Link>
                    <ul
                      className=" nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="weeklygainer"
                          name="Weeklygainer"
                          value=""
                        />
                        <label className="form-check-label">Weekly Gainer</label>
                      </li>
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Weeklylooser"
                          name="Weeklylooser"
                          value=""
                        />
                        <label className="form-check-label">Weekly Looser</label>
                      </li>
                    </ul>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <Link
                      to="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline category1">
                        Yearly Price Filter
                      </span>{" "}
                    </Link>
                    <ul
                      className=" nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="yearlygainer"
                          name="Yearlygainer"
                          value=""
                        />
                        <label className="form-check-label">Yearly Gainer</label>
                      </li>
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="yearlylooser"
                          name="Yearlylooser"
                          value=""
                        />
                        <label className="form-check-label">Yearly Looser</label>
                      </li>
                    </ul>
                  </li>
                  <div className="divider"></div>
                  <li>
                    <Link
                      to="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline category1">
                        Volume
                      </span>{" "}
                    </Link>
                    <ul
                      className=" nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="toprated"
                          name="Toprated"
                          value=""
                        />
                        <label className="form-check-label">Top Traded</label>
                      </li>
                      <li className="w-100 labelcheck">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="volumesurge"
                          name="Volumesurge"
                          value=""
                        />
                        <label className="form-check-label">Volume Surge</label>
                      </li>
                    </ul>
                  </li>
                </ul>
               
              </div>
              <div className="row">
                  <div className="applyfilter col-md-12">
                    <button className="btn btn-primary">Apply Filters</button>
                  </div>
                </div>
            </div>
      
        
    </div>
  );
}
