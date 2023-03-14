import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { baseURL } from "./BasePath";
import axios from "axios";
import { isEmpty, omit } from "lodash";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [data, setData] = useState({
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
    const passwordRegex =
      /^(?=.*[A-Za-z\])(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;

    switch (name) {
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
          if (data.password !== values) {
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
    if (data.password !== "") {
      if (data.confirmPassword !== "") {
        if (isEmpty(errors)) {
          axios
            .post(baseURL + "/forgot_password/", data)
            .then((response) => {
              toast("*Password reset successfully..!!");
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
                      <div className="form-body">
                        <form onSubmit={handleSubmit} className="row g-4">
                          <div className="col-12">
                            <label
                              for="inputChoosePassword"
                              className="form-label"
                            >
                              Enter New Password
                            </label>
                            <div className="input-group">
                              <input
                                type={passwordType}
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                className="form-control"
                                placeholder="New Password"
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
                              for="inputconfirmPassword"
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
                                <i className="bx bxs-lock-open"></i>Change
                                Password
                              </button>
                            </div>
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
