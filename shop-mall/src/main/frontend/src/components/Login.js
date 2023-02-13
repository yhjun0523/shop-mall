import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

function Login() {
  const [member, setMember] = useState({
    id: "",
    pw: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const pageBack = useNavigate();

  function movePage() {
    pageBack("/");
  }

  const login = async () => {
    const formData = new FormData();
    formData.append("id", member.id);
    formData.append("pw", member.pw);

    await axios({
      method: "post",
      url: "/member/login.do",
      data: member,
    }).then((res) => {
      console.log(res);

      if (res.data.accessToken === undefined) {
        window.alert("로그인 실패.");
      } else {
        window.alert("로그인 성공.");
        sessionStorage.setItem("accessToken", res.data.accessToken);
        movePage();
      }
    });
  };

  const onChange = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="board">
      <Container component={Paper}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                sx={{ m: 1, width: "25ch" }}
                required
                id="id"
                name="id"
                label="ID"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  id="pw"
                  name="pw"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" onClick={login} sx={{ mx: 1, my: 2 }}>
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              pageBack(-1);
            }}
            sx={{ mx: 1, my: 2 }}
          >
            Return
          </Button>
        </React.Fragment>
      </Container>
    </div>
  );
}

export default Login;
