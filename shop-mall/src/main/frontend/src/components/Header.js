import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

function Header() {
  const Login = () => {
    const session = sessionStorage.getItem("name");

    if (session === undefined || session === null) {
      return (
        <Grid item xs={2}>
          <p>
            <Link to={"/member/login"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={2}>
          <p>{session}님 환영합니다.</p>
          <p>
            <button onClick={logOut}>Logout</button>
          </p>
        </Grid>
      );
    }
  };

  const logOut = async () => {
    await axios({
      method: "post",
      url: "/member/logout.do",
    }).then((res) => {
      console.log(res);
      sessionStorage.clear();
      movePage();
    });
  };

  const pageBack = useNavigate();

  function movePage() {
    pageBack("/");
  }

  return (
    <div className="header">
      <header>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <h1>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Board
              </Link>
            </h1>
          </Grid>
          <Login />
        </Grid>
      </header>
    </div>
  );
}

export default Header;
