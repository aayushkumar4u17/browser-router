import React, { Fragment, useState } from "react";
import style from "./login.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
    if (loginUser.email.trim() !== "" && loginUser.password.trim() !== "") {
      axios.post("http://localhost:5173/login", loginUser).then(() => {
        toast.success("Logged in successfully");
        setLoginUser({ email: "", password: "" });
        navigate("/home");
      });
    } else {
      console.log("empty input");
    }
  };

  return (
    <Fragment>
      <form id={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            placeholder="email"
            id="email"
            name="email"
            value={loginUser.email}
            onChange={handleLogin}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            value={loginUser.password}
            onChange={handleLogin}
          />
        </div>

        <div className={style.formGroup}>
          <button onClick={loginSubmit}>login</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
