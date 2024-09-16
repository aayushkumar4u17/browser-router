import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import toast from "react-hot-toast";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  let [registeredUser, SetRegisteredUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  useEffect(() => {
    async function fetchRegisteredUser() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);
      SetRegisteredUser(data);
    }
    fetchRegisteredUser();
  }, []);

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
    let authUser = registeredUser.find((user) => {
      return (
        user.email === loginUser.email && user.password === loginUser.password
      );
    });
    console.log(authUser);
    if (authUser) {
      sessionStorage.setItem("TOKEN", authUser.id);
      navigate("/profile")
    } else {
      toast.error("Not Registered");
      navigate("/register");
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
