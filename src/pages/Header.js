import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

const Handlenavigate = () =>{
  navigate("/signin")
}

  return (
    <div>
      <header className="header-area">
        <div className="top-header-area">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="top-header-content">
                  <Link href="/">
                    <i className="bx bxs-phone"></i>{" "}
                    <span>Call Us: 001-1234-88888</span>
                  </Link>
                  <Link href="/">
                    <i className="bx bx-envelope"></i>{" "}
                    <span>Email: info@therapidanalyzer.com</span>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="top-header-content">
                  
                  <button onClick={Handlenavigate} type="button" className="loginbtn"> <i className="bx bx-lock-alt"></i><span> Signin/Signup</span></button>

                  <div className="btnlang">
                    <select className="form-select" id="language" name="language">
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              TheRapidAnalyzer
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse headnav"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/investing">
                    Investing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/trading">
                    Trading
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/researchtools">
                    Research Tools
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Apps
                  </Link>
                  <ul className="dropdown-menu naventry">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Beginner
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Another link
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        A third link
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
