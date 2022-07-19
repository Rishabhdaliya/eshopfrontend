import React from "react";
import "./Address.css";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Address = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="address">
      <Box sx={{ minWidth: 700 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography variant="h6">-OR-</Typography>
      <Typography variant="h6">Add Address</Typography>
      <TextField
        required
        id="outlined-basic"
        className="address__input"
        label="Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="address__input"
        label="Contact Number"
        required
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="address__input"
        label="Street"
        type="email"
        required
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="address__input"
        label="City"
        required
        type="text"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="address__input"
        label="State"
        variant="outlined"
        type="text"
        required
      />
      <TextField
        id="outlined-basic"
        className="address__input"
        label="landmark"
        type="text"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="address__input"
        label="Zip Code"
        type="text"
        variant="outlined"
        required
      />
      <Button fullWidth variant="contained" className="address__btn">
        SIGN IN
      </Button>
    </div>
  );
};
