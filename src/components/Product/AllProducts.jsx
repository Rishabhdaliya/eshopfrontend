import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

import "./AllProducts.css";
import { Product } from "./Product";

export const AllProducts = () => {
  const [alignment, setAlignment] = useState("web");
  const [age, setAge] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setProduct(response.data.products);
      setapiData(response.data.products);
      setLoading(false);
    };

    loadPost();
  }, []);
  console.log(product);

  const handleSort = (event) => {
    setAge(event.target.value);
    console.log(age);
    if (event.target.value === 20) {
      const sorted = apiData.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setProduct(sorted);
    } else if (event.target.value === 30) {
      const sorted = apiData.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setProduct(sorted);
    } else if (event.target.value === 40) {
      const sorted = apiData.sort(
        (a, b) => parseFloat(a.id) - parseFloat(b.id)
      );
      setProduct(sorted);
    } else {
      setProduct(apiData);
    }
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (event.target.value === "APPAREL") {
      const selected = apiData.filter((item) => item.category === "fragrances");
      setProduct(selected);
    } else if (event.target.value === "ELECTRONICS") {
      const selected = apiData.filter(
        (item) => item.category === "smartphones"
      );
      setProduct(selected);
    } else if (event.target.value === "PERSONALCARE") {
      const selected = apiData.filter((item) => item.category === "laptops");
      setProduct(selected);
    } else {
      setProduct(apiData);
    }
  };

  return (
    <div className="allproducts">
      <div className="toggle">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="ALL">ALL</ToggleButton>
          <ToggleButton value="APPAREL">APPAREL</ToggleButton>
          <ToggleButton value="ELECTRONICS">ELECTRONICS</ToggleButton>
          <ToggleButton value="PERSONALCARE">PERSONAL CARE</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="sort">
        <Box sx={{ width: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Sort By"
              onChange={handleSort}
            >
              <MenuItem value={10}>Default</MenuItem>
              <MenuItem value={20}>Price high to low</MenuItem>
              <MenuItem value={30}>Price low to high</MenuItem>
              <MenuItem value={40}>Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="products">
        <Product item={product} />
      </div>
    </div>
  );
};
