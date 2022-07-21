import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";
import * as yup from "yup";
import { ref } from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/Auth/AuthAction";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
  contactNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10, "Must be 10 digits")
    .required("A phone number is required"),
});

export const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = values;
      delete data.confirmPassword;
      console.log(data);
      dispatch(addUser(data));
      // alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);
  return (
    <div className="signup">
      <LockOutlinedIcon className="login__logo" />
      <Typography variant="h5" className="login__signin">
        Sign Up
      </Typography>
      <form onSubmit={formik.handleSubmit} className="signup">
        <TextField
          required
          id="outlined-basic"
          className="login__input"
          label="First name"
          variant="outlined"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="outlined-basic"
          className="login__input"
          label="Last Name"
          required
          variant="outlined"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
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
        <TextField
          id="outlined-basic"
          className="login__input"
          label="Confirm password"
          variant="outlined"
          required
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <TextField
          id="outlined-basic"
          className="login__input"
          label="Contact Number"
          type="number"
          name="contactNumber"
          variant="outlined"
          pattern="[1-9]{1}[0-9]{9}"
          required
          value={formik.values.contactNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.contactNumber && Boolean(formik.errors.contactNumber)
          }
          helperText={
            formik.touched.contactNumber && formik.errors.contactNumber
          }
        />
        <Button
          color="error"
          className="login__button"
          type="submit"
          variant="contained"
        >
          SIGN UP
        </Button>
      </form>
      <Link className="link" to="/login">
        <Typography className="login__register" variant="caption">
          Already have an account? Sign in
        </Typography>
      </Link>

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
