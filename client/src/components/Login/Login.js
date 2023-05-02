import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, storeToken } from "../../services/LocalStorageService";
import "./login.css";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
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

    if (inputField.email === "") {
      err.email = "Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(inputField.email)) {
        err.email = "Email not valid!";
      }
    }

    if (inputField.password === "") {
      err.password = "Password required!";
    } else {
      if (inputField.password.length < 6) {
        err.password = "Password should greater than 6 characters!";
      }
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const handleLogin = async () => {
    console.warn("email, password", inputField.email, inputField.password);
    let result = await fetch("http://localhost:5000/api/user/login", {
      method: "post",
      body: JSON.stringify({ ...inputField }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);

    let isValid = validateForm();

    if (isValid) {
      if (result.status === "success") {
        storeToken(result.token);
        navigate("/");
      }
      if (result.status === "failed") {
        setFormError({ status: true, msg: result.message, type: "error" });
      }
      // if (!result.auth) {
      //   storeToken("user", JSON.stringify(result.user));
      //   storeToken("token", JSON.stringify(result.auth));
      //   navigate("/");
      // } else {
      //   alert("please enter correct details");
      // }
      // alert("Submitted");
      // //API call to server
    }
    console.log(isValid);
  };

  return (
    <div>
      <br />

      <form className=" align-items-center login">
        <h1>Login</h1>
        <input
          className="inputBox"
          type={"email"}
          placeholder="Enter Email"
          onChange={(e) =>
            setInputField({
              ...inputField,
              [e.target.name]: e.target.value,
            })
          }
          name="email"
          value={inputField.email}
          autoComplete="email"
        />
        <span className="non-valid">{formError.email}</span>
        <input
          className="inputBox"
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setInputField({
              ...inputField,
              [e.target.name]: e.target.value,
            })
          }
          name="password"
          value={inputField.password}
          autoComplete="new-password"
        />
        <span className="non-valid">{formError.password}</span>
        <button className="inputButton" type="button" onClick={handleLogin}>
          Login
        </button>
        <p className="signup">
          Looking to <Link to="/signup">create an account </Link> ?
        </p>

        <p className="non-valid">{formError.msg}</p>
      </form>
    </div>
  );
};

export default Login;
