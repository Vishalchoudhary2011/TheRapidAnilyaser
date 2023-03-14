import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { baseURL } from "./BasePath";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { isEmpty } from "lodash";
import { omit } from "lodash";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [confPasswordType, setConfPasswordType] = useState("password");
  const navigate = useNavigate();

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const toggleCPassword = (e) => {
    e.preventDefault();
    if (confPasswordType === "password") {
      setConfPasswordType("text");
      return;
    }
    setConfPasswordType("password");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validate(e, name, value);
    setData({ ...data, [name]: value });
  };

  const validate = (e, name, values) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
      /^(?=.*[A-Za-z\])(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;

    switch (name) {
      case "email":
        {
          if (!emailRegex.test(values)) {
            setErrors({
              ...errors,
              email: "*Please enter a valid email.",
            });
          } else {
            let newObj = omit(errors, "email");
            setErrors(newObj);
          }
        }
        break;

      case "password":
        {
          if (!passwordRegex.test(values)) {
            setErrors({
              ...errors,
              password:
                "Enter a min 8 character with at least one digit and one special characters",
            });
          } else {
            let newObj = omit(errors, "password");
            setErrors(newObj);
          }
        }
        break;

      case "confirmPassword":
        {
          if (data.password != values) {
            setErrors({
              ...errors,
              confirmPassword: "*Password should be same",
            });
          } else {
            let newObj = omit(errors, "confirmPassword");
            setErrors(newObj);
          }
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email !== "") {
      if (data.password !== "") {
        if (data.confirmPassword !== "") {
          if (isEmpty(errors)) {
            axios
              .post(baseURL + "/signup/", data)
              .then((response) => {
                toast("*User registered successfully..!!");
                setTimeout(() => {
                  navigate("/signin");
                }, 4000);
              })
              .catch((err) => {
                toast(err.response.data.email);
              });
          } else {
            return;
          }
        } else {
          toast("Confirm password is required");
        }
      } else {
        toast("Password is required");
      }
    } else {
      toast("Email is required");
    }
  };

  return (
    <div>
      <div className="App">
        <Helmet>
          <title>Signup | TheRapidAnalyzer</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#" />
        </Helmet>
      </div>
      <div className="wrapper">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center mb-4">
                        <p className="mb-0">
                          Create your{" "}
                          <Link to="" className="logocolor">
                            TheRapidAnalyzer
                          </Link>{" "}
                          account - For Free{" "}
                        </p>
                      </div>
                      <div className="d-grid gap-3">
                        <Link to="" className="btn btn-facebook">
                          <i className="bx bxl-facebook"></i>Login with facebook
                        </Link>
                        <Link to="" className="btn btn-google-plus">
                          <i className="bx bxl-google"></i>{" "}
                          <span>Login with google</span>
                        </Link>
                      </div>
                      <div className="login-separater text-center mb-4">
                        {" "}
                        <span>OR SIGN IN WITH EMAIL</span>
                        <div className="divider"></div>
                      </div>
                      <div className="form-body">
                        <form onSubmit={handleSubmit} className="row g-4">
                          <div className="col-12">
                            <label
                              for="inputEmailAddress"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={data.email}
                              className="form-control"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                              onChange={handleChange}
                            />
                            <p class="text-danger">{errors.email}</p>
                          </div>
                          <div className="col-12">
                            <label
                              for="inputChoosePassword"
                              className="form-label"
                            >
                              Enter Password
                            </label>
                            <div className="input-group">
                              <input
                                type={passwordType}
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                className="form-control"
                                placeholder="Password"
                              />

                              <button
                                className="input-group-text bg-transparent"
                                onClick={togglePassword}
                              >
                                {passwordType === "password" ? (
                                  <i className="bx bx-show"></i>
                                ) : (
                                  <i className="bx bx-hide"></i>
                                )}
                              </button>
                            </div>
                            <p class="text-danger">{errors.password}</p>
                          </div>
                          <div className="col-12">
                            <label
                              for="inputConfirmPassword"
                              className="form-label"
                            >
                              Enter Confirm Password
                            </label>
                            <div className="input-group">
                              <input
                                type={confPasswordType}
                                name="confirmPassword"
                                onChange={handleChange}
                                value={data.confirmPassword}
                                className="form-control"
                                placeholder="Confirm Password"
                              />

                              <button
                                className="input-group-text bg-transparent"
                                onClick={toggleCPassword}
                              >
                                {confPasswordType === "password" ? (
                                  <i className="bx bx-show"></i>
                                ) : (
                                  <i className="bx bx-hide"></i>
                                )}
                              </button>
                            </div>
                            <p class="text-danger">{errors.confirmPassword}</p>
                          </div>

                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                <i className="bx bxs-lock-open"></i>Sign Up
                              </button>
                            </div>
                          </div>
                          <div className="col-12 text-center">
                            <p className="mb-0">
                              Already have an account ?{" "}
                              <Link to="/signin">Signin here</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
