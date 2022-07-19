import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <LockOutlinedIcon className="login__logo" />
      <Typography variant="h5" className="login__signin">
        Sign in
      </Typography>
      <TextField
        required
        id="outlined-basic"
        className="login__input"
        label="Email Address"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="login__input"
        label="Password"
        variant="outlined"
      />
      <Button color="error" className="login__button" variant="contained">
        SIGN IN
      </Button>
      <Typography className="login__register" variant="caption">
        Don't have an account? Sign Up
      </Typography>

      <div className="login__copyright">
        <p>
          Copyright &#169;
          <a target="_blank" href="https://www.upgrad.com/">
            Upgrad
          </a>
          2021
        </p>
      </div>
    </div>
  );
};
