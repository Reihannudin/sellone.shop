import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, LOGIN_URL } from "../../config";
import api from "../../config/api";

function Login({ setLogged }) {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const auth_token = urlParams.get("auth_token");
  const user = urlParams.get("user");


  useEffect(() => {
    if (auth_token) {
      api
        .get("/user", {
          headers: {
            Authorization: "Bearer " + auth_token,
          },
        })
        .then((res) => {
          if (res) {
            setLogged(true)
            console.log("You are logged now");
            localStorage.setItem("token", auth_token);
            localStorage.setItem("whoLogin", user);
            navigate("/");
          } else {
            alert("Something wrong!");
          }
        });
    }
  }, []);

  return <></>;
}

export default Login;
