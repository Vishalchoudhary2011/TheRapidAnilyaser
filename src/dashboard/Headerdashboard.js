import React from "react";
import { Link } from "react-router-dom";

export default function Headerdashboard() {
  return (
    <div>
      <header className="topbar p-3 mb-3 border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="logocolor1 text-decoration-none">
                TheRapidAnalyzer
              </Link>
            </div>
            <div className="col-md-9">
              <ul id="menu">
                <li>
                  <div class="notification-box">
                    <span class="notification-count">6</span>
                    <div class="notification-bell">
                      <span class="bell-top"></span>
                      <span class="bell-middle"></span>
                      <span class="bell-bottom"></span>
                      <span class="bell-rad"></span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="dropdown pb-4 userdropdown">
                    <Link
                      to="/"
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt="hugenerd"
                        width="30"
                        height="30"
                        className="rounded-circle"
                      />
                      <span className="d-none d-sm-inline mx-1">NAVIN</span>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-dark text-small shadow"
                      aria-labelledby="dropdownUser1"
                    >
                      <li>
                        <Link className="dropdown-item" to="/">
                          New project...
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
