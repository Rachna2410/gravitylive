import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storeToken } from "../../services/LocalStorageService";
import "./signup.css";

const SignUp = () => {
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    phone: 0,
    password: "",
    password_confirmation: "",
    address: "",
    tc: false,
  });

  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = getToken("token");
  //   if (auth) {
  //     // navigate("/");
  //   }
  // });

  const validateForm = () => {
    let err = {};

    if (inputField.name === "") {
      err.name = "Username required!";
    }
    if (inputField.email === "") {
      err.email = "Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(inputField.email)) {
        err.email = "Email not valid!";
      }
    }

    if (inputField.password === "" || inputField.password_confirmation === "") {
      err.password = "Password and Confirm Password required!";
    } else {
      if (inputField.password !== inputField.password_confirmation) {
        err.password_confirmation = "Password not matched!";
      } else {
        if (inputField.password.length < 6) {
          err.password = "Password should greater than 6 characters!";
        }
      }
    }

    if (inputField.phone === "") {
      err.phone = "Phone number required!";
    } else {
      let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!regex.test(inputField.phone)) {
        err.phone = "Phone number is not valid!";
      }
    }
    if (inputField.address === "") {
      err.address = "Address required!";
    }
    if (inputField.tc !== true) {
      err.tc = "Terms & Conditions required!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const collectData = async () => {
    // console.warn(
    //   "sample",
    //   inputField.name,
    //   inputField.email,
    //   inputField.phone,
    //   inputField.address,
    //   inputField.password,
    //   inputField.password_confirmation,
    //   inputField.tc
    // );
    let result = await fetch("http://localhost:5000/api/user/register", {
      method: "post",
      body: JSON.stringify({
        ...inputField,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    let isValid = validateForm();

    if (isValid) {
      if (result.status === "success") {
        storeToken(JSON.stringify(result.token));
        navigate("/login");
      }
      if (result.status === "failed") {
        setFormError({ status: true, msg: result.message, type: "error" });
      }

      //API call to server
    }
  };

  return (
    <div>
      <br />
      <section className="vh-50" style={{ backgroundColor: "#fff" }}>
        <div className="container h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <p>{formError.msg}</p>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              onChange={(e) =>
                                setInputField({
                                  ...inputField,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              placeholder="Enter Name"
                              name="name"
                              value={inputField.name}
                              autoComplete="name"
                            />
                            <span className="non-valid">{formError.name}</span>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              onChange={(e) =>
                                setInputField({
                                  ...inputField,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              placeholder="Enter Email"
                              name="email"
                              value={inputField.email}
                              autoComplete="email"
                            />
                            <span className="non-valid">{formError.email}</span>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="phone"
                              className="form-control"
                              onChange={(e) =>
                                setInputField({
                                  ...inputField,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              placeholder="Enter Phone number"
                              name="phone"
                              value={inputField.phone}
                              autoComplete="phone"
                            />
                            <span className="non-valid">{formError.phone}</span>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="address"
                              className="form-control"
                              onChange={(e) =>
                                setInputField({
                                  ...inputField,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              placeholder="Enter Your Address"
                              name="address"
                              value={inputField.address}
                              autoComplete="address"
                            />
                            <span className="non-valid">
                              {formError.address}
                            </span>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              onChange={(e) =>
                                setInputField({
                                  ...inputField,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              placeholder="Enter Password"
                              name="password"
                              value={inputField.password}
                              autoComplete="new-password"
                            />
                            <span className="non-valid">
                              {formError.password}
                            </span>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password_confirmation"
                              className="form-control"
                              onChange={(e) =>
                                setInputField({
                                  ...inputField,
                                  [e.target.name]: e.target.value,
                                })
                              }
                              placeholder="Confirm Password"
                              name="password_confirmation"
                              value={inputField.password_confirmation}
                              autoComplete="new-password"
                            />
                            <span className="non-valid">
                              {formError.password_confirmation}
                            </span>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            onChange={(e) =>
                              setInputField({
                                ...inputField,
                                [e.target.name]: true,
                              })
                            }
                            name="tc"
                            value={inputField.tc}
                            id="tc"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <Link to="/terms">Terms of service</Link>
                          </label>
                        </div>
                        <span className="non-valid">{formError.tc}</span>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-lg"
                            onClick={collectData}
                          >
                            Register
                          </button>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">
                          Have already an account?{" "}
                          <Link to="/login" className="fw-bold text-body">
                            <u>Login here</u>
                          </Link>
                        </p>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
