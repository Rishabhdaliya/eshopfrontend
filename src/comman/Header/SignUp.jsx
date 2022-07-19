import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";

export const SignUp = () => {
  return (
    <div className="signup">
      <LockOutlinedIcon className="login__logo" />
      <Typography variant="h5" className="login__signin">
        Sign Up
      </Typography>
      <TextField
        required
        id="outlined-basic"
        className="login__input"
        label="First name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="login__input"
        label="Last Name"
        required
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="login__input"
        label="Email Address"
        type="email"
        required
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="login__input"
        label="Password"
        required
        type="password"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="login__input"
        label="Confirm password"
        variant="outlined"
        type="password"
        required
      />
      <TextField
        id="outlined-basic"
        className="login__input"
        label="Contact Number"
        type="number"
        variant="outlined"
        required
      />
      <Button color="error" className="login__button" variant="contained">
        SIGN IN
      </Button>
      <Typography className="login__register" variant="caption">
        Already have an account? Sign in
      </Typography>

      <div className="login__copyright">
        <p>
          Copyright &#169;
          <a target="_blank" href="https://www.upgrad.com/">
            Upgrad
          </a>{" "}
          2021{" "}
        </p>
      </div>
    </div>
  );
};
