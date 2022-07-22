import React from "react";
import "./Address.css";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as yup from "yup";
import { ref } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, addUser } from "../../redux/Auth/AuthAction";
import { Link } from "react-router-dom";
import { Notify } from "../../UI/Notify";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  street: yup.string().required("Required"),
  landmark: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zipcode: yup.string().required("Required"),
  contactNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10, "Must be 10 digits")
    .required("A phone number is required"),
});
export const Address = () => {
  const [age, setAge] = React.useState("");
  const dispatch = useDispatch();
  const address = useSelector((store) => store.user.address);
  const [notification, setNotification] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const formik = useFormik({
    initialValues: {
      contactNumber: "",
      street: "",
      landmark: "",
      name: "",
      city: "",
      state: "",
      zipcode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = values;
      dispatch(addAddress(data)).then(() => {
        setNotification({
          isOpen: true,
          message: "Successfully added Address",
          type: "success",
        });
      });
    },
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Notify notification={notification} setNotification={setNotification} />

      <div className="address">
        <Box sx={{ minWidth: 700 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Address
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Address"
              onChange={handleChange}
            >
              <MenuItem
                value={10}
              >{`${address.street} >> ${address.city} >> ${address.state}`}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <form onSubmit={formik.handleSubmit} className="address">
          <Typography variant="h6">-OR-</Typography>
          <Typography variant="h6">Add Address</Typography>
          <TextField
            required
            id="outlined-basic"
            className="address__input"
            label="Name"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            id="outlined-basic"
            className="address__input"
            label="Contact Number"
            required
            variant="outlined"
            type="number"
            name="contactNumber"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.contactNumber &&
              Boolean(formik.errors.contactNumber)
            }
            helperText={
              formik.touched.contactNumber && formik.errors.contactNumber
            }
          />
          <TextField
            id="outlined-basic"
            className="address__input"
            label="Street"
            type="text"
            required
            variant="outlined"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
          <TextField
            id="outlined-basic"
            className="address__input"
            label="City"
            required
            type="text"
            variant="outlined"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            id="outlined-basic"
            className="address__input"
            label="State"
            variant="outlined"
            type="text"
            required
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          />
          <TextField
            id="outlined-basic"
            className="address__input"
            label="landmark"
            type="text"
            variant="outlined"
            name="landmark"
            value={formik.values.landmark}
            onChange={formik.handleChange}
            error={formik.touched.landmark && Boolean(formik.errors.landmark)}
            helperText={formik.touched.landmark && formik.errors.landmark}
          />
          <TextField
            id="outlined-basic"
            className="address__input"
            label="Zip Code"
            type="text"
            variant="outlined"
            required
            name="zipcode"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
            helperText={formik.touched.zipcode && formik.errors.zipcode}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            className="address__btn"
          >
            SAVE ADDRESS
          </Button>
        </form>
      </div>
    </>
  );
};
