import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as yup from "yup";
import { ref } from "yup";

import "./Login.css";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Auth/AuthAction";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = values;
      dispatch(login(data)).then(() => navigate("/"));
    },
  });
  return (
    <div className="login">
      <LockOutlinedIcon className="login__logo" />
      <Typography variant="h5" className="login__signin">
        Sign in
      </Typography>
      <form onSubmit={formik.handleSubmit} className="signup">
        <TextField
          id="outlined-basic"
          className="login__input"
          type="email"
          required
          name="email"
          variant="outlined"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="outlined-basic"
          className="login__input"
          label="Password"
          name="password"
          required
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          color="error"
          className="login__button"
          type="submit"
          variant="contained"
        >
          SIGN IN
        </Button>
      </form>
      <Link className="link" to="/signup">
        <Typography className="login__register" variant="caption">
          Don't have an account? Sign Up
        </Typography>
      </Link>

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
