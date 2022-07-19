import React from "react";
import "./AddProduct.css";
import { Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export const AddProduct = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="addproduct">
      <Typography variant="h6">Add Product</Typography>
      <TextField
        required
        id="outlined-basic"
        className="product__input"
        label="Name"
        variant="outlined"
      />
      <Box sx={{ width: 370 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="product__input"
            value={age}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        id="outlined-basic"
        className="product__input"
        label="manufacturer"
        required
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="product__input"
        label="Available items"
        type="number"
        required
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="product__input"
        label="Price"
        required
        type="number"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        className="product__input"
        label="Image URL"
        variant="outlined"
        type="text"
        required
      />

      <TextField
        id="outlined-basic"
        className="product__input"
        label="Product Description"
        type="text"
        variant="outlined"
        required
      />
      <Button fullWidth variant="contained" className="address__btn">
        Save Product
      </Button>
    </div>
  );
};
