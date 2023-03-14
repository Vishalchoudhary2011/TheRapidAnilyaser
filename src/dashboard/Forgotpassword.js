import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { baseURL } from "./BasePath";
import axios from "axios";
import { isEmpty, omit } from "lodash";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forgotpassword() {
  const [data, setData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validate(e, name, value);
    setData({ ...data, [name]: value });
  };

  const validate = (e, name, values) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email !== "") {
      if (isEmpty(errors)) {
        axios
          .post(baseURL + "/forgot_password/", data)
          .then((response) => {
            toast("Reset password email sent succesfully.");
            setTimeout(() => {
              navigate("/login");
            }, 4000);
          })
          .catch((err) => {
            toast(err.response.data.detail);
          });
      } else {
        return;
      }
    } else {
      toast("Email is required");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card shadow-none">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="mb-4">
                        <p className="mb-0">
                          Forgotten your password? Enter your registered e-mail
                          address below, and we'll send you an e-mail allowing
                          you to reset it.
                        </p>
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
                              className="form-control"
                              id="inputEmailAddress"
                              placeholder="Email Address"
                              onChange={handleChange}
                              value={data.email}
                            />
                            <p class="text-danger">{errors.email}</p>
                          </div>

                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                <i className="bx bxs-lock-open"></i>Reset my
                                password
                              </button>
                              <br />
                              <p className="m-y-1">
                                Please <Link href="/"> contact us</Link> if you
                                have any trouble resetting your password.
                              </p>
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
